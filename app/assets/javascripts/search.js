$(function() {
  function appendUser(user){
    var html=`
    <div class="chat-group-user clearfix">
    <p class="chat-group-user__name">${user.name}</p>
    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
    </div>`
    return html;
  }

  $("#user-search-field").on("keyup", function(e) {
    // e.preventDefault();
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json',
    })

    .done(function(user){
      console.log(user);
      if (user.length !== 0) {
        user.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert('error');
    })
  });
});
