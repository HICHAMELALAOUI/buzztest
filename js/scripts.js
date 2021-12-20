(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});





   


   //slider1
  jQuery(document).ready(function() {
	 $(".slider1").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"border-radius" : 52, 
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 3
	 		},
	 		767 : {
	 			"items" : 3
	 		},
	 		991 : {
	 		 	"items" : 3
	 		}


	 	}
	 });



	var owl = $('.slider1');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn1').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn1').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	});







   //slider2
  jQuery(document).ready(function() {
	 $(".slider2").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"border-radius" : 52, 
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 3
	 		},
	 		767 : {
	 			"items" : 3
	 		},
	 		991 : {
	 		 	"items" : 3
	 		}


	 	}
	 });



	var owl = $('.slider2');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn2').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn2').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	});





  //slider3
  jQuery(document).ready(function() {
	 $(".slider3").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"border-radius" : 52, 
	 	"autoplay": true,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 3
	 		},
	 		576 : {
	 			"items" : 3
	 		},
	 		767 : {
	 			"items" : 4
	 		},
	 		991 : {
	 		 	"items" : 4
	 		}


	 	}
	 });



	var owl = $('.slider3');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn3').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn3').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	});


   


     //slider4
  jQuery(document).ready(function() {
	$(".slider4").owlCarousel({
		"items" : 5,
		"margin" : 15,
		"border-radius" : 52, 
		"autoplay": true,	 	
		"autoplayTimeout" : 2000,
		"loop" : true,
		"nav" : false,
		"dop" : true,
		"responsive" : {
			0 : {
				"items" : 1
			},
			576 : {
				"items" : 1
			},
			767 : {
				"items" : 1
			},
			991 : {
				 "items" : 1
			}


		}
	});

   });

  //slider5
 jQuery(document).ready(function() {
	$(".slider5").owlCarousel({
		"items" : 5,
		"margin" : 15,
		"border-radius" : 52, 
		"autoplay": true,	 	
		"autoplayTimeout" : 2000,
		"loop" : true,
		"nav" : false,
		"dop" : true,
		"responsive" : {
			0 : {
				"items" : 1
			},
			576 : {
				"items" : 1
			},
			767 : {
				"items" : 1
			},
			991 : {
				 "items" : 1
			}


		}
	});

   });




   //slider5
 jQuery(document).ready(function() {
	$(".slider6").owlCarousel({
		"items" : 5,
		"margin" : 15,
		"border-radius" : 52, 
		"autoplay": false,	 	
		"autoplayTimeout" : 2000,
		"loop" : true,
		"nav" : false,
		"dop" : true,
		"responsive" : {
			0 : {
				"items" : 1
			},
			576 : {
				"items" : 1
			},
			767 : {
				"items" : 1
			},
			991 : {
				 "items" : 1
			}


		}
	});

   });












   //slider15
  jQuery(document).ready(function() {
	 $(".slider18").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"border-radius" : 52, 
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 1
	 		},
	 		991 : {
	 		 	"items" : 1
	 		}


	 	}
	 });



	var owl = $('.slider18');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn18').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn18').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	});







   jQuery(".menu1").click(function(){
     jQuery(".main1-area").show();
   });
	
  jQuery(".menu2").click(function(){
     jQuery(".main1-area").hide();
   });
		



   jQuery(".menu3").click(function(){
     jQuery(".mainmobile-area").show();
   });
	
  jQuery(".menu4").click(function(){
     jQuery(".mainmobile-area").hide();
   });








  //slider19
  jQuery(document).ready(function() {
	 $(".slider19").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"border-radius" : 52, 
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 1
	 		},
	 		991 : {
	 		 	"items" : 1
	 		}


	 	}
	 });

	});

				
		
		
		
		
		
		
		
		
	});
})(jQuery);