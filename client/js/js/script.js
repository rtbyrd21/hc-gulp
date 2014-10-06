
$(document).ready(function() {
  $('.branding img').attr('src', '/images/misc/hc%20logo_full.svg');
  $('.heroservices').css('background-position', 'left ' + (-190) + 'px');
    var $window = $(window);
    var $pane = $('#pane1');
    var windowsize = $window.width();
    function checkWidth() {
        if (windowsize > 750) {
         
$(window).scroll(function () {
//    if ($(document).scrollTop() < 290) {
//        $('.branding img').attr('src', '/images/misc/hc%20logo_full.svg');
//        $('.branding').css({marginBottom: "-60px"});
//       // $('.branding').css({border: "1px solid black"});
//        $('.branding img').css({maxWidth: "230px"});
//        $('.branding img').css({marginLeft: "0%"});
//        $('.branding img').css({boxShadow: "0px 0px 5px #333"});
//        $('.branding img').css({paddingBottom: "4%"});
//        $('.branding img').css({background: "rgba(255,255,255,1)"});
//        $('.navigation').css({background: "rgba(255,255,255,.6)"});
//        $('.navigation').css({boxShadow: "none"});
//        $('.branding').css({top: "0px"});
//    } else {
//        $('.branding img').attr('src', '/images/misc/hc_logo_textonly.svg');
//        $('.branding').css({marginBottom: "0px"});
//        $('.branding').css({top: "0px"});
//        $('.branding').css({border: "0px"});
//        $('.branding img').css({maxWidth: "320px"});
//        $('.branding img').css({marginLeft: "-5%"});
//        $('.branding img').css({boxShadow: "none"});
//        $('.branding img').css({paddingBottom: "0%"});
//        $('.branding img').css({background: "rgba(255,255,255,0)"});
//        $('.navigation').css({background: "rgba(255,255,255,1)"});
//        $('.navigation').css({boxShadow: "0px 0px 5px #333"});
//    }
    
   var scrolledY = $(window).scrollTop();
//  $('.hero').css('background-position', 'left ' + ((scrolledY)) + 'px');
//  $('.heroservices').css('background-position', 'left ' + ((scrolledY)-190) + 'px');
//  $('.heroevents').css('background-position', 'left ' + ((scrolledY)) + 'px');
//  $('.nav a').css('top', 40 + ((scrolledY)*.06) + '%');
//  $('.leaderimage').css('background-position', 'left ' + (-(scrolledY)*.15) + 'px');
}); //window scroll
        }



if (windowsize < 750) {
$('.branding img').css({display: "none"});
$(".artist .toHide").hide();
//$(".artist a").hide();
$(".artist").click(function(){
    console.log('yes');
    $(".toHide",this).slideToggle(500);
//    $("a",this).slideToggle(500);
    $("i",this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
    

  });
}



  
} 

  
  
checkWidth();
// Bind event listener
$(window).resize(checkWidth);  

var myLatlng = new google.maps.LatLng(39.281203, -84.455547);
      function initialize() {
        
        var mapOptions = {
          center: new google.maps.LatLng(39.281203, -84.455547),
          zoom: 15,
          draggable: true
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
      
      }
 google.maps.event.addDomListener(window, 'load', initialize);  
  
  
$(".homeClick").click(function(){
//    console.log('yesclick');   
    google.maps.event.addDomListener(window, 'load', initialize);
  });  

  
  
});//document on ready




      