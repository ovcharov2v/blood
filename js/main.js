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

/***/ "./src/js/components/section-slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/section-slider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.section-slider__slider');
  if (slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 11,
      grabCursor: true,
      navigation: {
        nextEl: '.section-slider__slider-btn--next',
        prevEl: '.section-slider__slider-btn--prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
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
        input.value = item.querySelector('.select__title').innerText;
        var oldSelected = select.querySelector('.select__list-item--selected');
        oldSelected.classList.remove('select__list-item--selected');
        item.classList.add('select__list-item--selected');
        closeAllSelect();
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
/* harmony import */ var _components_section_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-slider */ "./src/js/components/section-slider.js");
/* harmony import */ var _components_section_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_section_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_5__);







/***/ })

/******/ });
//# sourceMappingURL=main.js.map