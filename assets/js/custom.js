$(document).ready(function (){

  // Menu show Hide
  var counter = 0;
  $('.el_menu_btn').click(function(){
    if( counter == '0') {
      $('.el_navigation_wrapper').addClass('el_main_menu_hide');
      $(this).children().removeAttr('class');
      $(this).children().attr('class','fa fa-close');
      counter++;
    }
    else {
      $('.el_navigation_wrapper').removeClass('el_main_menu_hide');
      $(this).children().removeAttr('class');
      $(this).children().attr('class','fa fa-bars');
      counter--;
    }   
  });


// testimonial slider
  $('.el_testimonial_wrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


  // for dropdown menu

    $(".sub-menu").slideUp();
    $("#menu").click(function(){
        $('.sub-menu').slideToggle('500');
    });

// blog slider
  $('.el_blog_wrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


  // for counter 
    $('.timer').appear(function() {
      $(this).countTo();
    });


    // colro switcher
    var colorSheets = [
            {
                color: "#18ba60",
                title: "Switch to Default",
                href: "assets/css/style.css"
            },
            {
                color: "#f4426e",
                title: "Switch to pink",
                href: "assets/css/color/pink_color.css"
            },
            {
                color: "#b8849d",
                title: "Switch to light-red",
                href: "assets/css/color/light_red_color.css"
            },
            {
                color: "#ea4b36",
                title: "Switch to orange",
                href: "assets/css/color/orange_color.css"
            },
            {
                color: "#1990ce",
                title: "Switch to blue",
                href: "assets/css/color/blue_color.css"
            },
            {
                color: "#f69d01",
                title: "Switch to yellow",
                href: "assets/css/color/yellow_color.css"
            }
            
        ];

        ColorSwitcher.init(colorSheets);


          // for masonary
          if($('#grid').length > 0){
            new AnimOnScroll(document.getElementById( 'grid' ), {
                minDuration : 0.4,
                maxDuration : 0.7,
                viewportFactor : 0.2
            });
        }


// ajax
  $("#submit").click(function(){
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
      var letters = /^[A-Za-z]+$/;
      var number = /^[0-9]+$/;
      var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     
      if (name != "" && phone != "" && email != ""  && subject != ""  && message != "") {
          if(name.match(letters)) { 
              if(phone.match(number) && phone.length <= 10) {
                  if(email.match(mail_letters)){
                      $.ajax({
                      method : 'post',
                      url : 'ajax.php',
                      data :  {'name' : name ,
                                'phone' : phone,
                                'email' : email,
                                'subject' : subject,
                                'message' : message,
                                },
                     }).done(function(resp){
                         if( resp == 1){
                              document.getElementById("error").style.color = "green";
                             document.getElementById("error").innerHTML = "Mail Send Successfully";
                              $('#name').val('');
                             $('#phone').val('');
                             $('#email').val('');
                             $('#subject').val('');
                             $('#message').val('');
                         }else{
                              document.getElementById("error").style.color = "red";
                              document.getElementById("error").innerHTML = "Mail not Send";
                         }
                     console.log(resp); });
                
                  }else{
                      document.getElementById("error").style.color = "red";
                      document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
                  }
              }else{
                  document.getElementById("error").style.color = "red";
                  document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
              }
          }else
          {   document.getElementById("error").style.color = "red";
              document.getElementById("error").innerHTML = "Please Fill The Correct Name";
          }   
      }else{
          document.getElementById("error").style.color = "red";
          document.getElementById("error").innerHTML = "Please Fill All Detail";
      }
  });

});


document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 70,

    loop: true,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });

});

function prettyLog(str) {
  ('%c ' + str, 'color: green; font-weight: bold;');
}

