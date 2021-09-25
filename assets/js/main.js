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
});
