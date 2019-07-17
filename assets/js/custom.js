// Range Slider
(function () {
    'use strict';
    var init = function () {                
        var slider2 = new rSlider({
            target: '#time_range',
            values: [5+'km',6+'km',7+'km',8+'km',9+'km',10+'km'],
            step: 1,
            range: false,
            set: [5+'km',10+'km'],
            tooltip: true,
            scale: true,
            labels: true,
            width: null,
            onChange: function (vals) {
                console.log(vals);
            }
        });
    };
    window.onload = init;
})();





//Starts Menu

$(document).ready(function(){
    $(".header .col-md-9 .fa.fa-bars").click(function(){
        $(".right-panel .rgt-side").slideToggle();
    });

    $('#exampleFormControlSelect1').multiselect({
        numberDisplayed: 1
    }); 

    $('.link').on('click', function(event){
        var $this = $(this);
        if($this.hasClass('clicked')){
            $this.removeAttr('style').removeClass('clicked');
        } else{
            $this.css('background','#00b7d6').addClass('clicked');
        }
    });

    //Starts Owl Carousel
$('.category-carousel').owlCarousel({
    items: 7,
    loop: true,
    nav: true,
    autoplay: true,
    margin:0,
    navText: ["‹","›"],
    pagination:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:4
        },
        480 : {
            items:4
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
});
});

