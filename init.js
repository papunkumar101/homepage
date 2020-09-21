(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
      });
    autoplay();
    function autoplay(){
     $('.carousel').carousel('next');
     setTimeout(autoplay,3000);
    }
      
 $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
 
        
        
   
   
   