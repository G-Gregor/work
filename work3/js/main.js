$(window).on('load', function() { 
	// Preloader
	var $preloader = $('#page-preloader'),
	    $spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$( function () {
	// Паралакс фона
	if ($(window).width() > 960)
    { 
		// Кешируем объект окна
		$window = $(window);
		                
		    $('[data-type="background"]').each(function(){
		    var $bgobj = $(this); // Назначаем объект
		                    
		       $(window).scroll(function() {
		                    
		 		// Прокручиваем фон со скоростью var.
		 		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
		 		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
		 		// Размещаем все вместе в конечной точке
		 		var coords = '50% '+ yPos + 'px';

		 		// Смещаем фон
		 		$bgobj.css({ backgroundPosition: coords });
				
		 	}); 

		});	
    }

    // Анимация
    $(window).scroll(function() {
	    $('.button_detailed').each(function() {
	            var imagePos = $(this).offset().top;

	            var topOfWindow = $(window).scrollTop();
		            if (imagePos < topOfWindow+600) {
		             	$(this).addClass("animate__bounceIn");
		            }
	    });
	});

	 // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 207){  
            $('.navigation').addClass("sticky");
        }
        else{
            $('.navigation').removeClass("sticky");
        }
    });

    // Slider

    $('.slider').slick({
    	dots: true,
    	dotsClass: 'slider-square',
        infinite: false,
        autoplay: false,
        prevArrow: '<button type="button" class="arow slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="arow slick-next"><i class="fa fa-angle-right"></i></button>',
	  });

    // Map
	  
	if($('#map').length) {
		ymaps.ready(init);
			function init(){
			var myMap = new ymaps.Map("map", {
				center: [46.47438693, 30.74602499],
				zoom: 17
		});

		myPlacemark = new ymaps.Placemark([46.474128, 30.746008], {
			hintContent: 'Одесса, улица Базарная 36',
			balloonContent: 'улица Базарная 36',
		},
		{ 	
			iconColor: 'red',
        });
		
		myMap.geoObjects.add(myPlacemark);
	}
	}

	// плавное перемещение страницы к нужному блоку

	$('a.go').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset() .top - 105;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	 // Бургер меню

	 $('.nav-button').click(function () {
	 	$('.menu-collapse') .toggleClass('d-none'); 
	 	$('.menu') .toggleClass('menu-open');
	 	$('body') .toggleClass('lock');
	 	$('.navigation') .toggleClass('menu_mob');
	});

	 $('.menu__link').click(function () {
	 	$('.menu-collapse') .toggleClass('d-none'); 
	 	$('.menu') .toggleClass('menu-open');
	});

	  // Modal

    $('.button_form').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal({
    		closeOnEsc: false,
    		closeOnOverlayClick: false,
    		overlay: {
	        	css: {
	            	backgroundColor: '#131731',
	            	backgroundPosition: '50% 0'
	        	}
    		}
		});
    });
});


