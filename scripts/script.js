document.addEventListener("DOMContentLoaded", function(event) {

  //smooth scroll for each anchor
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


// Mobile nav

  // Initialize collapse button
  $("#hamburger").sideNav();


// Toggle work 

  $('#doggie-thumb').on('click', function(){
    //text
    $('#doggie-details').removeClass('hidden').addClass('show');
    $('#dance-details').removeClass('show').addClass('hidden');
    $('#vagabond-details').removeClass('show').addClass('hidden');
    $('#love-details').removeClass('show').addClass('hidden');
    //monitor photo
    $('#doggie-monitor-img').removeClass('hidden').addClass('show');
    $('#dance-monitor-img').removeClass('show').addClass('hidden');
    $('#vagabond-monitor-img').removeClass('show').addClass('hidden');
    $('#love-monitor-img').removeClass('show').addClass('hidden');
    // active
    $('#doggie-thumb').css("border", "4px solid teal");
    $('#dance-thumb').css("border", "none");
    $('#vagabond-thumb').css("border", "none");
    $('#love-thumb').css("border", "none");
  });

   $('#dance-thumb').on('click', function(){
    //text
    $('#dance-details').removeClass('hidden').addClass('show');
    $('#doggie-details').removeClass('show').addClass('hidden');
    $('#vagabond-details').removeClass('show').addClass('hidden');
    $('#love-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#dance-monitor-img').removeClass('hidden').addClass('show');
    $('#doggie-monitor-img').removeClass('show').addClass('hidden');
    $('#vagabond-monitor-img').removeClass('show').addClass('hidden');
    $('#love-monitor-img').removeClass('show').addClass('hidden');
     // active
    $('#dance-thumb').css("border", "4px solid teal");
    $('#doggie-thumb').css("border", "none");
    $('#vagabond-thumb').css("border", "none");
    $('#love-thumb').css("border", "none");
  });

   $('#vagabond-thumb').on('click', function(){
    //text
    $('#vagabond-details').removeClass('hidden').addClass('show');
    $('#dance-details').removeClass('show').addClass('hidden');
    $('#doggie-details').removeClass('show').addClass('hidden');
    $('#love-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#vagabond-monitor-img').removeClass('hidden').addClass('show');
    $('#doggie-monitor-img').removeClass('show').addClass('hidden');
    $('#dance-monitor-img').removeClass('show').addClass('hidden');
    $('#love-monitor-img').removeClass('show').addClass('hidden');
     // active
    $('#vagabond-thumb').css("border", "4px solid teal");
    $('#dance-thumb').css("border", "none");
    $('#doggie-thumb').css("border", "none");
    $('#love-thumb').css("border", "none");
  });

   $('#love-thumb').on('click', function(){
    //text
    $('#love-details').removeClass('hidden').addClass('show');
    $('#dance-details').removeClass('show').addClass('hidden');
    $('#vagabond-details').removeClass('show').addClass('hidden');
    $('#doggie-details').removeClass('show').addClass('hidden');
     //monitor photo
    $('#love-monitor-img').removeClass('hidden').addClass('show');
    $('#doggie-monitor-img').removeClass('show').addClass('hidden');
    $('#dance-monitor-img').removeClass('show').addClass('hidden');
    $('#vagabond-monitor-img').removeClass('show').addClass('hidden');
     // active
    $('#love-thumb').css("border", "4px solid teal");
    $('#dance-thumb').css("border", "none");
    $('#vagabond-thumb').css("border", "none");
    $('#doggie-thumb').css("border", "none");
  });

});