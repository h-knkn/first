$(function($) {

// modal

  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        return false;
    });
  });
  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
  });
  
// modal

// メニューリンク

$('.header-menu a , #menu a' ).click(function() {
  var id = $(this).attr('href');
    var position = $(id).offset().top-50;
    
  $('html, body').animate ({
      'scrollTop':position
  },500);
});



// メニューリンク

// ドロワー

WindowWidth = $(window).width();
$('.menu.open').css('width', WindowWidth); //メニューをwindowの高さいっぱいにする
  
$('.navbar_toggle').on('click', function () {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
  $('.hamburger').toggleClass('open');
 });

 $('.menu a' ).click(function() {             // ドロワーメニューリンク
  var id = $(this).attr('href');
    var position = $(id).offset().top-50;
    
  $('html, body').animate ({
      'scrollTop':position
  },500);

  $('.menu').toggleClass('menu-hide');

});

$(document).click(function(event) {
  if (!$(event.target).closest('.menu').length) {
 
    $('.menu').removeClass('menu-hide'); 
  
  }
});


// ドロワー


$('.contact-button').on('click', function () {                //  グーグルフォームに飛ぶ
  document.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeBkPZUiY0Pa_snzAfaitGX8qpLnnNf-kT7vKTrdD7rKwHPKA/viewform?usp=sf_link";
 });







});