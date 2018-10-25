$(document).ready(function() {

// CAROUSEL INTERVAL
  $('#myCarousel').carousel({
    interval:5000,
  });
  $('#bridesCarousel').carousel({
    interval:false,
  });
  $('#groomsCarousel').carousel({
    interval:false,
  });
	
// CAROUSEL SWIPES
	$("#myCarousel").swiperight(function() {  
    $(this).carousel('prev');  
	  });  
	$("#myCarousel").swipeleft(function() {  
		$(this).carousel('next');  
	}); 

	$("#bridesCarousel").swiperight(function() {  
    $(this).carousel('prev');  
	  });  
	$("#bridesCarousel").swipeleft(function() {  
		$(this).carousel('next');  
	});  

	$("#groomsCarousel").swiperight(function() {  
    $(this).carousel('prev');  
	  });  
	$("#groomsCarousel").swipeleft(function() {  
		$(this).carousel('next');  
	}); 

	$('#nav-icon3, .nav-section0, .nav-section1, .nav-section2, .nav-section3, .nav-section4').click(function(){
		$('#nav-icon3').toggleClass('open');
	});


	// ------------------------------
	// http://twitter.com/mattsince87
	// ------------------------------

	function scrollNav() {
	  $('.nav a').click(function(){
	    //Toggle Class
	    $(".active-link").removeClass("active-link");
	    $(this).closest('li').addClass("active-link");
	    var theClass = $(this).attr("class");
	    $('.'+theClass).parent('li').addClass('active-link');
	    //Animate
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 50
	    }, 1500);
	    return false;

	  });
	  $('.scrollTop a').scrollTop();
	}
	scrollNav();

	$("#bs-example-navbar-collapse-1 li a").click(function(event) {
	  // check if window is small enough so dropdown is created
		$("#bs-example-navbar-collapse-1").removeClass("in").addClass("collapse");
	});

  $(document).ready(function() {
    $(".fancybox").fancybox();
  });

});
