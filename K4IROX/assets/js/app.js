"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");

  // Slide Up
  var slideUp = function slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  // Slide Down
  var slideDown = function slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.removeProperty("display");
    var display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  // Slide Toggle
  var slideToggle = function slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (target.attributes.style === undefined || target.style.display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  // Primary Menu
  var mdScreen = "(max-width: 991px)";
  var mdScreenSize = window.matchMedia(mdScreen);
  var containSub1 = document.querySelectorAll(".has-sub > a");
  var mdScreenSizeActive = function mdScreenSizeActive(screen) {
    if (screen.matches) {
      // if menu has sub - mobile view
      containSub1.forEach(function (e) {
        e.addEventListener("click", function (el) {
          el.preventDefault();
          el.stopPropagation();
          el.target.classList.toggle("active");
          var menuSub = e.nextElementSibling;
          slideToggle(menuSub, 500);
        });
      });
    } else {
      // Desktop view - allow navigation on click
      containSub1.forEach(function (e) {
        // Remove preventDefault to allow navigation
        // The dropdown will still work on hover
      });
    }
  };
  mdScreenSize.addEventListener("change", function (e) {
    if (e.matches) {
      window.location.reload();
      mdScreenSizeActive(e);
    } else {
      mdScreenSize.removeEventListener("change", function (e) {
        mdScreenSizeActive(e);
      });
      window.location.reload();
    }
  });
  mdScreenSizeActive(mdScreenSize);

  // Sticky Header
  window.addEventListener("scroll", function () {
    var fixedHeader = document.querySelector(".navbar-overlay");
    if (fixedHeader) {
      var headerTop = fixedHeader.offsetHeight;
      var scrolled = window.scrollY;
      var headerFixed = function headerFixed() {
        if (scrolled > headerTop) {
          body.classList.add("navbar-sticky-init");
        } else if (scrolled < headerTop) {
          body.classList.remove("navbar-sticky-init");
        } else {
          body.classList.remove("navbar-sticky-init");
        }
      };
      setTimeout(headerFixed, 100);
    }
  });

  // Testimonial
  var swiperSlider = new Swiper(".testimonial-nav", {
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      576: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 6
      }
    }
  });
  var swiper2 = new Swiper(".testimonial-body", {
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    thumbs: {
      swiper: swiperSlider
    }
  });

  // Testimonail Slider 2
  var testimonialSlider2 = document.querySelector(".testimonial-slider-2");
  if (testimonialSlider2) {
    new Swiper(testimonialSlider2, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".testimonial-slider-2__next",
        prevEl: ".testimonial-slider-2__prev"
      }
    });
  }

  // Service Slider
  var serviceSlider = document.querySelector(".service-slider__is");
  if (serviceSlider) {
    new Swiper(serviceSlider, {
      spaceBetween: 16,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".service-slider__pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".service-slider__nav-next",
        prevEl: ".service-slider__nav-prev"
      },
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        },
        1920: {
          slidesPerView: 5
        },
        2100: {
          slidesPerView: 6
        }
      }
    });
  }
  // Scroll Cue Init
  scrollCue.init({
    duration: 500,
    interval: -300,
    percentage: 0.8
  });
});

// Preloader
var preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Formularios Temporales K4IROX
function showTemporaryMessage(message) {
  // Crear modal temporal
  var modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  `;
  
  var messageBox = document.createElement('div');
  messageBox.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    max-width: 500px;
    margin: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease;
  `;
  
  messageBox.innerHTML = `
    <div style="font-size: 48px; margin-bottom: 20px;">✅</div>
    <h3 style="margin: 0 0 20px 0; font-size: 24px;">${message}</h3>
    <p style="margin: 0 0 30px 0; font-size: 16px; opacity: 0.9;">
      Su mensaje ha sido registrado correctamente. Nos pondremos en contacto con usted en las próximas 24 horas.
    </p>
    <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" 
            style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; 
                   padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 16px; 
                   transition: all 0.3s ease;">
      Cerrar
    </button>
  `;
  
  modal.appendChild(messageBox);
  document.body.appendChild(modal);
  
  // Cerrar al hacer clic fuera del modal
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    if (document.body.contains(modal)) {
      modal.remove();
    }
  }, 5000);
}

function handleContactForm(event) {
  event.preventDefault();
  
  var form = event.target;
  var nombre = form.querySelector('input[name="nombre"]');
  var email = form.querySelector('input[name="email"]');
  var mensaje = form.querySelector('textarea[name="mensaje"]');
  
  // Validación básica
  if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
    alert('Por favor, complete todos los campos del formulario.');
    return false;
  }
  
  if (!email.value.includes('@')) {
    alert('Por favor, ingrese un email válido.');
    return false;
  }
  
  showTemporaryMessage('¡Gracias por contactarnos!');
  
  // Limpiar formulario después de 1 segundo
  setTimeout(() => {
    form.reset();
  }, 1000);
  
  return false;
}

function handleNewsletterForm(event) {
  event.preventDefault();
  
  var form = event.target;
  var email = form.querySelector('input[type="email"]');
  
  // Validación básica
  if (!email.value.trim()) {
    alert('Por favor, ingrese su dirección de email.');
    return false;
  }
  
  if (!email.value.includes('@')) {
    alert('Por favor, ingrese un email válido.');
    return false;
  }
  
  showTemporaryMessage('¡Gracias por suscribirse a nuestra newsletter!');
  
  // Limpiar formulario después de 1 segundo
  setTimeout(() => {
    form.reset();
  }, 1000);
  
  return false;
}

// Agregar estilos para animaciones
var style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
document.head.appendChild(style);