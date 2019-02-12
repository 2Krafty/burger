$(document).ready(function () {

  $(".mark-devoured").on("click", function () {

    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "PUT"
    }).then(function(data)  {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  });
  $("#burger-btn").on("click", function (e) {
    e.preventDefault();

    const burgerItem = {
      burger_name: $("#burger-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerItem
    }).then(function (data) {
      location.reload();
    });

  });


});