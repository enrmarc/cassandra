$(function() {
  
  $(".legal").on("click",function(){
    $(".overlay").toggleClass("none"),
    $(".legal-scroll").toggleClass("fadeInUp").toggleClass("fadeOutDown"),
    $("html").addClass("no-scroll")
  }),
  $(".overlay").on("click",function(){
    $(this).toggleClass("none"),
    $(".legal-scroll").toggleClass("fadeOutDown").toggleClass("fadeInUp"),
    $("html").removeClass("no-scroll")
  }),
  $(".close").on("click",function(){
    $(".overlay").toggleClass("none"),
    $(".legal-scroll").toggleClass("fadeOutDown").toggleClass("fadeInUp"),
    $("html").removeClass("no-scroll")
  }),
  $(".legal-scroll").click(function(t){
    t.stopPropagation()
  });

  var colors = [
    '#1DE9B6', '#00BFA5', '#A7FFEB', '#FFB300',
    '#FFA000', '#FF8F00', '#44EEDD', '#8BED7E',
    '#0087EC', '#EEEEEE', '#FF5A00'
  ];

  var i = 1;

  $('.right').css('background', colors[0]);

  function animationLoop() {
    setInterval(function() {
      $('.right').animate({backgroundColor:colors[(i++) % colors.length]});
    }, 10000);
  }

  setTimeout(animationLoop, 0);

});