// const toggleButton = document.getElementsByClassName("toggle-button")[0] /* gets first element in the array in the class, which is the toggle button itself */
// const navbarLinks = document.getElementsByClassName("navbar-links")[0] /* gets first element in the array in the class, which is the links itself */
//
// toggleButton.addEventListener("click", () => { /* when the toggle button is clicked, a function will run */
//   navbarLinks.classList.toggle("active") /* if the active class does not exist, it'll add it. if it does exist, it'll remove it */
//
// })

$(".toggle-burger-button").click(function() {
  $(".navbar-links").toggleClass("active");
  $(".toggle-burger-button").hide();
  $(".toggle-x-button").show();

})

$(".toggle-x-button").click(function() {
  $(".navbar-links").toggleClass("active");
  $(".toggle-burger-button").show();
  $(".toggle-x-button").hide();

})

$("#projects").click(function() {
  $("#projects-list").toggle()
})
