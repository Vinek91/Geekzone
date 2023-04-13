window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}

(function(){
	var addEvent = function(object, type, callback) {
	    if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {
	        object.addEventListener(type, callback, false);
	    } else if (object.attachEvent) {
	        object.attachEvent("on" + type, callback);
	    } else {
	        object["on"+type] = callback;
	    }
	};
	function detectMouseMove() {
		// Initial container width
		var containerWidth = $('.container').outerWidth();
		document.addEventListener('mousemove', function(e) {
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});

		})
	}
	detectMouseMove();
	
	
	function detectTouch() {
		// Initial container width
		var containerWidth = $('.container').outerWidth();
		document.addEventListener('mousemove', function(e) {
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});
		})
	}
	detectMouseMove();
	
	function touchMove(){
		// Initial container width
		var containerWidth = $('.container').outerWidth();
		document.addEventListener('touchmove', function(e) {
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});

		})
	}
	
	touchMove();
	
	function detectInput(inputType){
		// Detect container width after resizing
		addEvent(window, "resize", function(event) {
			var containerWidth = $('.container').outerWidth();
			$(document).bind(inputType, function(e){
				$('.hover').css({
					 left:  e.pageX
				});
				$('.left-side').css({
					left: e.pageX + 75
				});
				var rightSideLeft = containerWidth - e.pageX;
				$('.right-side').css({
					right: rightSideLeft
				});
			});
		});
	}
	
	detectInput('mousemove');
	detectInput('touchmove');
	
})();

/*$(document).ready(function(){
  
  let c2 = $(".contenueproduit").clone();
  $("a").prop("href", "#slide-scroll2,#slide-scrool3");
  jQuery(this).prev("img").attr("id","slide-scroll2,slide-scrool3");
  c2.appendTo(".clone");
  
});
*/
