jQuery(
	function($) {	
		win_w = $(window).width();
	    if ((win_w>1380)&&($(document).scrollTop() > 0 )){
	    	$('#scrollup').fadeIn('fast');
		}
		else{
			$('#scrollup').fadeOut('fast');
		}
		window.onresize= function(){
		    var win_w =  $(window).width();
		    if ((win_w>1380)&&($(document).scrollTop() > 0 )){
		    	$('#scrollup').fadeIn('fast');
			}
			else{
				$('#scrollup').fadeOut('fast');
			}
		};	
		$(window).scroll(function(){
		    var win_w =  $(window).width();
		    if ((win_w>1380)&&($(document).scrollTop() > 0 )){
		    	$('#scrollup').fadeIn('fast');
			}
			else{
				$('#scrollup').fadeOut('fast');
			}	
		});			
		$('#scrollup').click( function(){
			$("html, body").animate({scrollTop: 0}, "slow")
			return false;
		});	
		if($('.main-short-tabs').length){
			$('.main-short-tabs').tabs();
		}		
		if($('.main-tabs').length){
			$('.main-tabs').tabs({
				/*active: 4*/
			});
		}		
		if($('.show-tabs').length){
			$('.show-tabs').tabs({
				activate: function( event, ui ) {
					main_news_carousel_2.jcarousel('reload', { });;
				}
			});
		}	
		if($('.fancy-btn').length){
			$('.fancy-btn').fancybox({
				padding:0,
		 		helpers: {
				    overlay: {
				      locked: false 
				    }
				}  
			});
		}
		$('input, select').styler();		
		if($('#subscribe-form').length){
			$("#subscribe-form form").validate({
				rules : {
					form_email_2 : {required : true, email: true}				
					},
				messages : {
					form_email_2 : {
						required : "Обязательно",
						email : "Некорректный email"
					}						
					}
			});		
		}	
		if($('#vote-form').length){
			$("#vote-form form").validate({
				rules : {
					vote : {required : true}				
					},
				messages : {
					vote : {
						required : "Выберите один из вариантов"
					}						
					}
			});		
		}	
/*--------------------------news,articles-----------------------------------*/		
		if($('#comment-form').length){
			$("#comment-form form").validate({
				rules : {
					form_textarea_4 : {required : true},	
					form_text_5 : {required : true}	,
					form_text_6 : {required : true}				
				},
				messages : {
					form_textarea_4 : {
						required : "Обязательно"
					},
					form_text_5 : {
						required : "Обязательно"
					},
					form_text_6 : {
						required : "Обязательно"
					},						
				}
			});		
		}	
/*----------------------news,articles-end-------------------------------*/

/*--------------------------articles-----------------------------------*/			
		if($('.main-news-carousel-stage').length){
			var main_news_carousel = $('#rows .main-news-carousel-stage').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
	            interval: 5000,
	            target: '+=1',
	            autostart: true
	        });
		    main_news_carousel.swipe({
		        swipeLeft: function() {
		            main_carousel.jcarousel('next');
		        },
		        swipeRight: function() {
		            main_carousel.jcarousel('prev');
		        }
		    });    
			$('#rows .main-news-pagination')
				.on('jcarouselpagination:active', 'a', function() {
					$(this).addClass('active');
				})
				.on('jcarouselpagination:inactive', 'a', function() {
					$(this).removeClass('active');
				})
				.jcarouselPagination({
					perPage: 1,
	                item: function(page) {
	                    return '<a href="#' + page + '"></a>';
	                }
				});
			var main_news_carousel_2 = $('#blocks .main-news-carousel-stage').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
	            interval: 5000,
	            target: '+=1',
	            autostart: true
	        });
		    main_news_carousel_2.swipe({
		        swipeLeft: function() {
		            main_carousel.jcarousel('next');
		        },
		        swipeRight: function() {
		            main_carousel.jcarousel('prev');
		        }
		    });    
			$('#blocks .main-news-pagination')
				.on('jcarouselpagination:active', 'a', function() {
					$(this).addClass('active');
				})
				.on('jcarouselpagination:inactive', 'a', function() {
					$(this).removeClass('active');
				})
				.jcarouselPagination({
					perPage: 1,
	                item: function(page) {
	                    return '<a href="#' + page + '"></a>';
	                }
				});

		}	
/*--------------------------articles-end----------------------------------*/	

/*-----------------------------invest------------------------------------*/	
		if($('.filter').length){
			$('#time-slider .ui-slide').slider({
				range: true,
		    	min: parseInt($('#time-slider .min-amount').text()),
		    	max: parseInt($('#time-slider .max-amount').text()),
		    	values: [ parseInt($('#time-slider .min-amount').text()), parseInt($('#time-slider .max-amount').text())],
		    	slide: function( event, ui ) {
		    		$('#time-slider .min-amount').text(ui.values[ 0 ]);
		    		$('#time-slider .max-amount').text(ui.values[ 1 ]);
		     	}
			});
			$('#procent-slider .ui-slide').slider({
				range: true,
		    	min: parseInt($('#procent-slider .min-amount').text()),
		    	max: parseInt($('#procent-slider .max-amount').text()),
		    	values: [ parseInt($('#procent-slider .min-amount').text()), parseInt($('#procent-slider .max-amount').text())],
		    	slide: function( event, ui ) {
		    		$('#procent-slider .min-amount').text(ui.values[ 0 ]);
		    		$('#procent-slider .max-amount').text(ui.values[ 1 ]);
		     	}
			});
			$('#search-slider .ui-slide').slider({
				range: true,
		    	min: parseInt($('#search-slider .min-amount').text()),
		    	max: parseInt($('#search-slider .max-amount').text()),
		    	values: [ parseInt($('#search-slider .min-amount').text()), parseInt($('#search-slider .max-amount').text())],
		    	slide: function( event, ui ) {
		    		$('#search-slider .min-amount').text(ui.values[ 0 ]);
		    		$('#search-slider .max-amount').text(ui.values[ 1 ]);
		     	}
			});
			$('.show-all.dark-btn').click(function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active').text('Смотреть все').parent().find('.values-overflow').animate({'max-height': 250});
				}else{
					cur_height = $('.filter .checkbox-block .filter-checkbox .values').outerHeight();
					$(this).addClass('active').text('Скрыть').parent().find('.values-overflow').animate({'max-height': cur_height});
				}
				return false;
			});
		}	
/*---------------------------invest-end-----------------------------------*/	

/*------------------------------house-------------------------------------*/
		if($('.page-tabs').length){
			$('.page-tabs').tabs({});
		}	
		if($('#house-map').length){
			var map;
			function initialize() {
				var styles = [
					{
						stylers: [
						  { saturation: -100 }
						]
					}
				];  
				var myLatlng = new google.maps.LatLng(59.918803, 30.323464);
				var mapOptions = {
					zoom: 14,
					disableDefaultUI: true,
					scrollwheel: false,
					center: myLatlng
					};	
				map = new google.maps.Map(document.getElementById('house-map'), mapOptions);
				map.setOptions({styles: styles});	
			}
			google.maps.event.addDomListener(window, 'load', initialize);		
		}	
/*----------------------------house-end-----------------------------------*/		     

/*------------------------------cab_balance-------------------------------------*/
	$("#datepicker").datepicker({
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
		'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
		'Октябрь', 'Ноябрь', 'Декабрь'],
		 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		 firstDay: 1,
	});
	
	
/*----------------------------cab_balance-end-----------------------------------*/

});			

