(function($) {
  "use strict";

	/*
	|--------------------------------------------------------------------------
	| Global Lorena Obj
	|--------------------------------------------------------------------------
	|
	|
	|
	*/
	var Lorena = window.Lorena || {},
	$win = $(window);

  /* ---------------------------------------------
  General Functions - counter, lightbox etc.
  --------------------------------------------- */
  Lorena.generalFns = function() {
    //check if element exists
    if($('.counter').length !== 0) {
      $('.counter').counterUp({
          delay: 100,
          time: 2000
      });
    }
    /* lightbox */
    if($('.open-lightbox').length) {
      $('.open-lightbox').on('click', function(e) { e.preventDefault(); });
      var $gallery = $('.open-lightbox').simpleLightbox();
    }

    if($('.blog-itm figure').length) {
      $('.blog-item figure').on('hover', function() {
  		 	$(this).find('figcaption').addClass('animate fadeInUp');
  		});
    }

    /* go to top */
    if($('.go-top a').length) {
      var $root = $('html, body');
  		$('.go-top a').click(function() {
  		    $root.animate({
  		        scrollTop: $( $.attr(this, 'href') ).offset().top
  		    }, 1000);
  		    return false;
  		});
    }

  };

  /* ---------------------------------------------
  Preloader
  --------------------------------------------- */
  Lorena.showPreloader = function() {
      $(".page-loader").delay(800).fadeOut("slow");
  };

  /* ---------------------------------------------
  Menu - effects, responsive.
  --------------------------------------------- */
	Lorena.menuEffect = function() {
		// megamenu
		$('a.nav-trigger').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('nav-is-open');
			if($('body').hasClass('nav-is-open')) {
				$('#top-menu').removeClass('menu-hidden').fadeIn('fast');
				$('.logo').removeClass('hide');
				// second type menu
				$('nav.navigation').removeClass('menu-hidden').fadeIn('fast');
			} else {
				if($(window).scrollTop() > $('#top-wrapper').height()) {
					$('.logo').addClass('hide');
				}
				$('#top-menu, nav.navigation').addClass('menu-hidden');
				$('.search').removeClass('is-visible');
			}
		});
	};

  Lorena.responsiveMenu = function() {
    $('#menu').slicknav({
      label: ''
    });

    var position, direction, previous;
    $(window).scroll(function() {
      if($(this).scrollTop() >= position) {
        direction = 'down';
        if(direction !== previous) {
          $('.slicknav_collapsed.slicknav_btn').addClass('hide');
        }
      } else {
        direction = 'up';
        $('.slicknav_collapsed.slicknav_btn').removeClass('hide');
        previous = direction;
      }

      position = $(this).scrollTop();
    });
  };
// This is a functions that scrolls to #{blah}link
    function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }

    $("#sidebar > ul > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll(this.id);
    });
  /* ---------------------------------------------
  Logo & Search
  --------------------------------------------- */
	Lorena.animateLogo = function() {
		var show_height = $('#top-wrapper').height();
		var position, direction, previous;

		$(window).scroll(function(){
			if( $(this).scrollTop() >= position && $(this).scrollTop() > show_height){
				direction = 'down';
				if(direction !== previous && !$('body').hasClass('nav-is-open')){
					$('.logo').addClass('hide');
					previous = direction;
				}
			} else if($(this).scrollTop() < show_height) {
				direction = 'up';
				if(direction !== previous){
					$('.logo').removeClass('hide');

					previous = direction;
				}
			}
			position = $(this).scrollTop();
		});
	};


	Lorena.searchAction = function() {
		$('.search-icon').on('click', function(e) {
			$('.search-icon a i').toggleClass('ion-search ion-close');

			e.preventDefault();
			if($('body').hasClass('nav-is-open')) {
				$('.search').toggleClass('is-visible');
				$('.search').find('input[type="search"]').focus();
			} else {
				$('.search').removeClass('is-visible');
			}
		});
	};

  /* ---------------------------------------------
  Slider
  --------------------------------------------- */
	Lorena.homePogoSlider = function() {
		$('.main-slider').pogoSlider({
      autoplay: true,
      autoplayTimeout: 5000,
      displayProgess: false,
      generateNav: false,
      generateButtons: false,
      responsive: true,
      targetHeight: 450,
      pauseOnHover: false,
      onSlideStart: function() {
        $('.anim-btn').addClass('wow fadeInUpSmall animated');
      },
      onSlideEnd: function() {
        $('.anim-btn').removeClass('wow fadeInUpSmall animated');
      }
    }).data('plugin_pogoSlider');

		$('.in-slide-content').delay(1200).fadeIn();
	};

  /* ---------------------------------------------
  Carousels - team, clients etc.
  --------------------------------------------- */
	Lorena.teamCarousel = function() {
    if($('.team-carousel').length) {
      $('.team-carousel').slick({
  		  infinite: true,
  		  slidesToShow: 3,
  		  slidesToScroll: 3,
  		  autoplay: true,
  		  autoplaySpeed: 7000,
  		  dots: true,
  		  arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  		});
    }
	};

	Lorena.clientsCarousel = function() {
    if($('.clients-carousel').length) {
      $('.clients-carousel').slick({
  			infinite: true,
  			slidesToShow: 6,
  			slidesToScroll: 1,
  			autoplay: true,
  			autoplaySpeed: 5000,
  			dots: false,
  			arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  		});
    }
	};

	Lorena.testimonialCarousel = function() {
    if($('.slick-testimonial').length) {
      $('.slick-testimonial').slick({
  			infinite: true,
  			slidesToShow: 5,
  			slidesToScroll: 1,
  			autoplay: true,
  			autoplaySpeed: 5000,
    			cssEase: 'linear',
  			dots: true,
  			arrows: false,
  			asNavFor: '.s-container',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  		});
    }

		if($('.s-container').length) {
      $('.s-container').slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows: false,
  			fade: true,
  			asNavFor: '.slick-testimonial'
  		});
    }

    if($('.slick-slide').length) {
      $('.slick-testimonial .slick-slide').on('click', function() {
        $('.slick-testimonial').slick('slickNext');
      });
    }
	};

  /* ---------------------------------------------
  Portfolio - two cols, three cols, four cols
  --------------------------------------------- */
  Lorena.portfolioCols = function(item, container, settings) {
  	var $isotope = $(item);
    var $portfolio = $(container);

    if($portfolio.length) {
      var iso = new Isotope(item, settings);

    	imagesLoaded($portfolio, function() {
    		iso.layout();
    	});

    	if(!$('.blog-container').length) {
        var filterFns = {
      	   ium: function( itemElem ) {
      		 var name = getText( itemElem.querySelector('.name') );
      		 return name.match( /ium$/ );
      	   }
      	};

      	var filtersElem = document.querySelector('#filters');
      	eventie.bind( filtersElem, 'click', function( event ) {
      	  $('.button-group button').not(this).removeClass('is-active');
      	  $(event.target).addClass('is-active');
      		if ( !matchesSelector( event.target, 'button' ) ) {
      		  return;
      		}
      	   var filterValue = event.target.getAttribute('data-filter');
      	   filterValue = filterFns[ filterValue ] || filterValue;
      	   iso.arrange({ filter: filterValue });
      	});
      }
    }

  	$('#portfolio-loader').on('click', function(e) {
      e.preventDefault();
      var handler = $(this);
      var path = './data/get-posts.php';
      $(this).addClass('load-more--loading');

      if($('.blog-container').length) { path = './data/get-posts-blog.php'}
      if($('.four-cols-container').length) { var itemCount = 4 } else { itemCount = 3 }

      setTimeout(function(e){
        $('.load-more--loading').removeClass('load-more--loading');
        $.get(
          path,
          {
            action: 'get-portfolio',
            offset: $portfolio.find('.portfolio-item').length,
            items: handler.data('items'),
            itemClass: itemCount,
          },
          function(data) {
            var items = $(data);

            $portfolio.append(items);

            if($('.three-cols-container').length || $('.blog-container').length) {
              $('.portfolio2').addClass('item').removeClass('portfolio2');
            } else if($('.four-cols-container').length) {
              $('.portfolio2').addClass('portfolio4').removeClass('portfolio2');
            }

            imagesLoaded($portfolio, function() {
              iso.appended(items);
              $(window).trigger('resize');
            });

            if(items.length < handler.data('items')) {
              toastr.options.progressBar = true;
              toastr.info('There are more posts :)');
              $('html, body').animate({
                  scrollTop: $("#load-more-container").offset().top - 100
              }, 1100);
            }
          }
        );
      }, 3000);
    });
  };

  Lorena.portfolioColsWork = function() {
    var item = '.isotope-container',
        container = '.ncol-container', settings = {};
    if($('.two-cols-container').length) {
      settings = {
        itemSelector: '.portfolio2',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: $(container).width() / 2
        }
      };

    } else if($('.three-cols-container').length) {
      settings = {
        itemSelector: '.item',
        layoutMode: 'masonry'
      };

    } else if($('.four-cols-container').length) {
      settings = {
        itemSelector: '.portfolio4',
        layoutMode: 'masonry'
      };
    } else if($('.blog-container').length){
      settings = {
        itemSelector: '.item-blog',
        layoutMode: 'masonry'
      };
    }

    Lorena.portfolioCols(item, container, settings);
  };

  /* ---------------------------------------------
  Parallax Effect
  --------------------------------------------- */
  Lorena.rellaxParallax = function() {
      var rellax = new Rellax('.rellax');
  };

  /* ---------------------------------------------
  Animations
  --------------------------------------------- */
	Lorena.wowAnimations = function() {
		new WOW({
      mobile: !1,
      live: !0
    }).init();
	};

  /* ---------------------------------------------
  Grayscale Effect
  --------------------------------------------- */
  Lorena.grayscaleEffect = function() {
    $('img.grayscale').each(function() {
  		$(this).wrap('<div style="display:inline-block;width:' + this.width + 'px;height:' + this.height + 'px;">').clone().addClass('gotcolors').css({'position': 'absolute', 'opacity' : 0 }).insertBefore(this);
  		this.src = grayscale(this.src);
  	}).animate({opacity: 1}, 500);

    $("#blog .blog-item, .item-blog .blog-item").hover(
      function() {
  			$(this).find('.gotcolors').stop().animate({opacity: 0}, 1500);
  		},
  		function() {
  			$(this).find('.gotcolors').removeClass('grayscale').stop().animate({opacity: 1}, 1500);
  		}
  	);
  };

  /* ---------------------------------------------
  Contact
  --------------------------------------------- */
  Lorena.contact = function() {
    if($('.contact-form').length) {
      google.maps.event.addDomListener(window, 'load', initMap);
      initMap();

      // contact form
      $('.contact-form button').on('click', function(e) {
        e.preventDefault();
        if($('#name').val() == '' || $('#email').val() == '' || $('#message').val() == '') {
          toastr.info('Please fill the required information.');
        } else {
          submitForm();
        }
      });
    }
  }

  /* ---------------------------------------------
  Portfolio - Lazy Load
  --------------------------------------------- */
  Lorena.portfolioLazyLoad = function() {
    var path = document.location.pathname;
    var dir = path.substring(0, path.lastIndexOf("/"));
    if($('.lazy-img').length) {
      $('.lazy-img').Lazy({
          effect: 'fadeIn'
      });
    }
  }
	/*
	|--------------------------------------------------------------------------
	| Functions Initializers
	|--------------------------------------------------------------------------
	|
	|
	|
	*/
	$win.load(function() {
    Lorena.showPreloader();
		Lorena.wowAnimations();
		Lorena.rellaxParallax();
    Lorena.portfolioColsWork();
    Lorena.portfolioLazyLoad();
    Lorena.grayscaleEffect();
    Lorena.contact();
	});

	$(document).ready(function() {
    Lorena.generalFns();
		Lorena.menuEffect();
    Lorena.responsiveMenu();
		Lorena.searchAction();
		Lorena.animateLogo();
		Lorena.homePogoSlider();
		Lorena.teamCarousel();
		Lorena.clientsCarousel();
		Lorena.testimonialCarousel();
	});

  /* ---------------------------------------------
  Helper Functions
  --------------------------------------------- */
	function isMobile(){
    	return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)));
	}

  // http://net.tutsplus.com/tutorials/javascript-ajax/how-to-transition-an-image-from-bw-to-color-with-canvas/
  function grayscale(src) {
  	var supportsCanvas = !!document.createElement('canvas').getContext;
  	if (supportsCanvas) {
  		var canvas = document.createElement('canvas'),
  		context = canvas.getContext('2d'),
  		imageData, px, length, i = 0, gray,
  		img = new Image();

  		img.src = src;
  		canvas.width = img.width;
  		canvas.height = img.height;
  		context.drawImage(img, 0, 0);

  		imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  		px = imageData.data;
  		length = px.length;

  		for (; i < length; i += 4) {
  			gray = px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11;
  			px[i] = px[i + 1] = px[i + 2] = gray;
  		}

  		context.putImageData(imageData, 0, 0);
  		return canvas.toDataURL();
  	} else {
  		return src;
  	}
  }

  // initialize map
  function initMap() {
      var mapOptions = {
          zoom: 12,
          disableDefaultUI: true,
          scrollwheel: false,
          center: new google.maps.LatLng(40.6700, -73.9400),
          styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
      };

      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);

      var path = document.location.pathname;
      var dir = path.substring(0, path.lastIndexOf("/"));

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          animation: google.maps.Animation.DROP,
          icon: dir + '/img/marker.png',
          title: 'We are here'
      });
  }

  // contact form
  function submitForm() {
    var name = $('.contact-form input#name').val(),
        email = $('.contact-form input#email').val(),
        company = $('.contact-form input#company').val(),
        message = $('.contact-form #message').val();

    $.ajax({
      type: 'POST',
      url: './data/contact.php',
      data: "name="+name+"&email="+email+"&company="+company+"&message="+message,
      success: function(data) {
        toastr.success('To receive mail, you\'ll need to fix your credentials.')
        if(data == "success") {
          toastr.success('Message sent successfully.')
        }
      },
      error: function(jqXhr) {
        toastr.error('Something went wrong!');
      }
    });
  }

  /* background color change */
  document.addEventListener('DOMContentLoaded', function () {
    BackgroundCheck.init({
      targets: '.menu-wrapper'
    });
  });

})(jQuery);
