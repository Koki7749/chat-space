$(function(){

  var search_list = $("#user-search-result");

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

$(function(){
var search_list = $("#myid-Hello-World");

function appendMember(user_id, user_name){
  var html=`
            <div class='chat-group-user clearfix js-chat-member' id='${user_id}'>
            <input name='group[user_ids][]' type='hidden' value='${user_id}'>
            <p class='chat-group-user__name'>${user_name}</p>
            <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
            </div>`
            search_list.append(html);
          }

  $('#user-search-result').on("click", ".user-search-add " ,function(e){
    e.preventDefault();
      var user_id = $(this).data('user-id');
      var user_name = $(this).data('user-name');
      $('#user-search-result').empty();
      appendMember(user_id, user_name);
    })
});

$(function(){
  $(document).on("click", ".user-search-remove " ,function(e){
    e.preventDefault();
    $(this).parent().remove();
  })
})
