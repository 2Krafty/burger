$(document).ready(()=>{

  $(".mark-devoured").on("click", ()=>{

  const burgerId = $(this).attr("data-id");
  $.ajax({
    url: "/api/burgers/" + burgerId,
    method: "PUT"
}).then((data)=>{
  location.reload();
});

  });

$(".delete").on("click", ()=> {

  const burgerId = $(this).attr("data-id");
  $.ajax({
    url: "/api/burgers/" + burgerId,
    method: "DELETE"
  }).then((data)=> {
  location.reload();
  });

})
 $("#submit-btn").on("click", (e)=> {
   e.preventDefult();

   const burgerItem = {
     burger:
     $("#burger-input").val().trim()
   }

   $.ajax({
     url: "/api/burgers",
     method: "POST",
     data: burgerItem
   }).then((data)=>{
     location.reload();
   });

 });


});