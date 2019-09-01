$(document).on('turbolinks:load', function(){
  function buildHTML(post){

    var image = post.image? post.image : ""

    var html = `<div class="chat">
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
                  </div>
                  <div>
                  <img class="lower-message__image"
                    src=${image}>
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
      // if(message==nul){alert('メッセージを入力してください')};
      var html = buildHTML(data);
      $('.chat-home').append(html)
      $('#post_body').reset();
      $('.chat-home').animate({ scrollTop: $('.chat-home')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })

    .always(() => {
      $(".send-bottun").removeAttr("disabled");
    })
  })
})
