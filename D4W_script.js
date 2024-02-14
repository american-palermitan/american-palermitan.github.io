//D4Wanted Script File 
//MCL, 2020

//TOPNAV SWITCHES TO HAMBURGER ICON ON SMALL SCREENS
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




//CODE the SCROLL TO TOP BUTTON
	//Get the button
	var mybutton = document.getElementById("topBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}




//CODE THE SIGN UP BUTTONS
// Get the modal
var modal = document.getElementById('signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//CODE THE ACCORDIAN TABS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



//Code the IMAGE LIGHTBOX
function openModal() {
  document.getElementById("myImgModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myImgModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





//filter list of blog posts; NO LONGER USED
$(document).ready(function () {
    $(".filter-id-1").click(function () {
        $(".id-2, .id-3").fadeOut(200);
        $(".id-1").fadeIn(200);
    });
    $(".filter-id-2").click(function () {
        $(".id-1, .id-3").fadeOut(200);
        $(".id-2").fadeIn(200);
    });
    $(".filter-id-3").click(function () {
        $(".id-1, .id-2").fadeOut(200);
        $(".id-3").fadeIn(200);
    });
    $(".filter-all").click(function () {
        $(".id-1, .id-2, .id-3").fadeIn(200);
    });
});



/*CODE THE INSTAGRAM NOT YET AVAILABLE POPUP
THIS CORRUPTED THE HAMBURGER MENU


// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}*/



/*CODE CONTACT FORM
function validateContactForm() {
            var valid = true;

            $(".info").html("");
            $(".input-field").css('border', '#e0dfdf 1px solid');
            var userName = $("#userName").val();
            var userEmail = $("#userEmail").val();
            var subject = $("#subject").val();
            var content = $("#content").val();
            
            if (userName == "") {
                $("#userName-info").html("Required.");
                $("#userName").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (userEmail == "") {
                $("#userEmail-info").html("Required.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
            {
                $("#userEmail-info").html("Invalid Email Address.");
                $("#userEmail").css('border', '#e66262 1px solid');
                valid = false;
            }

            if (subject == "") {
                $("#subject-info").html("Required.");
                $("#subject").css('border', '#e66262 1px solid');
                valid = false;
            }
            if (content == "") {
                $("#userMessage-info").html("Required.");
                $("#content").css('border', '#e66262 1px solid');
                valid = false;
            }
            return valid;
        }*/
		
		




/*CODE THE COOKIE BANNER*/
		if(localStorage.getItem('cookieSeen') != 'shown'){
			$(".cookie-banner").delay(2000).fadeIn();
			localStorage.setItem('cookieSeen','shown')
		}

		$('.close').click(function(e) {
		  $('.cookie-banner').fadeOut(); 
		});