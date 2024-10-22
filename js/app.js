

// ================================
//  SHARE PREVIEW SIDEBAR
// ================================
$("#qrcode").click(function(){
  $(".qrcode").show();
});
$(".close_qr").click(function(){
  $(".qrcode").hide();
});
// ================================
//  SHARE PREVIEW SIDEBAR
// ================================
$("#share").click(function(){
  $(".share_profile").fadeIn();
});
$(".close_model").click(function(){
  $(".share_profile").fadeOut();
});
// ================================
//  MESSAGE PREVIEW SIDEBAR
// ================================
$(document).ready(function(){
  $("#view_message").click(function(){
    $(".message_popup").fadeIn();
  });
  $("#close").click(function(){
    $(".message_popup").fadeOut();
  });

});
// ================================
//  CART SIDEBAR
// ================================
$(document).ready(function($) {
	// Declare the body variable
	var $body = $("body");

	// Function that shows and hides the sidebar cart
	$(".cart-button, .close-button, #sidebar-cart-curtain").click(function(e) {
		e.preventDefault();
		
		// Add the show-sidebar-cart class to the body tag
		$body.toggleClass("show-sidebar-cart");

		// Check if the sidebar curtain is visible
		if ($("#sidebar-cart-curtain").is(":visible")) {
			// Hide the curtain
			$("#sidebar-cart-curtain").fadeOut(500);
		} else {
			// Show the curtain
			$("#sidebar-cart-curtain").fadeIn(500);
		}
	});



// ================================
//  HUMBURGER ACTIVE JS
// ================================

// document.querySelector('.humburger').onclick = function() {
//   this.classList.toggle('active');
//   document.querySelector("nav").classList.toggle('togglenav');
  
// };

// document.querySelector("nav").onclick = function()
// {
//   document.querySelector("nav").classList.remove('togglenav');
//   document.querySelector('.humburger').classList.remove('active');
// };

var menuBar = document.querySelector(".humburger");
var navBar = document.querySelector("nav");

if(menuBar != null && navBar != null){
  menuBar.addEventListener("click", () =>{
    menuBar.classList.toggle('active');
    navBar.classList.toggle('togglenav');
  })

  navBar.addEventListener("click", ()=>{
    menuBar.classList.remove("active");
    navBar.classList.remove("togglenav");
  })
}



// ================================
//  DASHBOARD  SIDEBAR
// ================================

var Icon = document.querySelector("#icon");
var Sidebar = document.querySelector(".dashboard_inner-sidebar");
var Showcase = document.querySelector(".dashboard_inner-showcase");
var Header = document.querySelector(".dashboard_inner-showcase header");

Icon.addEventListener("click",()=>{
  Sidebar.classList.toggle("active"); 
  Showcase.classList.toggle("active");
  Header.classList.toggle("active");
});

// ================================
//  QUANTITY ACTIVE JS
// ================================
	
	// Function that adds or subtracts quantity when a 
	// plus or minus button is clicked
	$body.on('click', '.plus-button, .minus-button', function () {
		// Get quanitity input values
		var qty = $(this).closest('.qty').find('.qty-input');
		var val = parseFloat(qty.val());
		var max = parseFloat(qty.attr('max'));
		var min = parseFloat(qty.attr('min'));
		var step = parseFloat(qty.attr('step'));

		// Check which button is clicked
		if ($(this).is('.plus-button')) {
			// Increase the value
			qty.val(val + step);
		} else {
			// Check if minimum button is clicked and that value is 
			// >= to the minimum required
			if (min && min >= val) {
				// Do nothing because value is the minimum required
				qty.val(min);
			} else if (val > 0) {
				// Subtract the value
				qty.val(val - step);
			}
		}
	});
});


// ================================
//  CUSTOM PRODUCT 
// ================================
$(document).ready(function(){
  $('.small_images img').click(function(){
    var image =  $(this).attr('src');
    $('.big_img img').attr('src',image);
  })
})

// ================================
//  SINGLE PRODUCT 
// ================================
$(document).ready(function(){

  $('.allcolors span').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      let image = $(this).attr('data-image');
      $('.product_img img').attr('src',image);

      let color = $(this).css('background');
      $('.cart_btn .addcartBtn').css('background',color);
      $('.product_img img').css('background',color);
     
  });
  var white = document.getElementById("white");
  var blue = document.getElementById("blue");
  var gradient = document.getElementById("gradient");
  var black = document.getElementById("black");
  var variant = document.getElementById("variant");
  if(white != null && blue != null && black != null && variant != null){
    white.addEventListener('click', function(){
      variant.innerHTML ="white & black"
    });
    blue.addEventListener('click', function(){
      variant.innerHTML ="matte blue"
    });
    gradient.addEventListener('click', function(){
      variant.innerHTML ="gradient white"
    });
    black.addEventListener('click', function(){
      variant.innerHTML ="classic silver"
    });
  }
});


// ================================
//  DASHBOARD DROPDOWN
// ================================
$(document).ready(function(){
  $(".profile").click(function () {
    $(".dropdown").slideToggle("fast");
    $("#down_icon i").toggleClass("fa-angle-up");
  });
});

// ================================
//  CHECKOUT PAGE LOGIN AND CUPOUN 
// ================================
$(document).ready(function(){
  $("#login").click(function(){
    $("#toggleLogin").slideToggle("fast");
  });
  $("#cupon").click(function(){
    $("#cuponBox").fadeToggle("fast");
  });
});

// ================================
//  DARK MODE
// ================================
$(document).ready(function(){
  $("#swithced").click(function () {
    $(".wrapper").toggleClass("theme-dark");
    $("#icon i").toggleClass("fa-sun");
    $("body p").toggleClass("active");
  });
  
});


// ================================
//  CLIENT SLIDER
// ================================
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 8,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  freemode:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    330: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    340: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    380: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// ================================
//  TEAM SLIDER
// ================================


var swiper = new Swiper(".myswiper2", {

  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  freemode:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1399: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



// ================================
//  PORTFOLIO SLIDER
// ================================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    freemode:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      330: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      340: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


  $('.counter').counterUp({
    delay: 10,
    time: 2000
});

// ================================
//  TESTOMONAIL SLIDER
// ================================
var swiper = new Swiper(".mySwiper1", {

  effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
  spaceBetween: 50,
	slidesPerView: "auto",
	preventClicks: false,
	loop: true,
	preventClicksPropagation: false,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: false,
	},
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// ======================================
// FAQ  JS
// ======================================
const faqItemHead = document.querySelectorAll(".faq-item-head");

faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-item-icon").firstElementChild;
    if (icon.className == "fa-solid fa-plus") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fa-solid fa-minus";
    } else if (icon.className == "fa-solid fa-minus") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fa-solid fa-plus";
    }
  });
});




// ================================
//  SHOW PRODUCT 
// ================================
document.querySelector("#previewBtn").onclick = () => {
  document.querySelector(".preview_card").classList.add("active");
};

document.querySelector("#close_mark").onclick = () => {
  document.querySelector(".preview_card").classList.remove("active");
};
document.querySelector(".preview_card").onclick = () => {
  document.querySelector(".preview_card").classList.remove("active");
};


// ================================
//  SHOW PASSWORD 
// ================================

var state = false;
function togglepass()
{
  if(state)
    {
      document.getElementById("password").setAttribute("type", "password");
      document.getElementById("eye").style.color = "#fff4";
      state = false;
    }
  else 
    {
      document.getElementById("password").setAttribute("type", "text");
      document.getElementById("eye").style.color = "#fff";
      state = true;
      
    }
}

function toggleCpass()
{
  if(state)
    {
      document.getElementById("c_password").setAttribute("type", "password");
      document.getElementById("password").setAttribute("type", "password");
      document.getElementById("eye").style.color = "#fff4";
      state = false;
    }
  else 
    {
      document.getElementById("c_password").setAttribute("type", "text");
      document.getElementById("password").setAttribute("type", "text");
      document.getElementById("eye").style.color = "#fff";
      state = true;
      
    }
};

// ================================
//  IMAGE UPLOAD PREVIEW JS
// ================================
function preview() {
  profile.src=URL.createObjectURL(event.target.files[0]);
};



// ================================
//  TEAM SLIDER
// ================================
var swiper = new Swiper(".myswiper2", {

  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  freemode:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



