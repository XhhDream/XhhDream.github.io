$(function(){  
  $('a[href*=#]').click(function() {
    var $target = $(this.hash);
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body').animate({scrollTop: targetOffset},1000);
      return false;
    }
  });
})