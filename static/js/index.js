$(function(){
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100 && $('#offer').offset().top - $(this).scrollTop() - $(this).height() > 0) {
      $('.floating').fadeIn();
    } else {
      $('.floating').fadeOut();
    }
  });
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // disableクラスがあったら反応しない
      if($(this).hasClass("disabled")){
        return false;
      }
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(document).ready(function(){
  $('.responsive3').slick({
  autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
      autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
      autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
