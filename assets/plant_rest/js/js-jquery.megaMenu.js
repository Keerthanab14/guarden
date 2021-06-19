/**
 * @package 	WordPress Plugin
 * @subpackage 	CMSMasters Mega Menu
 * @version 	1.1.2
 * 
 * Mega Menu Script
 * Created by CMSMasters
 * 
 */


(function ($) { 
	var header = $('#header .header_mid_inner'), 
		nav = $('#navigation'), 
		mega = nav.find('> li.menu-item-mega'), 
		header_width = header.width(), 
		firstRun = true, 
		rtl = $('html').attr('dir');
	
	
	$(document).ready(function() { 
		cmsmsMegaMenu();
	} );
	
	
	$(window).on('debouncedresize', function () { 
		cmsmsMegaMenu();
		
		
		header_width = header.width();
	} );
	
	
	function cmsmsMegaMenu() { 
		var win_width = $(window).width(), 
			new_header_width = header.width(), 
			header_pad_left = Number(header.css('padding-left').replace('px', '')), 
			header_left = header.offset().left + header_pad_left, 
			header_right = header_left + new_header_width;
		
		
		if (firstRun || new_header_width !== header_width) {
			mega.each(function () { 
				var li = $(this), 
					full = li.hasClass('menu-item-mega-fullwidth'), 
					drop_right = li.hasClass('menu-item-dropdown-right'), 
					li_left = li.offset().left, 
					mega = li.find('> div');
				
				
				if (mega.length === 1) {
					var mega_width = mega.outerWidth(), 
						mega_left = mega.offset().left, 
						mega_right = mega_left + mega_width;
					
					
					if (full) {
						mega.css( { 
							width : 	new_header_width + 'px', 
							right : 	'auto', 
							left : 		'-' + ((typeof(rtl) === 'undefined') ? (li_left - header_left) : (mega_right - header_right)) + 'px' 
						} );
					} else {
						if (mega_width >= new_header_width) {
							li.addClass('menu-item-mega-fullwidth menu-item-mega-dynamic-fullwidth').find('> div').css( { 
								width : 	new_header_width + 'px', 
								right : 	'auto', 
								left : 		'-' + ((typeof(rtl) === 'undefined') ? (li_left - header_left) : (mega_right - header_right)) + 'px' 
							} );
						} else {
							if (drop_right) {
								if (typeof(rtl) === 'undefined') {
									if (mega_left < header_left) {
										mega.css( { 
											right : 	'auto', 
											left : 		'-' + (li_left - header_left) + 'px' 
										} );
									}
								} else {
									if (mega_right > header_right) {
										mega.css( { 
											left : 	'-' + (mega_right - header_right) + 'px' 
										} );
									}
								}
							} else {
								if (typeof(rtl) === 'undefined') {
									if (mega_right > header_right) {
										mega.css( { 
											left : 	'-' + (mega_right - header_right) + 'px' 
										} );
									}
								} else {
									if (mega_left < header_left) {
										mega.css( { 
											right : 	'auto', 
											left : 		'-' + (li_left - header_left) + 'px' 
										} );
									}
								}
							}
						}
					}
					
					
					if (win_width < 1008) {
						mega.css( { 
							width : 	'', 
							right : 	'', 
							left : 		'' 
						} );
						
						
						mega.find('a').each(function () { 
							var a_style = $(this).attr('style'), 
								span_tag = $(this).find('span');
							
							
							$(this).removeAttr('style').attr('data-style', a_style);
							
							
							span_tag.each(function () { 
								var span_style = $(this).attr('style');
								
								
								$(this).removeAttr('style').attr('data-style', span_style);
							} );
						} );
					} else {
						mega.find('a').each(function () { 
							var a_style = $(this).attr('data-style'), 
								span_tag = $(this).find('span');
							
							
							$(this).removeAttr('data-style').attr('style', a_style);
							
							
							span_tag.each(function () { 
								var span_style = $(this).attr('data-style');
								
								
								$(this).removeAttr('data-style').attr('style', span_style);
							} );
						} );
					}
				}
			} );
		}
		
		
		firstRun = false;
	}
} )(jQuery);

