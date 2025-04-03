"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["light"],{

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/assets/dist/controller.js");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _controllers_flatpickr_controller_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/flatpickr_controller.ts */ "./assets/controllers/flatpickr_controller.ts");
/* harmony import */ var _controllers_fileInput_controller_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/fileInput_controller.ts */ "./assets/controllers/fileInput_controller.ts");
/* harmony import */ var _controllers_pagePreloader_controller_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/pagePreloader_controller.ts */ "./assets/controllers/pagePreloader_controller.ts");
/* harmony import */ var _controllers_profileMenu_controller_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/profileMenu_controller.ts */ "./assets/controllers/profileMenu_controller.ts");
/* harmony import */ var _controllers_tooltips_controller_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/tooltips_controller.ts */ "./assets/controllers/tooltips_controller.ts");
/* harmony import */ var _controllers_collectionForm_controller_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/collectionForm_controller.ts */ "./assets/controllers/collectionForm_controller.ts");
/* harmony import */ var _controllers_ratingValue_controller_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/ratingValue_controller.ts */ "./assets/controllers/ratingValue_controller.ts");








const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)();
app.register("flatpickr", _controllers_flatpickr_controller_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.register("fileInput", _controllers_fileInput_controller_ts__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.register("pagePreloader", _controllers_pagePreloader_controller_ts__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.register("profileMenu", _controllers_profileMenu_controller_ts__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.register("tooltips", _controllers_tooltips_controller_ts__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.register("collectionForm", _controllers_collectionForm_controller_ts__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.register("ratingValue", _controllers_ratingValue_controller_ts__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "./assets/scripts/light.js":
/*!*********************************!*\
  !*** ./assets/scripts/light.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _styles_light_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/light/index.scss */ "./assets/styles/light/index.scss");




/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ turbo_controller; }
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");


class turbo_controller extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {}


/***/ }),

/***/ "./assets/controllers/_utils.ts":
/*!**************************************!*\
  !*** ./assets/controllers/_utils.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessControl: function() { return /* binding */ accessControl; },
/* harmony export */   on: function() { return /* binding */ on; },
/* harmony export */   onScroll: function() { return /* binding */ onScroll; },
/* harmony export */   scrollToElement: function() { return /* binding */ scrollToElement; },
/* harmony export */   select: function() { return /* binding */ select; }
/* harmony export */ });
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Checks the accessibility of elements and throws an error if any required element is missing.
 * @param elementList List of elements and their descriptions to validate.
 */
function accessControl(elementList) {
  elementList.forEach((_ref, index) => {
    let {
      element,
      description
    } = _ref;
    if (!element || element instanceof NodeList && element.length === 0) {
      const errorMsg = `The element "${description}" at index ${index} is missing or invalid.`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  });
}
/**
 * Simple selector function: returns an array of DOM elements.
 * @param cssSelector CSS selector to query.
 * @param all If `true`, returns all matching elements; otherwise, wraps a single matching element in an array.
 * @returns An array of elements (empty if no match is found).
 */
function select(cssSelector) {
  let all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  cssSelector = cssSelector.trim();
  if (all) {
    return Array.from(document.querySelectorAll(cssSelector));
  } else {
    const element = document.querySelector(cssSelector);
    return element ? [element] : [];
  }
}
/**
 * Adds an event listener to one or more selected elements.
 * @param eventType Type of event (e.g., "click").
 * @param cssSelector CSS selector of the target element(s).
 * @param callback Callback function to execute on the event.
 * @param all If `true`, applies the event listener to all matching elements.
 */
function on(eventType, cssSelector, callback) {
  let all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const selectEl = select(cssSelector, all);
  accessControl([{
    element: selectEl,
    description: `${cssSelector} (CSS selector)`
  }]);
  selectEl.forEach(el => el.addEventListener(eventType, callback));
}
/**
 * Adds a "scroll" event listener to a specified element.
 * @param target Target element to attach the listener to.
 * @param callback Callback function to execute on scroll.
 */
function onScroll(target, callback) {
  accessControl([{
    element: target,
    description: "onScroll target"
  }]);
  target.addEventListener("scroll", callback);
}
/**
 * Smoothly scrolls to a target element, considering the offset caused by a fixed navbar.
 * @param element Target element to scroll to.
 */
function scrollToElement(element) {
  accessControl([{
    element: element,
    description: "scrollTo target"
  }]);
  setTimeout(() => {
    const navbar = select("#mainNavbar", false); // Retourne toujours un tableau
    let offset = 0;
    if (navbar.length > 0) {
      offset = navbar[0].offsetHeight;
    }
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth"
    });
  }, 500);
}

/***/ }),

/***/ "./assets/controllers/collectionForm_controller.ts":
/*!*********************************************************!*\
  !*** ./assets/controllers/collectionForm_controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  connect() {
    this.collectionContainerTarget.querySelectorAll("li").forEach(item => this.addDeleteLink(item));
  }
  addCollectionElement() {
    const item = document.createElement("li");
    item.classList.add("collectionItem");
    item.innerHTML = this.prototypeValue.replace(/__name__/g, this.indexValue.toString());
    this.collectionContainerTarget.appendChild(item);
    this.addDeleteLink(item);
    this.indexValue++;
  }
  addDeleteLink(item) {
    const removeFormButton = document.createElement("button");
    removeFormButton.classList.add("collectionItemDeleteLink");
    removeFormButton.setAttribute("aria-label", "Supprimer cet élément");
    removeFormButton.setAttribute("type", "button");
    const trashIconElement = document.querySelector("[data-trash-icon]");
    if (trashIconElement) {
      const trashIconHTML = trashIconElement.getAttribute("data-trash-icon");
      if (trashIconHTML) {
        removeFormButton.innerHTML = trashIconHTML;
      }
    } else {
      removeFormButton.innerText = "Supprimer cet élément";
    }
    item.appendChild(removeFormButton);
    removeFormButton.addEventListener("click", e => {
      e.preventDefault();
      item.remove();
    });
  }
}
default_1.targets = ["collectionContainer"];
default_1.values = {
  index: Number,
  prototype: String
};
/* harmony default export */ __webpack_exports__["default"] = (default_1);

/***/ }),

/***/ "./assets/controllers/fileInput_controller.ts":
/*!****************************************************!*\
  !*** ./assets/controllers/fileInput_controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



// Stimulus controller for handling file input through a trigger element
/* harmony default export */ __webpack_exports__["default"] = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  constructor() {
    super(...arguments);
    // Define default selectors
    this.selectors = {
      triggerSelector: ".file-input-trigger",
      fileInputSelector: ".file-input"
    };
  }
  // Automatically called when the controller is connected to the DOM
  connect() {
    // Find all trigger elements within the current controller's scope
    const triggers = this.element.querySelectorAll(this.selectors.triggerSelector);
    // Add a click event listener to each trigger
    triggers.forEach(trigger => {
      trigger.addEventListener("click", this.handleTriggerClick.bind(this));
    });
  }
  // Handle the click event for the trigger element
  handleTriggerClick(event) {
    event.preventDefault();
    // Find the associated file input element within the current controller's scope
    const fileInput = this.element.querySelector(this.selectors.fileInputSelector);
    if (fileInput) {
      fileInput.click();
    } else {
      console.error("Aucun champ de fichier trouvé avec le sélecteur : ${this.selectors.fileInputSelector}");
    }
  }
});

/***/ }),

/***/ "./assets/controllers/flatpickr_controller.ts":
/*!****************************************************!*\
  !*** ./assets/controllers/flatpickr_controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/l10n/fr.js */ "./node_modules/flatpickr/dist/l10n/fr.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_4__);





class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  connect() {
    const mode = this.element.getAttribute("data-flatpickr-mode") || "default";
    const options = this.getFlatpickrOptions(mode);
    // Apply flatpickr to each target element
    this.dateInputTargets.forEach(input => {
      (0,flatpickr__WEBPACK_IMPORTED_MODULE_3__["default"])(input, {
        locale: flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_4__.French,
        position: "below center",
        allowInput: true,
        altInput: true,
        dateFormat: "Y-m-d H:i:S",
        ...options
      });
    });
  }
  /**
   * Returns flatpickr options based on the mode :
   * "default", "sinceToday", "datetimeSinceTodayMaxOneYear", "untilToday" or "dateOfBirth".
   *
   * @param mode The configuration mode.
   */
  getFlatpickrOptions(mode) {
    const today = new Date();
    if (mode === "sinceToday") {
      return {
        minDate: today,
        defaultDate: today.toISOString().split("T")[0],
        altFormat: "l j F Y"
      };
    } else if (mode === "datetimeSinceTodayMaxOneYear") {
      const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate() - 1);
      return {
        enableTime: true,
        minDate: today,
        maxDate: maxDate,
        altFormat: "l j F à H\\hi"
      };
    } else if (mode === "untilToday") {
      return {
        maxDate: this.element.getAttribute("data-flatpickr-max-date") || today.toISOString().split("T")[0],
        altFormat: "j F Y"
      };
    } else if (mode === "dateOfBirth") {
      const defaultMinDate = new Date(today.getFullYear() - 130, today.getMonth(), today.getDate());
      const defaultMaxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      return {
        minDate: this.element.getAttribute("data-flatpickr-min-date") || defaultMinDate.toISOString().split("T")[0],
        maxDate: this.element.getAttribute("data-flatpickr-max-date") || defaultMaxDate.toISOString().split("T")[0],
        altFormat: "j F Y"
      };
    } else {
      return {
        // Default configuration
        minDate: this.element.getAttribute("data-flatpickr-min-date") || today,
        defaultDate: this.element.getAttribute("data-flatpickr-default-date") || today,
        altFormat: "l j F Y"
      };
    }
  }
}
default_1.targets = ["dateInput"];
/* harmony default export */ __webpack_exports__["default"] = (default_1);

/***/ }),

/***/ "./assets/controllers/pagePreloader_controller.ts":
/*!********************************************************!*\
  !*** ./assets/controllers/pagePreloader_controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "./assets/controllers/_utils.ts");


class BaseController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {}
BaseController.initialized = false;
/* harmony default export */ __webpack_exports__["default"] = (class extends BaseController {
  constructor() {
    super(...arguments);
    this.selectors = {
      pagePreloader: "#pagePreloader"
    };
  }
  connect() {
    this.removePreloader();
    if (!BaseController.initialized) {
      this.listenTurbo();
      BaseController.initialized = true;
    }
  }
  removePreloader() {
    const pagePreloader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.select)(this.selectors.pagePreloader, false);
    if (pagePreloader.length > 0) {
      pagePreloader[0].remove();
    }
  }
  listenTurbo() {
    document.addEventListener("turbo:load", () => {
      this.removePreloader();
    });
  }
});

/***/ }),

/***/ "./assets/controllers/profileMenu_controller.ts":
/*!******************************************************!*\
  !*** ./assets/controllers/profileMenu_controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_utils */ "./assets/controllers/_utils.ts");




// Used to toggle the buttons in the profile page menu
/* harmony default export */ __webpack_exports__["default"] = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  constructor() {
    super(...arguments);
    this.selectors = {
      userBtnSelector: ".userBtn"
    };
    this.userButtons = [];
  }
  connect() {
    // Select all elements matching the user button selector and store them in userButtons
    this.userButtons = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.select)(this.selectors.userBtnSelector, true);
    // Attach a click event listener to all user buttons
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.on)("click", this.selectors.userBtnSelector, e => {
      this.userButtons.forEach(userBtn => {
        // If the button is not the one that was clicked and is currently expanded,
        userBtn !== e.currentTarget && userBtn.getAttribute("aria-expanded") === 'true'
        // trigger a click to close it
        ? userBtn.click() : null;
      });
    }, true);
  }
});

/***/ }),

/***/ "./assets/controllers/ratingValue_controller.ts":
/*!******************************************************!*\
  !*** ./assets/controllers/ratingValue_controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  connect() {
    this.updateValue();
  }
  updateValue() {
    const value = this.rangeTarget.value;
    this.outputTarget.textContent = value;
  }
}
default_1.targets = ["range", "output"];
/* harmony default export */ __webpack_exports__["default"] = (default_1);

/***/ }),

/***/ "./assets/controllers/tooltips_controller.ts":
/*!***************************************************!*\
  !*** ./assets/controllers/tooltips_controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_utils */ "./assets/controllers/_utils.ts");





/* harmony default export */ __webpack_exports__["default"] = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  constructor() {
    super(...arguments);
    this.selectors = {
      tooltipsSelector: '[data-bs-toggle="tooltip"]'
    };
    this.tooltipTriggerList = [];
  }
  connect() {
    this.tooltipTriggerList = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.select)(this.selectors.tooltipsSelector, true);
    this.tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap__WEBPACK_IMPORTED_MODULE_3__.Tooltip(tooltipTriggerEl);
    });
  }
});

/***/ }),

/***/ "./assets/styles/light/index.scss":
/*!****************************************!*\
  !*** ./assets/styles/light/index.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-chartjs/assets/dist/controller.js":
/*!*************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/assets/dist/controller.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ default_1; }
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");


if (chart_js__WEBPACK_IMPORTED_MODULE_1__.registerables) {
  chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_1__.registerables);
}
let isChartInitialized = false;
class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  constructor() {
    super(...arguments);
    this.chart = null;
  }
  connect() {
    if (!isChartInitialized) {
      isChartInitialized = true;
      this.dispatchEvent('init', {
        Chart: chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart
      });
    }
    if (!(this.element instanceof HTMLCanvasElement)) {
      throw new Error('Invalid element');
    }
    const payload = this.viewValue;
    if (Array.isArray(payload.options) && 0 === payload.options.length) {
      payload.options = {};
    }
    this.dispatchEvent('pre-connect', {
      options: payload.options,
      config: payload
    });
    const canvasContext = this.element.getContext('2d');
    if (!canvasContext) {
      throw new Error('Could not getContext() from Element');
    }
    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(canvasContext, payload);
    this.dispatchEvent('connect', {
      chart: this.chart
    });
  }
  disconnect() {
    this.dispatchEvent('disconnect', {
      chart: this.chart
    });
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
  viewValueChanged() {
    if (this.chart) {
      const viewValue = {
        data: this.viewValue.data,
        options: this.viewValue.options
      };
      if (Array.isArray(viewValue.options) && 0 === viewValue.options.length) {
        viewValue.options = {};
      }
      this.dispatchEvent('view-value-change', viewValue);
      this.chart.data = viewValue.data;
      this.chart.options = viewValue.options;
      this.chart.update();
      const parentElement = this.element.parentElement;
      if (parentElement && this.chart.options.responsive) {
        const originalWidth = parentElement.style.width;
        parentElement.style.width = `${parentElement.offsetWidth + 1}px`;
        setTimeout(() => {
          parentElement.style.width = originalWidth;
        }, 0);
      }
    }
  }
  dispatchEvent(name, payload) {
    this.dispatch(name, {
      detail: payload,
      prefix: 'chartjs'
    });
  }
}
default_1.values = {
  view: Object
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_dist_chunks_helpers_segment_js","vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-45af59"], function() { return __webpack_exec__("./assets/scripts/light.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUNrQixRQUFRLENBQUNELElBQUksRUFBRTtNQUFFRSxNQUFNLEVBQUVuQixPQUFPO01BQUVvQixNQUFNLEVBQUU7SUFBVSxDQUFDLENBQUM7RUFDL0Q7QUFDSjtBQUNBOUcsU0FBUyxDQUFDeUIsTUFBTSxHQUFHO0VBQ2ZzRixJQUFJLEVBQUVDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvX3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jb2xsZWN0aW9uRm9ybV9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9maWxlSW5wdXRfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmxhdHBpY2tyX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2VQcmVsb2FkZXJfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcHJvZmlsZU1lbnVfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcmF0aW5nVmFsdWVfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvdG9vbHRpcHNfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xpZ2h0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtY2hhcnRqcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gXCJAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2VcIjtcclxuaW1wb3J0IEZsYXRwaWNrckNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvZmxhdHBpY2tyX2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IEZpbGVJbnB1dENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvZmlsZUlucHV0X2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IFBhZ2VQcmVsb2FkZXJDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3BhZ2VQcmVsb2FkZXJfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgcHJvZmlsZU1lbnVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3Byb2ZpbGVNZW51X2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IFRvb2x0aXBzQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy90b29sdGlwc19jb250cm9sbGVyLnRzXCI7XHJcbmltcG9ydCBDb2xsZWN0aW9uRm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvY29sbGVjdGlvbkZvcm1fY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgUmF0aW5nVmFsdWVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3JhdGluZ1ZhbHVlX2NvbnRyb2xsZXIudHNcIjtcclxuXHJcbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcclxuXHJcbmFwcC5yZWdpc3RlcihcImZsYXRwaWNrclwiLCBGbGF0cGlja3JDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwiZmlsZUlucHV0XCIsIEZpbGVJbnB1dENvbnRyb2xsZXIpO1xyXG5hcHAucmVnaXN0ZXIoXCJwYWdlUHJlbG9hZGVyXCIsIFBhZ2VQcmVsb2FkZXJDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwicHJvZmlsZU1lbnVcIiwgcHJvZmlsZU1lbnVDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwidG9vbHRpcHNcIiwgVG9vbHRpcHNDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwiY29sbGVjdGlvbkZvcm1cIiwgQ29sbGVjdGlvbkZvcm1Db250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwicmF0aW5nVmFsdWVcIiwgUmF0aW5nVmFsdWVDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IFwiLi4vYm9vdHN0cmFwLmpzXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2xpZ2h0L2luZGV4LnNjc3NcIjtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJ0eXBlIEVsZW1lbnREZXNjcmlwdG9yID0ge1xyXG4gICAgZWxlbWVudDogRWxlbWVudCB8IE5vZGVMaXN0T2Y8RWxlbWVudD4gfCBFbGVtZW50W10gfCBudWxsO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgdGhlIGFjY2Vzc2liaWxpdHkgb2YgZWxlbWVudHMgYW5kIHRocm93cyBhbiBlcnJvciBpZiBhbnkgcmVxdWlyZWQgZWxlbWVudCBpcyBtaXNzaW5nLlxyXG4gKiBAcGFyYW0gZWxlbWVudExpc3QgTGlzdCBvZiBlbGVtZW50cyBhbmQgdGhlaXIgZGVzY3JpcHRpb25zIHRvIHZhbGlkYXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjY2Vzc0NvbnRyb2woZWxlbWVudExpc3Q6IEVsZW1lbnREZXNjcmlwdG9yW10pOiB2b2lkIHtcclxuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKHsgZWxlbWVudCwgZGVzY3JpcHRpb24gfSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCAmJiBlbGVtZW50Lmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgVGhlIGVsZW1lbnQgXCIke2Rlc2NyaXB0aW9ufVwiIGF0IGluZGV4ICR7aW5kZXh9IGlzIG1pc3Npbmcgb3IgaW52YWxpZC5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBzZWxlY3RvciBmdW5jdGlvbjogcmV0dXJucyBhbiBhcnJheSBvZiBET00gZWxlbWVudHMuXHJcbiAqIEBwYXJhbSBjc3NTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkuXHJcbiAqIEBwYXJhbSBhbGwgSWYgYHRydWVgLCByZXR1cm5zIGFsbCBtYXRjaGluZyBlbGVtZW50czsgb3RoZXJ3aXNlLCB3cmFwcyBhIHNpbmdsZSBtYXRjaGluZyBlbGVtZW50IGluIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBlbGVtZW50cyAoZW1wdHkgaWYgbm8gbWF0Y2ggaXMgZm91bmQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdDxUIGV4dGVuZHMgRWxlbWVudD4oXHJcbiAgICBjc3NTZWxlY3Rvcjogc3RyaW5nLFxyXG4gICAgYWxsOiBib29sZWFuID0gZmFsc2VcclxuKTogVFtdIHtcclxuICAgIGNzc1NlbGVjdG9yID0gY3NzU2VsZWN0b3IudHJpbSgpO1xyXG4gICAgaWYgKGFsbCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8VD4oY3NzU2VsZWN0b3IpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4oY3NzU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50ID8gW2VsZW1lbnRdIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIG9uZSBvciBtb3JlIHNlbGVjdGVkIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0gZXZlbnRUeXBlIFR5cGUgb2YgZXZlbnQgKGUuZy4sIFwiY2xpY2tcIikuXHJcbiAqIEBwYXJhbSBjc3NTZWxlY3RvciBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRhcmdldCBlbGVtZW50KHMpLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiB0aGUgZXZlbnQuXHJcbiAqIEBwYXJhbSBhbGwgSWYgYHRydWVgLCBhcHBsaWVzIHRoZSBldmVudCBsaXN0ZW5lciB0byBhbGwgbWF0Y2hpbmcgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb248VCBleHRlbmRzIEVsZW1lbnQ+KFxyXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBjc3NTZWxlY3Rvcjogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQsXHJcbiAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdEVsID0gc2VsZWN0PFQ+KGNzc1NlbGVjdG9yLCBhbGwpO1xyXG4gICAgYWNjZXNzQ29udHJvbChbXHJcbiAgICAgICAgeyBlbGVtZW50OiBzZWxlY3RFbCwgZGVzY3JpcHRpb246IGAke2Nzc1NlbGVjdG9yfSAoQ1NTIHNlbGVjdG9yKWAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIHNlbGVjdEVsLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBcInNjcm9sbFwiIGV2ZW50IGxpc3RlbmVyIHRvIGEgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciB0by5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gc2Nyb2xsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2Nyb2xsKFxyXG4gICAgdGFyZ2V0OiBFbGVtZW50LFxyXG4gICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWRcclxuKTogdm9pZCB7XHJcbiAgICBhY2Nlc3NDb250cm9sKFt7IGVsZW1lbnQ6IHRhcmdldCwgZGVzY3JpcHRpb246IFwib25TY3JvbGwgdGFyZ2V0XCIgfV0pO1xyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2FsbGJhY2spO1xyXG59XHJcblxyXG4vKipcclxuICogU21vb3RobHkgc2Nyb2xscyB0byBhIHRhcmdldCBlbGVtZW50LCBjb25zaWRlcmluZyB0aGUgb2Zmc2V0IGNhdXNlZCBieSBhIGZpeGVkIG5hdmJhci5cclxuICogQHBhcmFtIGVsZW1lbnQgVGFyZ2V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICBhY2Nlc3NDb250cm9sKFt7IGVsZW1lbnQ6IGVsZW1lbnQsIGRlc2NyaXB0aW9uOiBcInNjcm9sbFRvIHRhcmdldFwiIH1dKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBzZWxlY3Q8SFRNTEVsZW1lbnQ+KFwiI21haW5OYXZiYXJcIiwgZmFsc2UpOyAvLyBSZXRvdXJuZSB0b3Vqb3VycyB1biB0YWJsZWF1XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgaWYgKG5hdmJhci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IG5hdmJhclswXS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIG9mZnNldCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCA1MDApO1xyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJjb2xsZWN0aW9uQ29udGFpbmVyXCJdO1xyXG5cclxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XHJcbiAgICAgICAgaW5kZXg6IE51bWJlcixcclxuICAgICAgICBwcm90b3R5cGU6IFN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgZGVjbGFyZSBjb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIGRlY2xhcmUgaW5kZXhWYWx1ZTogbnVtYmVyO1xyXG4gICAgZGVjbGFyZSBwcm90b3R5cGVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuYWRkRGVsZXRlTGluayhpdGVtIGFzIEhUTUxFbGVtZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29sbGVjdGlvbkVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJjb2xsZWN0aW9uSXRlbVwiKTtcclxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IHRoaXMucHJvdG90eXBlVmFsdWUucmVwbGFjZShcclxuICAgICAgICAgICAgL19fbmFtZV9fL2csXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhWYWx1ZS50b1N0cmluZygpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Db250YWluZXJUYXJnZXQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5hZGREZWxldGVMaW5rKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuaW5kZXhWYWx1ZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRGVsZXRlTGluayhpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZUZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbGxlY3Rpb25JdGVtRGVsZXRlTGlua1wiKTtcclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTdXBwcmltZXIgY2V0IMOpbMOpbWVudFwiKTtcclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgdHJhc2hJY29uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10cmFzaC1pY29uXVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYXNoSWNvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhc2hJY29uSFRNTCA9IHRyYXNoSWNvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10cmFzaC1pY29uXCIpO1xyXG4gICAgICAgICAgICBpZiAodHJhc2hJY29uSFRNTCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5pbm5lckhUTUwgPSB0cmFzaEljb25IVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5pbm5lclRleHQgPSBcIlN1cHByaW1lciBjZXQgw6lsw6ltZW50XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJlbW92ZUZvcm1CdXR0b24pO1xyXG5cclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiB0aGUgc2VsZWN0b3JzIHVzZWQgaW4gdGhpcyBjb250cm9sbGVyXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdHJpZ2dlclNlbGVjdG9yOiBzdHJpbmc7XHJcbiAgICBmaWxlSW5wdXRTZWxlY3Rvcjogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdGltdWx1cyBjb250cm9sbGVyIGZvciBoYW5kbGluZyBmaWxlIGlucHV0IHRocm91Z2ggYSB0cmlnZ2VyIGVsZW1lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIC8vIERlZmluZSBkZWZhdWx0IHNlbGVjdG9yc1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdHJpZ2dlclNlbGVjdG9yOiBcIi5maWxlLWlucHV0LXRyaWdnZXJcIixcclxuICAgICAgICBmaWxlSW5wdXRTZWxlY3RvcjogXCIuZmlsZS1pbnB1dFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NXHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZpbmQgYWxsIHRyaWdnZXIgZWxlbWVudHMgd2l0aGluIHRoZSBjdXJyZW50IGNvbnRyb2xsZXIncyBzY29wZVxyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy50cmlnZ2VyU2VsZWN0b3JcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBlYWNoIHRyaWdnZXJcclxuICAgICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrLmJpbmQodGhpcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciB0aGUgdHJpZ2dlciBlbGVtZW50XHJcbiAgICBoYW5kbGVUcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgYXNzb2NpYXRlZCBmaWxlIGlucHV0IGVsZW1lbnQgd2l0aGluIHRoZSBjdXJyZW50IGNvbnRyb2xsZXIncyBzY29wZVxyXG4gICAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy5maWxlSW5wdXRTZWxlY3RvclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChmaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgZmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgIFwiQXVjdW4gY2hhbXAgZGUgZmljaGllciB0cm91dsOpIGF2ZWMgbGUgc8OpbGVjdGV1ciA6ICR7dGhpcy5zZWxlY3RvcnMuZmlsZUlucHV0U2VsZWN0b3J9XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcclxuaW1wb3J0IGZsYXRwaWNrciBmcm9tIFwiZmxhdHBpY2tyXCI7XHJcbmltcG9ydCB7IEZyZW5jaCB9IGZyb20gXCJmbGF0cGlja3IvZGlzdC9sMTBuL2ZyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJkYXRlSW5wdXRcIl07XHJcbiAgICBkZWNsYXJlIGRhdGVJbnB1dFRhcmdldHM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtb2RlID1cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1vZGVcIikgfHwgXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmxhdHBpY2tyT3B0aW9ucyhtb2RlKTtcclxuXHJcbiAgICAgICAgLy8gQXBwbHkgZmxhdHBpY2tyIHRvIGVhY2ggdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dFRhcmdldHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgZmxhdHBpY2tyKGlucHV0LCB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IEZyZW5jaCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJlbG93IGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFsdElucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZCBIOmk6U1wiLFxyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGZsYXRwaWNrciBvcHRpb25zIGJhc2VkIG9uIHRoZSBtb2RlIDpcclxuICAgICAqIFwiZGVmYXVsdFwiLCBcInNpbmNlVG9kYXlcIiwgXCJkYXRldGltZVNpbmNlVG9kYXlNYXhPbmVZZWFyXCIsIFwidW50aWxUb2RheVwiIG9yIFwiZGF0ZU9mQmlydGhcIi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgY29uZmlndXJhdGlvbiBtb2RlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEZsYXRwaWNrck9wdGlvbnMobW9kZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzaW5jZVRvZGF5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdLFxyXG4gICAgICAgICAgICAgICAgYWx0Rm9ybWF0OiBcImwgaiBGIFlcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZGF0ZXRpbWVTaW5jZVRvZGF5TWF4T25lWWVhclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpICsgMSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJsIGogRiDDoCBIXFxcXGhpXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBcInVudGlsVG9kYXlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWF4LWRhdGVcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJqIEYgWVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJkYXRlT2ZCaXJ0aFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNaW5EYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSAtIDEzMCwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1heERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpIC0gMTgsIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWluRGF0ZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWluLWRhdGVcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWluRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICAgICAgICAgIG1heERhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1heC1kYXRlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1heERhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBhbHRGb3JtYXQ6IFwiaiBGIFlcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWluLWRhdGVcIikgfHwgdG9kYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLWRlZmF1bHQtZGF0ZVwiKSB8fCB0b2RheSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJsIGogRiBZXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gXCIuL191dGlsc1wiO1xyXG5cclxuY2xhc3MgQmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0b3JzIHtcclxuICAgIHBhZ2VQcmVsb2FkZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBzZWxlY3RvcnM6IFNlbGVjdG9ycyA9IHtcclxuICAgICAgICBwYWdlUHJlbG9hZGVyOiBcIiNwYWdlUHJlbG9hZGVyXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQcmVsb2FkZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCFCYXNlQ29udHJvbGxlci5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlblR1cmJvKCk7XHJcbiAgICAgICAgICAgIEJhc2VDb250cm9sbGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVQcmVsb2FkZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcGFnZVByZWxvYWRlciA9IHNlbGVjdDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnBhZ2VQcmVsb2FkZXIsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocGFnZVByZWxvYWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmVsb2FkZXJbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuVHVyYm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByZWxvYWRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCB7IHNlbGVjdCwgb24gfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdXNlckJ0blNlbGVjdG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFVzZWQgdG8gdG9nZ2xlIHRoZSBidXR0b25zIGluIHRoZSBwcm9maWxlIHBhZ2UgbWVudVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdXNlckJ0blNlbGVjdG9yOiBcIi51c2VyQnRuXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHVzZXJCdXR0b25zOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZWxlY3QgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSB1c2VyIGJ1dHRvbiBzZWxlY3RvciBhbmQgc3RvcmUgdGhlbSBpbiB1c2VyQnV0dG9uc1xyXG4gICAgICAgIHRoaXMudXNlckJ1dHRvbnMgPSBzZWxlY3Q8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy51c2VyQnRuU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2ggYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBhbGwgdXNlciBidXR0b25zXHJcbiAgICAgICAgb24oXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMudXNlckJ0blNlbGVjdG9yLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQnV0dG9ucy5mb3JFYWNoKCh1c2VyQnRuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGJ1dHRvbiBpcyBub3QgdGhlIG9uZSB0aGF0IHdhcyBjbGlja2VkIGFuZCBpcyBjdXJyZW50bHkgZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckJ0biAhPT0gZS5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckJ0bi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID09PSAndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJpZ2dlciBhIGNsaWNrIHRvIGNsb3NlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXNlckJ0bi5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wicmFuZ2VcIiwgXCJvdXRwdXRcIl07XHJcblxyXG4gICAgZGVjbGFyZSByYW5nZVRhcmdldDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGRlY2xhcmUgb3V0cHV0VGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmFuZ2VUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdG9vbHRpcHNTZWxlY3Rvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcHNTZWxlY3RvcjogJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nLFxyXG4gICAgfTtcclxuXHJcbiAgICB0b29sdGlwVHJpZ2dlckxpc3Q6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwVHJpZ2dlckxpc3QgPSBzZWxlY3Q8RWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnRvb2x0aXBzU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcFRyaWdnZXJMaXN0LmZvckVhY2goKHRvb2x0aXBUcmlnZ2VyRWwpID0+IHtcclxuICAgICAgICAgICAgbmV3IFRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgeyByZWdpc3RlcmFibGVzLCBDaGFydCB9IGZyb20gJ2NoYXJ0LmpzJztcblxuaWYgKHJlZ2lzdGVyYWJsZXMpIHtcbiAgICBDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcbn1cbmxldCBpc0NoYXJ0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKCFpc0NoYXJ0SW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGlzQ2hhcnRJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2luaXQnLCB7XG4gICAgICAgICAgICAgICAgQ2hhcnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmlld1ZhbHVlO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkLm9wdGlvbnMpICYmIDAgPT09IHBheWxvYWQub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBheWxvYWQub3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncHJlLWNvbm5lY3QnLCB7XG4gICAgICAgICAgICBvcHRpb25zOiBwYXlsb2FkLm9wdGlvbnMsXG4gICAgICAgICAgICBjb25maWc6IHBheWxvYWQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmICghY2FudmFzQ29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0Q29udGV4dCgpIGZyb20gRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY2FudmFzQ29udGV4dCwgcGF5bG9hZCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZpZXdWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3VmFsdWUgPSB7IGRhdGE6IHRoaXMudmlld1ZhbHVlLmRhdGEsIG9wdGlvbnM6IHRoaXMudmlld1ZhbHVlLm9wdGlvbnMgfTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZpZXdWYWx1ZS5vcHRpb25zKSAmJiAwID09PSB2aWV3VmFsdWUub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2aWV3VmFsdWUub3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd2aWV3LXZhbHVlLWNoYW5nZScsIHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRhdGEgPSB2aWV3VmFsdWUuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQub3B0aW9ucyA9IHZpZXdWYWx1ZS5vcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmIHRoaXMuY2hhcnQub3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3BhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAxfXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2NoYXJ0anMnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdmlldzogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiRmxhdHBpY2tyQ29udHJvbGxlciIsIkZpbGVJbnB1dENvbnRyb2xsZXIiLCJQYWdlUHJlbG9hZGVyQ29udHJvbGxlciIsInByb2ZpbGVNZW51Q29udHJvbGxlciIsIlRvb2x0aXBzQ29udHJvbGxlciIsIkNvbGxlY3Rpb25Gb3JtQ29udHJvbGxlciIsIlJhdGluZ1ZhbHVlQ29udHJvbGxlciIsImFwcCIsInJlZ2lzdGVyIiwiQ29udHJvbGxlciIsInR1cmJvX2NvbnRyb2xsZXIiLCJkZWZhdWx0IiwiYWNjZXNzQ29udHJvbCIsImVsZW1lbnRMaXN0IiwiZm9yRWFjaCIsIl9yZWYiLCJpbmRleCIsImVsZW1lbnQiLCJkZXNjcmlwdGlvbiIsIk5vZGVMaXN0IiwibGVuZ3RoIiwiZXJyb3JNc2ciLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInNlbGVjdCIsImNzc1NlbGVjdG9yIiwiYWxsIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidHJpbSIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxiYWNrIiwic2VsZWN0RWwiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNjcm9sbCIsInRhcmdldCIsInNjcm9sbFRvRWxlbWVudCIsInNldFRpbWVvdXQiLCJuYXZiYXIiLCJvZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFkiLCJiZWhhdmlvciIsImRlZmF1bHRfMSIsImNvbm5lY3QiLCJjb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0IiwiaXRlbSIsImFkZERlbGV0ZUxpbmsiLCJhZGRDb2xsZWN0aW9uRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJwcm90b3R5cGVWYWx1ZSIsInJlcGxhY2UiLCJpbmRleFZhbHVlIiwidG9TdHJpbmciLCJhcHBlbmRDaGlsZCIsInJlbW92ZUZvcm1CdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJ0cmFzaEljb25FbGVtZW50IiwidHJhc2hJY29uSFRNTCIsImdldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsInRhcmdldHMiLCJ2YWx1ZXMiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJTdHJpbmciLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9ycyIsInRyaWdnZXJTZWxlY3RvciIsImZpbGVJbnB1dFNlbGVjdG9yIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaGFuZGxlVHJpZ2dlckNsaWNrIiwiYmluZCIsImV2ZW50IiwiZmlsZUlucHV0IiwiY2xpY2siLCJmbGF0cGlja3IiLCJGcmVuY2giLCJtb2RlIiwib3B0aW9ucyIsImdldEZsYXRwaWNrck9wdGlvbnMiLCJkYXRlSW5wdXRUYXJnZXRzIiwiaW5wdXQiLCJsb2NhbGUiLCJwb3NpdGlvbiIsImFsbG93SW5wdXQiLCJhbHRJbnB1dCIsImRhdGVGb3JtYXQiLCJ0b2RheSIsIkRhdGUiLCJtaW5EYXRlIiwiZGVmYXVsdERhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYWx0Rm9ybWF0IiwibWF4RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZW5hYmxlVGltZSIsImRlZmF1bHRNaW5EYXRlIiwiZGVmYXVsdE1heERhdGUiLCJCYXNlQ29udHJvbGxlciIsImluaXRpYWxpemVkIiwicGFnZVByZWxvYWRlciIsInJlbW92ZVByZWxvYWRlciIsImxpc3RlblR1cmJvIiwidXNlckJ0blNlbGVjdG9yIiwidXNlckJ1dHRvbnMiLCJ1c2VyQnRuIiwiY3VycmVudFRhcmdldCIsInVwZGF0ZVZhbHVlIiwidmFsdWUiLCJyYW5nZVRhcmdldCIsIm91dHB1dFRhcmdldCIsInRleHRDb250ZW50IiwiVG9vbHRpcCIsInRvb2x0aXBzU2VsZWN0b3IiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJ0b29sdGlwVHJpZ2dlckVsIiwicmVnaXN0ZXJhYmxlcyIsIkNoYXJ0IiwiaXNDaGFydEluaXRpYWxpemVkIiwiY2hhcnQiLCJkaXNwYXRjaEV2ZW50IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJwYXlsb2FkIiwidmlld1ZhbHVlIiwiaXNBcnJheSIsImNvbmZpZyIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGlzY29ubmVjdCIsImRlc3Ryb3kiLCJ2aWV3VmFsdWVDaGFuZ2VkIiwiZGF0YSIsInVwZGF0ZSIsInBhcmVudEVsZW1lbnQiLCJyZXNwb25zaXZlIiwib3JpZ2luYWxXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm5hbWUiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInZpZXciLCJPYmplY3QiXSwic291cmNlUm9vdCI6IiJ9