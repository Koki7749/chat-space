$(function(){
  function buildHTML(post){
    var html = `<div class="chat">
                <div class="chat-member">
                ${post.user.name}
                </div>
                <div class="chat-time">
                ${post.created_at}
                </div>
                <div class="chat-comment">
                <p class="lower-post__body">
                ${post.body}
                </p>
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
      console.log(data)
      var html = buildHTML(data);
      $('.chat-home').append(html)
      $('.new_post').val('')
    })
    .fail(function(){
      alert('error');
    })

    .always(() => {
      $(".form__submit").removeAttr("disabled");
      })
  })
})
