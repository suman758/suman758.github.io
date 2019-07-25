// Range Slider
(function () {
    'use strict';
    var init = function () {                
        var slider2 = new rSlider({
            target: '#time_range',
            values: [1+'km',2+'km',3+'km',4+'km',5+'km',6+'km'],
            step: 1,
            range: false,
            set: [1+'km',6+'km'],
            tooltip: true,
            scale: true,
            labels: true,
            width: null,
            onChange: function (vals) {
                console.log(vals);
                $('#distance').val(vals);
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



    // $('.slider').on('click', function(event){
    //     var $this = $(this);
    //     $(".btn-primary").addClass("highlight");
    // });


    
    // $(".img-check").click(function(){
    //     $(this).toggleClass("check");
    // });
    

    //Starts Owl Carousel
// $('.owl-theme').owlCarousel({
//     items: 7,
//     loop: true,
//     nav: true,
//     autoplay: true,
//     margin:0,
//     navText: ["‹","›"],
//     pagination:true,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:4
//         },
//         480 : {
//             items:4
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:7
//         }
//     }
// });
});

