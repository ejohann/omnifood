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

    /** Mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
});