$(document).on('turbolinks:load', function(){
  function buildHTML(post){

    var image = post.image? post.image : ""
    var html = `<div class="chat_message" data-id=${post.id}">
                <div class="chat-member">
                  ${post.user_name}
                </div>
                <div class="chat-time">
                  ${post.created_at}
                </div>
                <div class="chat-comment">
                <p class="lower-post__body">
                  ${post.body}
                </p>
                <img class="lower-message__image" src=${image}>
                </div>
                </div>`
    return html;
  }

  $('#new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
  
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-home').append(html)
      $("form")[0].reset();
      $('.chat-home').animate({ scrollTop: $('.chat-home')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })

    .always(() => {
      $(".send-bottun").removeAttr("disabled");
    })
  })



$(function() {

    var reloadPosts = function() {
      if (window.location.href.match(/\/groups\/\d+\/posts/)){
      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      last_post_id = $(".chat-home .chat_message:last-child").data("id");

      $.ajax({
        //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
        url: 'api/posts',
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_post_id}
      })
      .done(function(posts) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        posts.forEach(function(post){
          insertHTML = buildHTML(post);
          $('.chat-home').append(insertHTML);
          $('.chat-home').animate({ scrollTop: $('.chat-home')[0].scrollHeight});
        });
      })  
      .fail(function() {
        alert('自動更新に失敗しました');
    });
  };
  }
  setInterval(reloadPosts, 5000);
  });
})