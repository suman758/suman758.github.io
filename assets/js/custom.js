// Range Slider
(function () {
  'use strict';
  var init = function () {
    var slider2 = new rSlider({
      target: '#time_range',
      values: ['1km', '2km', '3km', '4km', '5km', '6km', '7km', '8km', '9km', '10km', '11km', '12km', '13km', '14km', '15km', '16km', '17km', '18km', '19km', '20km'],
      step: 1,
      range: false,
      set: ['20km'],
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
  $('#time_range').css('display','block');
})();





//Starts Menu

$(document).ready(function () {
  $('#time_range').css('display','none');
    $(".header .col-md-9 .fa.fa-bars").click(function(){
        $(".right-panel .rgt-side").slideToggle();
    });

  
    // $(".fa.fa-bars").click(function () {
    //   $(".right-sidebar-panel .link-line").slideToggle();
    // });

  //   $("button").click(function(){
  //     $("p").slideToggle();
  //   });

  $('#exampleFormControlSelect1').multiselect({
    numberDisplayed: 1
  });

  $('.link').on('click', function (event) {
    var $this = $(this);
    if ($this.hasClass('clicked')) {
      $this.removeAttr('style').removeClass('clicked');
    } else {
      $this.css('background', '#00b7d6').addClass('clicked');
    }
  });

  $('#basic').multiselect({
    templates: {
        li: '<li><a href="javascript:void(0);"><label class="pl-2"></label></a></li>'
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
