$(document).on('turbolinks:load', function(){

  var search_list = $("#user-search-result");
  // var member_list = $("#member-append");

  function appendUser(user){
    var html=`
              <div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.user_id} data-user-name="${user.name}">追加</div>
              </div>`
              search_list.append(html);
  }

  function appendErrMsgToHTML(msg){
    var html = 
                `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${msg}</p>
                </div>`;
                search_list.append(html);
  }

  $("#user-search-field").on("keyup", function(e) {
    e.preventDefault();
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json',
    })

    .done(function(user){
      if (user.length !== 0) {
        $('#user-search-result').empty();
        user.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        $('#user-search-result').empty();
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });
});

// let btn = document.querySelector("user-search-add chat-group-user__btn chat-group-user__btn--add");
// let obj = document.querySelector("chat-group-user clearfix");
// btn.addEventListener("click", function() {
//   obj.classList.remove("");
// }
// console.log("追加ボタンが押されました");


$(function(){
  $('#user-search-result').on("click", ".user-search-add " ,function(e){
    e.preventDefault();
    console.log(this)
  // $(".chat-group-user clearfix).classList.remove
  })
});

