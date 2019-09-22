$(document).ready(function(){
    /** Sticky navigation */
    $('.js--section-features').waypoint(function(direction){
       if(direction == "down"){
            $('nav').addClass('sticky');
        } 
       else{
            $('nav').removeClass('sticky');
       }
      }, {
       offset: '60px'
    });

    /** Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });


    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /** Animate scroll */
    $('.js--waypoint-1').waypoint(function(direction){
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-2').waypoint(function(direction){
        $('.js--waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-3').waypoint(function(direction){
        $('.js--waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-4').waypoint(function(direction){
        $('.js--waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
});