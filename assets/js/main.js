jQuery(window).on('load', function() {   
    
    // HIDE PRELAODER
    $(".preloader").addClass("hide-preloader");
  
});


jQuery(document).ready(function($) {
	"use strict";
    
    // PORTFOLIO GALLERY 
    $('.portfolio a').featherlightGallery({
		previousIcon: '&#9664;',   
		nextIcon: '&#9654;',         
		galleryFadeIn: 100,
		galleryFadeOut: 300    
	});
    
});

document.addEventListener("DOMContentLoaded", function() {


	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
  
	let active = false;
  
  
	const lazyLoad = function() {
  
  
	  if (active === false) {
  
  
		active = true;
  
  
		setTimeout(function() {
  
  
		  lazyImages.forEach(function(lazyImage) {
  
  
			if ((lazyImage.getBoundingClientRect().top <;= window.innerHeight &;&; lazyImage.getBoundingClientRect().bottom >;= 0) &;&; getComputedStyle(lazyImage).display !== "none") {
  
  
			  lazyImage.src = lazyImage.dataset.src;
  
  
			  lazyImage.classList.remove("lazy");
  
  
			  lazyImages = lazyImages.filter(function(image) {
  
  
				return image !== lazyImage;
  
  
			  });
  
  
			  if (lazyImages.length === 0) {
  
  
				document.removeEventListener("scroll", lazyLoad);
  
  
				window.removeEventListener("resize", lazyLoad);
  
  
				window.removeEventListener("orientationchange", lazyLoad);
  
  
			  }
  
  
			}
  
  
		  });
  
  
		  active = false;
  
  
		}, 200);
  
  
	  }
  
  
	};
  
  
	document.addEventListener("scroll", lazyLoad);
  
  
	window.addEventListener("resize", lazyLoad);
  
  
	window.addEventListener("orientationchange", lazyLoad);
  
  
  });