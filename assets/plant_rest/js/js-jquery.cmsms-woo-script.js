/**
 * @package 	WordPress
 * @subpackage 	EcoNature
 * @version		1.3.9
 * 
 * Woocommerce Scripts
 * Created by CMSMasters
 * 
 */


"use strict";

jQuery(document).ready(function () { 
	cmsms_ajax_add_to_cart();
	
	
	jQuery('body').on('added_to_cart', update_dynamic_cart);
	
	
	// Mobile Hover Products in Shop Page
	jQuery('.touch .product .product_inner figure').on('click', function() { 
		jQuery('*:not(this)').removeClass('cmsms_mobile_hover');
		
		
		jQuery(this).addClass('cmsms_mobile_hover');
	} );
	
	
	// Add Class to Current Tab
	jQuery('.cmsms_woo_tabs .description_tab').addClass('current_tab');
	jQuery('.cmsms_woo_tabs #tab-description').addClass('active_tab');
	
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() + jQuery(this).height() > jQuery('#main').offset().top + jQuery('#main').height()) {
			jQuery('.woocommerce-store-notice').css({'position' : 'relative'});
		} else {
			jQuery('.woocommerce-store-notice').css({'position' : 'fixed'});
		}
	} );
} );


var cmsms_added_product = {};


function cmsms_ajax_add_to_cart() {
	"use strict";
	
	jQuery('.cmsms_add_to_cart_button').on('click', function() {	
		var productInfo = jQuery(this).parents('.product_inner'), 
			product = {};
		
		
		product.name = productInfo.find('.cmsms_product_title a').text();
		
		product.image = productInfo.find('figure img');
		
		
		if (product.image.length) {
			/* Dynamic Cart Update Img Src */
			var str = product.image.get(0).src, 
				ext = /(\..{3,4})$/i.exec(str), 
				extLength = ext[1].length, 
				url = str.slice(0, -extLength), 
				newURL = /(-\d{2,}x\d{2,})$/i.exec(url), 
				newSize = '-' + cmsms_woo_script.thumbnail_image_width + 'x' + cmsms_woo_script.thumbnail_image_height, 
				buildURL = '';
			
			
			if (newURL !== null) {
				buildURL += url.slice(0, -newURL[1].length) + newSize + ext[1];
			} else {
				buildURL += url + ext[1];
			}
			
			
			product.image = '<img class="cmsms_added_product_info_img" src="' + buildURL + '" />';
		}
		
		
		cmsms_added_product = product;
	} );
}


function update_dynamic_cart(event) { 
	"use strict";
	
	var product = jQuery.extend( { 
		name : 		"Product", 
		image : 	'' 
	}, cmsms_added_product);
	
	
	if (typeof event != 'undefined') {
		var template = jQuery( 
				'<div class="cmsms_added_product_info">' + 
					product.image + 
					'<span class="cmsms_added_product_info_text">' + product.name + '</span>' + 
				'</div>' 
			);
		
		
		template.appendTo('.cmsms_dynamic_cart').css('visibility', 'visible').animate( { 
			opacity : 	1 
		}, 500);
		
		
		template.on('mouseenter cmsms_hide', function () { 
			template.animate( { 
				opacity : 	0 
			}, 500, function () { 
				template.remove();
			} );
		} );
		
		
		setTimeout(function () { 
			template.trigger('cmsms_hide');
		}, 2000);
	}
}

