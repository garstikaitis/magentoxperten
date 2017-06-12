$(document).ready(function() {
  $('.login-button').on('click', function(e) {
    e.preventDefault();
    $(".login-button").addClass("loading");
    $(".login-button").children().hide();
    $(".login-button").css("box-shadow", "none");
    setTimeout(function() {
      $(".login-button").addClass("hide-loading");
      $(".done").addClass("finish");
      fadeIn();
    }, 2000);
  });
  function fadeIn() {
    setTimeout(function() {
      $('body').css("display", "none");
      window.location = 'notes.html';
    });
  }
  $('.signup').fadeIn(2000);
});
