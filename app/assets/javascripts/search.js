$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/groups/[:id]/edit',
      data: { keyword: input },
      dataType: 'json'
    })

  });
});