/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/cookie-banner.js":
/*!********************************************!*\
  !*** ./src/js/components/cookie-banner.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var cookieMessage = document.querySelector('.cookie-banner');
  var cookieAcceptBtn = cookieMessage.querySelector('.cookie-banner__accept-btn');
  var cookieCloseBtn = cookieMessage.querySelector('.cookie-banner__close-btn');
  var accept_terms = sessionStorage.getItem('cookie__accept_terms');
  if (cookieMessage && accept_terms !== 'true') {
    cookieMessage.style.display = 'block';
  }
  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', function () {
      sessionStorage.setItem('cookie__accept_terms', 'true');
      cookieMessage.style.display = 'none';
    });
  }
  if (cookieCloseBtn) {
    cookieCloseBtn.addEventListener('click', function () {
      cookieMessage.style.display = 'none';
    });
  }
});

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var cols = document.querySelectorAll('.footer__nav-col');
  if (cols.length) {
    cols.forEach(function (col) {
      var title = col.querySelector('.footer__nav-title');
      title.addEventListener('click', function () {
        col.classList.toggle('footer__nav-col--open');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  // mobile menu
  var burgerBtn = document.querySelector('.header__burger-btn');
  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
  }
  var groups = document.querySelectorAll('.mobile-menu__nav-group');
  if (groups.length) {
    groups.forEach(function (group) {
      var title = group.querySelector('.mobile-menu__nav-group-link');
      title.addEventListener('click', function () {
        group.classList.toggle('mobile-menu__nav-group--open');
      });
    });
  }

  // city modal
  var cityBtnList = document.querySelectorAll('.header__city');
  var cityModal = document.querySelector('.city-search');
  if (cityBtnList.length && cityModal) {
    cityBtnList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        cityModal.classList.toggle('city-search--open');
        if (window.innerWidth >= 1024) {
          var rect = btn.getBoundingClientRect();
          cityModal.style.top = rect.bottom + window.scrollY + 10 + 'px';
          cityModal.style.left = rect.left + window.scrollX + 'px';
        } else {
          cityModal.style.top = '';
          cityModal.style.left = '';
        }
      });
    });
    var closeBtn = cityModal.querySelector('.city-search__close');
    closeBtn.addEventListener('click', function () {
      cityModal.classList.remove('city-search--open');
    });
  }

  // lk
  var lkMenuBtn = document.querySelector('.header__lk-menu-btn');
  var lkNavBtn = document.querySelector('.header__lk-nav-btn');
  var lkNavClose = document.querySelector('.lk__navbar-close');
  if (lkMenuBtn && lkNavBtn && lkNavClose) {
    lkMenuBtn.addEventListener('click', function () {
      document.body.classList.remove('lk-nav-open');
      document.body.classList.toggle('lk-menu-open');
    });
    lkNavBtn.addEventListener('click', function () {
      document.body.classList.remove('lk-menu-open');
      document.body.classList.toggle('lk-nav-open');
    });
    lkNavClose.addEventListener('click', function () {
      document.body.classList.remove('lk-nav-open');
    });
  }
});

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  if (typeof ymaps !== 'undefined') ymaps.ready(init);
  function init() {
    var mapElement = document.querySelector("#map-station");
    if (!mapElement) return;
    var map = new ymaps.Map(mapElement, {
      center: [59.895348, 30.322300],
      zoom: 16,
      controls: []
    });
    var iconPath = "/images/common/map-marker.png";
    var placemark = new ymaps.Placemark([59.895348, 30.322300], {
      balloonContent: "Санкт-Петербургская городская станция переливания крови",
      hintContent: "Городская станция переливания крови"
    }, {
      iconLayout: "default#image",
      iconImageHref: iconPath,
      iconImageSize: [40, 40],
      // Размер иконки (подберите под ваш SVG)
      iconImageOffset: [-20, -40] // Центрирование по точке (x, y)
    });
    map.geoObjects.add(placemark);
  }
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Open modal
var openModal = function openModal(modalId) {
  var modal = document.querySelector(modalId);
  if (!modal) {
    console.warn("Modal ".concat(modalId, " does not exist!"));
    return;
  }
  if (modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = 'fixed';
  }
  document.body.style.overflow = 'hidden';
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.classList.add('modal--show');
  });
};

// Close modal
var closeModal = function closeModal() {
  var modal = document.querySelector('.modal--show');
  if (!modal) return;
  if (modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = '';
  }
  modal.classList.remove('modal--show');
  document.body.style.overflow = '';
  setTimeout(function () {
    modal.style.display = '';
  }, 350, modal);
};
document.addEventListener('DOMContentLoaded', function () {
  var modalLinks = document.querySelectorAll('[data-modal]');
  if (modalLinks.length) {
    modalLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var modalId = "#modal-".concat(link.dataset.modal);
        openModal(modalId);
        return false;
      });
    });
  }

  // Close on Close btn click
  var closeButtons = document.querySelectorAll('.js-close-modal');
  if (closeButtons.length) {
    closeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        return closeModal();
      });
    });
  }

  // Close on Escape
  document.body.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, false);
});

/***/ }),

/***/ "./src/js/components/password-toggle.js":
/*!**********************************************!*\
  !*** ./src/js/components/password-toggle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var passwordToggles = document.querySelectorAll('.form-group__btn--password-toggle');
  if (!!passwordToggles.length) {
    var normalText = 'Показать текст пароля';
    var activeText = 'Скрыть текст пароля';
    passwordToggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var wrapper = toggle.closest('.form-group__input-box');
        var input = wrapper.querySelector('.form-group__input');
        if (input.type === 'password') {
          input.type = 'text';
          toggle.classList.add('form-group__btn--active');
          toggle.setAttribute('aria-label', activeText);
          toggle.setAttribute('title', activeText);
        } else {
          input.type = 'password';
          toggle.classList.remove('form-group__btn--active');
          toggle.setAttribute('aria-label', normalText);
          toggle.setAttribute('title', normalText);
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/section-donor-code.js":
/*!*************************************************!*\
  !*** ./src/js/components/section-donor-code.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-donor-code__slider');
  if (!!slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.section-donor-code__slider-dots.slider-dots',
        clickable: true,
        bulletClass: 'slider-dots__el',
        bulletActiveClass: 'slider-dots__el--active'
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/section-hero.js":
/*!*******************************************!*\
  !*** ./src/js/components/section-hero.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var sliderEl = document.querySelector('.section-hero__slider');
  if (!sliderEl) return;
  var swiper = null;
  var initSwiper = function initSwiper() {
    if (window.innerWidth < 1024 && !swiper) {
      swiper = new Swiper(sliderEl, {
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        pagination: {
          el: '.section-hero__slider-dots.slider-dots',
          clickable: true,
          bulletClass: 'slider-dots__el',
          bulletActiveClass: 'slider-dots__el--active'
        },
        on: {
          transitionStart: function transitionStart() {
            slides.forEach(function (el) {
              el.classList.remove('hero-card--active');
            });
          }
        }
      });
    }
  };
  var destroySwiper = function destroySwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };
  var handleResize = function handleResize() {
    if (window.innerWidth < 1024) {
      initSwiper();
    } else {
      destroySwiper();
    }
  };

  // Инициализация при загрузке
  handleResize();

  // Пересчёт при ресайзе
  window.addEventListener('resize', handleResize);
  var slides = document.querySelectorAll('.hero-card');
  if (slides.length) {
    slides.forEach(function (slide) {
      slide.addEventListener('click', function () {
        slide.classList.toggle('hero-card--active');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/section-myth.js":
/*!*******************************************!*\
  !*** ./src/js/components/section-myth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var sliderEl = document.querySelector('.section-myth__slider');
  if (!sliderEl) return;
  var swiper = null;
  var initSwiper = function initSwiper() {
    if (window.innerWidth < 1024 && !swiper) {
      swiper = new Swiper(sliderEl, {
        slidesPerView: 1.3,
        spaceBetween: 12,
        preventClicks: false,
        preventClicksPropagation: false,
        on: {
          transitionStart: function transitionStart() {
            slides.forEach(function (el) {
              el.classList.remove('section-myth__card--active');
            });
          }
        }
      });
    }
  };
  var destroySwiper = function destroySwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };
  var handleResize = function handleResize() {
    if (window.innerWidth < 1024) {
      initSwiper();
    } else {
      destroySwiper();
    }
  };

  // Инициализация при загрузке
  handleResize();

  // Пересчёт при ресайзе
  window.addEventListener('resize', handleResize);
  var slides = document.querySelectorAll('.section-myth__card');
  if (slides.length) {
    slides.forEach(function (slide, index) {
      slide.addEventListener('click', function () {
        if (swiper) {
          swiper.slideTo(index);
        }
        slides.forEach(function (el) {
          if (el !== slide) {
            el.classList.remove('section-myth__card--active');
          }
        });
        slide.classList.toggle('section-myth__card--active');
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/section-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/section-slider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var sliderList = document.querySelectorAll('.section-slider__slider');
  if (!!sliderList.length) {
    sliderList.forEach(function (slider) {
      var box = slider.closest('.section-slider');
      var prevBtn = box.querySelector('.section-slider__slider-btn--prev');
      var nextBtn = box.querySelector('.section-slider__slider-btn--next');
      var dots = box.querySelector('.section-slider__dots');
      var slidesInitial = 3;
      if (slider.classList.contains('section-slider__slider--cols-2')) {
        slidesInitial = 2;
      } else if (slider.classList.contains('section-slider__slider--cols-4')) {
        slidesInitial = 4;
      }
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 11,
        grabCursor: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn
        },
        pagination: {
          el: dots,
          clickable: true,
          bulletClass: 'slider-dots__el',
          bulletActiveClass: 'slider-dots__el--active'
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: slidesInitial
          }
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var selectList = document.querySelectorAll('.select');
  if (!selectList.length) return;
  selectList.forEach(function (select) {
    select.addEventListener('click', function (evt) {
      evt.stopPropagation();
      closeAllSelect(select);
      if (!evt.target.closest('.select__list-box')) {
        select.classList.toggle('select--active');
      }
    });
    var current = select.querySelector('.select__current');
    var input = select.querySelector('.select__input');
    var selectItems = select.querySelectorAll('.select__list-item');
    selectItems.forEach(function (item) {
      item.addEventListener('click', function () {
        current.innerHTML = item.innerHTML;
        current.classList.remove('select__current--placeholder');
        input.value = item.innerText;
        var oldSelected = select.querySelector('.select__list-item--selected');
        oldSelected.classList.remove('select__list-item--selected');
        item.classList.add('select__list-item--selected');
      });
    });
  });
  document.addEventListener('click', closeAllSelect);
  function closeAllSelect(exeptSelect) {
    selectList.forEach(function (select) {
      if (exeptSelect && exeptSelect === select) return;
      select.classList.remove('select--active');
    });
  }
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var tabsNavButtons = document.querySelectorAll('.tabs__nav-btn');
  var tabsContent = document.querySelectorAll('.tabs__content');
  tabsNavButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetContentId = button.getAttribute('data-content');
      var targetContent = document.getElementById(targetContentId);

      // Убираем активные классы
      tabsNavButtons.forEach(function (btn) {
        return btn.classList.remove('tabs__nav-btn--active');
      });
      tabsContent.forEach(function (content) {
        content.classList.remove('tabs__content--active');
      });

      // Добавляем активный класс с задержкой для анимации
      button.classList.add('tabs__nav-btn--active');

      // Устанавливаем высоту перед показом
      setTimeout(function () {
        targetContent.classList.add('tabs__content--active');
      }, 10);
    });
  });

  // select
  var selectList = document.querySelectorAll('.select[data-tabs]');
  if (selectList.length) {
    selectList.forEach(function (select) {
      var tabsId = select.dataset.tabs;
      var tabs = document.getElementById(tabsId);
      var selectItems = select.querySelectorAll('.select__list-item[data-content]');
      if (selectItems.length) {
        selectItems.forEach(function (item) {
          var tabBtn = tabs.querySelector(".tabs__nav-btn[data-content=".concat(item.dataset.content, "]"));
          if (tabBtn) {
            item.addEventListener('click', function () {
              tabBtn.dispatchEvent(new Event('click', {}));
            });
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/theme-switcher.js":
/*!*********************************************!*\
  !*** ./src/js/components/theme-switcher.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var removeAllThemes = function removeAllThemes() {
    var classList = document.documentElement.classList;
    for (var i = classList.length - 1; i >= 0; i--) {
      var className = classList[i];
      if (className.startsWith('theme-')) {
        classList.remove(className);
      }
    }
  };
  var btnList = document.querySelectorAll('.js-set-theme');
  if (btnList.length > 0) {
    btnList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var theme = btn.getAttribute('data-theme');
        removeAllThemes();
        document.documentElement.classList.add("theme-".concat(theme));
      });
    });
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme-switcher */ "./src/js/components/theme-switcher.js");
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_theme_switcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_password_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/password-toggle */ "./src/js/components/password-toggle.js");
/* harmony import */ var _components_password_toggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_password_toggle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_section_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-hero */ "./src/js/components/section-hero.js");
/* harmony import */ var _components_section_hero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_section_hero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_section_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-slider */ "./src/js/components/section-slider.js");
/* harmony import */ var _components_section_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_section_slider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_section_donor_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-donor-code */ "./src/js/components/section-donor-code.js");
/* harmony import */ var _components_section_donor_code__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_section_donor_code__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/map */ "./src/js/components/map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_section_myth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/section-myth */ "./src/js/components/section-myth.js");
/* harmony import */ var _components_section_myth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_section_myth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cookie-banner */ "./src/js/components/cookie-banner.js");
/* harmony import */ var _components_cookie_banner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_cookie_banner__WEBPACK_IMPORTED_MODULE_12__);














/***/ })

/******/ });
//# sourceMappingURL=main.js.map