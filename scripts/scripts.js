var productModal = $('.modal'),
	productDesc = $('.product-desc');
	productModalTitle = $('.modal-title'),
	productRating = $('.stars'),
	productSize = $('.sizes'),
	productSizeText = $('.size-text'),
	productPrice = $('.product-info .price'),
	itemNumber = $('.item-number');
	socialsIcons = $('.socials');

$(document).ready(function(){
	$('div[data-product]').on( "click", function() {
		productModal.css('display', 'block');

		$('.modal-close').click(function(){
			productModal.css('display', 'none');
		});
	});

	$(window).on('click',  function(event){ 
		if (event.target == productModal[0]) {
	    	productModal.css('display', 'none');
		}
	});

	reorderModal($(window).width());
}); 

$(window).resize(function() {
	reorderModal($(window).width());
});

function reorderModal(windowWidth) {

	if (windowWidth > 767 && windowWidth < 992) {
		if($('.product-info .socials').length > 0 || $('.product-info .product-desc').length > 0) {
			var elements = detachElement();

			elements.title.insertBefore('.modal-content img');
			elements.item.insertBefore('.primary-button');
			elements.rating.insertBefore('.primary-button');
			elements.price.insertBefore('.primary-button');
			elements.sizes.insertBefore('.primary-button');
			elements.info.insertAfter('.product-info');
			elements.socials.insertBefore('.modal-close');

			changeSizeText('size:', 'select a size');

		}

		$('.modal.phone-modal').removeClass('phone-modal');
		$('.modal').addClass('tablet-modal');

	} else if (windowWidth < 768) {
		if($('.product-info .stars').length > 0) {
			var elements = detachElement();

			elements.title.insertBefore('.modal-content img');
			elements.item.insertBefore('.modal-content img');
			elements.rating.insertBefore('.modal-content img');
			elements.info.insertBefore('.primary-button');
			elements.socials.insertBefore('.primary-button');
			elements.price.insertBefore('.primary-button');
			elements.sizes.insertBefore('.primary-button');

			changeSizeText('size:', 'select a size');

		}

		$('.modal.tablet-modal').removeClass('tablet-modal');
		$('.modal').addClass('phone-modal');
		
	} else if (windowWidth > 991) {
		if(!$('.product-info').next().hasClass(".modal-title")) {
			var elements = detachElement();	

			elements.title.insertBefore('.primary-button');
			elements.item.insertBefore('.primary-button');
			elements.price.insertBefore('.primary-button');
			elements.rating.insertBefore('.primary-button');
			elements.info.insertBefore('.primary-button');
			elements.sizes.insertBefore('.primary-button');
			elements.socials.insertBefore('.modal-close');

			changeSizeText('select a size', 'size:');
		}

		$('.modal.tablet-modal').removeClass('tablet-modal');
		$('.modal.phone-modal').removeClass('phone-modal');
	}
}

function detachElement() {
	var info = productDesc.detach(),
	title = productModalTitle.detach(),
	rating = productRating.detach(),
	item = itemNumber.detach(),
	sizes = productSize.detach(),
	price = productPrice.detach(),
	socials = socialsIcons.detach();

	return {
		info: info,
		title: title,
		rating: rating,
		item: item,
		sizes: sizes,
		price: price,
		socials: socials
	}
}

function changeSizeText($old, $new) {
	if(productSizeText.length > 0 && productSizeText.text().toLowerCase() == $old) {
		productSizeText.text($new);
	}
}