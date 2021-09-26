$(document).ready(function(){
  // underlines the nav link that has been clicked
  $(".nav-bar").click(function() {
    $(".nav-bar").removeClass('focus');
    $(this).addClass('focus');
  });

  // reference: https://stackoverflow.com/questions/24887258/highlight-navigation-link-as-i-scroll-down-the-page (user: mdesdev)

  // when the mouse is over a section, the corresponding nav item will be underlined
  $("section").mouseover(function(){
      $('nav a[href="#'+$(this).attr('id')+'"]').addClass('focus');
  });

  // when the mouse leaves a section, the corresponding nav item will no longer be underlined
  $("section").mouseleave(function(){
      $('nav a[href="#'+$(this).attr('id')+'"]').removeClass('focus');
  });

  // on scroll, remove the nav item's underline
  $(document).scroll(function() {
    $(".nav-bar").removeClass('focus');
  });

  // when the menu bars are clicked, show the x
  $("#menu-bars").click(function() {
    $("#menu-bars").hide();
    $("#menu-times").show();
    $(".nav-bar").show();

  });

  // when the x is clicked, show the menu bars
  $("#menu-times").click(function() {
    $("#menu-times").hide();
    $(".nav-bar").hide();
    $("#menu-bars").show();
  });
});
