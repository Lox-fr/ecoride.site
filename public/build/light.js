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
/* harmony import */ var _controllers_carpoolFilters_controller_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/carpoolFilters_controller.ts */ "./assets/controllers/carpoolFilters_controller.ts");









const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)();
app.register("flatpickr", _controllers_flatpickr_controller_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.register("fileInput", _controllers_fileInput_controller_ts__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.register("pagePreloader", _controllers_pagePreloader_controller_ts__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.register("profileMenu", _controllers_profileMenu_controller_ts__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.register("tooltips", _controllers_tooltips_controller_ts__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.register("collectionForm", _controllers_collectionForm_controller_ts__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.register("ratingValue", _controllers_ratingValue_controller_ts__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.register("carpoolFilters", _controllers_carpoolFilters_controller_ts__WEBPACK_IMPORTED_MODULE_8__["default"]);

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

/***/ "./assets/controllers/carpoolFilters_controller.ts":
/*!*********************************************************!*\
  !*** ./assets/controllers/carpoolFilters_controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_4__);




// @ts-ignore

class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_3__.Controller {
  constructor() {
    super(...arguments);
    this.isotopeInstances = {};
    this.filters = {};
  }
  connect() {
    // Initialize filters for today and following days
    this.filters = {
      filterCarpoolSearchResultsForToday: {},
      filterCarpoolSearchResultsForFollowingDays: {}
    };
    // Initialize Isotope for today grid if it exists
    const todayGrid = document.querySelector(".today-grid");
    if (todayGrid) {
      this.isotopeInstances["filterCarpoolSearchResultsForToday"] = new (isotope_layout__WEBPACK_IMPORTED_MODULE_4___default())(".today-grid", {
        itemSelector: ".card",
        layoutMode: "fitRows",
        getSortData: {
          price: "[data-price] parseInt",
          duration: "[data-duration] parseInt",
          rating: "[data-driver-rating] parseFloat",
          ecological: "[data-ecological]"
        }
      });
      // Add event listener to adjust card psotion if necessary after filtering
      this.isotopeInstances["filterCarpoolSearchResultsForToday"].on('arrangeComplete', () => {
        this.adjustCardPositionsIfNecessary("today-grid");
        this.refreshFilterButtonText('filterCarpoolSearchResultsForToday');
      });
      this.adjustCardPositionsIfNecessary("today-grid");
    }
    // Initialize Isotope for following days grid if it exists
    const followingDaysGrid = document.querySelector(".following-days-grid");
    if (followingDaysGrid) {
      const followingDaysSection = document.getElementById("carpoolSearchResultsForFollowingDays");
      if (followingDaysSection) {
        const isVisible = window.getComputedStyle(followingDaysSection).display !== "none";
        const initFollowingDaysIsotope = () => {
          if (!this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"]) {
            this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"] = new (isotope_layout__WEBPACK_IMPORTED_MODULE_4___default())(followingDaysGrid, {
              itemSelector: ".card",
              layoutMode: "fitRows",
              getSortData: {
                price: "[data-price] parseInt",
                duration: "[data-duration] parseInt",
                rating: "[data-driver-rating] parseFloat",
                ecological: "[data-ecological]"
              }
            });
            this.applyFilters("filterCarpoolSearchResultsForFollowingDays");
            // Add event listener to adjust card positions if necessary after filtering
            this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"].on('arrangeComplete', () => {
              this.adjustCardPositionsIfNecessary("following-days-grid");
              this.refreshFilterButtonText('filterCarpoolSearchResultsForFollowingDays');
            });
            this.adjustCardPositionsIfNecessary("following-days-grid");
          } else {
            this.isotopeInstances["filterCarpoolSearchResultsForFollowingDays"].arrange();
          }
        };
        if (isVisible) {
          // If the section is already visible, initialize Isotope immediately
          initFollowingDaysIsotope();
        } else {
          // else, wait for the section to be shown
          followingDaysSection.addEventListener("shown.bs.collapse", initFollowingDaysIsotope);
        }
      }
    }
  }
  applyFilters(groupId) {
    const currentFilters = this.filters[groupId];
    this.isotopeInstances[groupId].arrange({
      filter: itemElem => {
        const price = parseInt(itemElem.getAttribute("data-price") || "0");
        const duration = parseInt(itemElem.getAttribute("data-duration") || "0");
        const rating = parseFloat(itemElem.getAttribute("data-driver-rating") || "0");
        const ecological = itemElem.getAttribute("data-ecological") === "true";
        const priceMatch = currentFilters.price !== undefined ? price <= currentFilters.price : true;
        const durationMatch = currentFilters.duration !== undefined ? duration <= currentFilters.duration : true;
        const ratingMatch = currentFilters.rating !== undefined ? rating >= currentFilters.rating : true;
        const ecoMatch = currentFilters.eco ? ecological : true;
        return priceMatch && durationMatch && ratingMatch && ecoMatch;
      }
    });
  }
  toggleEco(event) {
    const button = event.currentTarget;
    const groupId = button.dataset.groupId;
    const isActive = button.classList.toggle("active");
    this.filters[groupId].eco = isActive;
    this.applyFilters(groupId);
  }
  filterByPrice(event) {
    const input = event.target;
    const groupId = input.dataset.groupId;
    this.filters[groupId].price = parseInt(input.value);
    document.querySelector(`#${groupId} #price-value`).textContent = input.value;
    this.applyFilters(groupId);
  }
  filterByDuration(event) {
    const input = event.target;
    const groupId = input.dataset.groupId;
    this.filters[groupId].duration = parseInt(input.value);
    document.querySelector(`#${groupId} #duration-value`).textContent = input.value;
    this.applyFilters(groupId);
  }
  filterByRating(event) {
    const input = event.target;
    const groupId = input.dataset.groupId;
    this.filters[groupId].rating = parseFloat(input.value);
    document.querySelector(`#${groupId} #rating-value`).textContent = input.value;
    this.applyFilters(groupId);
  }
  // Reset all filters to their default state
  reset(event) {
    const groupId = event.currentTarget.dataset.groupId;
    // Reset eco button
    const ecoButton = this.ecoButtonTarget;
    const ecoLabel = document.getElementById("eco-label");
    if (ecoLabel) {
      ecoButton.classList.remove('active');
      ecoLabel.textContent = "Seulement les trajets écologiques";
    }
    // Reset price filter
    const priceSlider = this.priceSliderTarget;
    const priceValue = document.getElementById("price-value");
    if (priceValue) {
      priceSlider.value = priceSlider.max;
      priceValue.textContent = priceSlider.max;
    }
    // Reset duration filter
    const durationSlider = this.durationSliderTarget;
    const durationValue = document.getElementById("duration-value");
    if (durationValue) {
      durationSlider.value = durationSlider.max;
      durationValue.textContent = durationSlider.max;
    }
    // Reset rating filter
    const ratingSlider = this.ratingSliderTarget;
    const ratingValue = document.getElementById("rating-value");
    if (ratingValue) {
      ratingSlider.value = ratingSlider.min;
      ratingValue.textContent = ratingSlider.min;
    }
    this.filters[groupId] = {};
    this.applyFilters(groupId);
  }
  refreshFilterButtonText(groupId) {
    const button = document.querySelector(`#${groupId}FilterButton`);
    // Check if all filters are in their default state
    const currentFilters = this.filters[groupId];
    const allFiltersDefault = currentFilters.price === undefined && currentFilters.duration === undefined && currentFilters.rating === undefined && currentFilters.eco === undefined;
    // Check how many cards are visible in the group after applying filters
    const grid = document.querySelector(`#${groupId}Grid`);
    const visibleItems = Array.from(grid ? grid.querySelectorAll('.card') : []).filter(item => {
      const computedStyle = window.getComputedStyle(item);
      return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
    });
    // If all filters are default, display "Filtrer les résultats"
    if (button) {
      if (allFiltersDefault) {
        button.innerHTML = "Filtrer les résultats";
      } else if (visibleItems.length === 0) {
        button.innerHTML = "Aucun résultat avec les filtres sélectionnés";
      } else {
        // Update the button text with the number of filtered results
        const resultCount = visibleItems.length;
        button.innerHTML = `${resultCount} résultats avec les filtres sélectionnés`;
      }
    }
  }
  adjustCardPositionsIfNecessary(gridId) {
    const screenWidth = window.innerWidth;
    const grid = document.querySelector(`.${gridId}`);
    const items = grid ? grid.querySelectorAll('.card') : [];
    const visibleItems = Array.from(items).filter(item => {
      const computedStyle = window.getComputedStyle(item);
      return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
    });
    visibleItems.forEach(item => {
      const element = item;
      if (screenWidth >= 618 && screenWidth <= 913 && visibleItems.length === 1 || screenWidth >= 914 && screenWidth <= 1399 && (visibleItems.length === 1 || visibleItems.length === 2) || screenWidth > 1399 && visibleItems.length >= 1 && visibleItems.length <= 3) {
        element.style.position = 'relative';
        element.style.left = '0px';
      } else {
        element.style.position = 'absolute';
      }
    });
  }
}
// Define targets for the HTML elements we will manipulate
default_1.targets = ["ecoButton", "priceSlider", "durationSlider", "ratingSlider", "reset"];
/* harmony default export */ __webpack_exports__["default"] = (default_1);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_dist_chunks_helpers_segment_js","vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-b1de81"], function() { return __webpack_exec__("./assets/scripts/light.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ0k7QUFDdEUsK0RBQWU7QUFDZixnQ0FBZ0MsOEVBQVk7QUFDNUMsbUNBQW1DLGtGQUFZO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDJEO0FBRVk7QUFDQTtBQUNRO0FBQ0o7QUFDTjtBQUNZO0FBQ047QUFDTTtBQUVsRixNQUFNUyxHQUFHLEdBQUdULDBFQUFnQixDQUFDLENBQUM7QUFFOUJTLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsRUFBRVQsNEVBQW1CLENBQUM7QUFDOUNRLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsRUFBRVIsNEVBQW1CLENBQUM7QUFDOUNPLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsRUFBRVAsZ0ZBQXVCLENBQUM7QUFDdERNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsRUFBRU4sOEVBQXFCLENBQUM7QUFDbERLLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsRUFBRUwsMkVBQWtCLENBQUM7QUFDNUNJLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixFQUFFSixpRkFBd0IsQ0FBQztBQUN4REcsR0FBRyxDQUFDQyxRQUFRLENBQUMsYUFBYSxFQUFFSCw4RUFBcUIsQ0FBQztBQUNsREUsR0FBRyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUVGLGlGQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BCL0I7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNENkI7QUFDdkI7QUFFekIsTUFBTUksZ0JBQWdCLFNBQVNELDBEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFMUM7Ozs7QUFJTSxTQUFVRyxhQUFhQSxDQUFDQyxXQUFnQztFQUMxREEsV0FBVyxDQUFDQyxPQUFPLENBQUMsQ0FBQUMsSUFBQSxFQUEyQkMsS0FBSyxLQUFJO0lBQUEsSUFBbkM7TUFBRUMsT0FBTztNQUFFQztJQUFXLENBQUUsR0FBQUgsSUFBQTtJQUN6QyxJQUFJLENBQUNFLE9BQU8sSUFBS0EsT0FBTyxZQUFZRSxRQUFRLElBQUlGLE9BQU8sQ0FBQ0csTUFBTSxLQUFLLENBQUUsRUFBRTtNQUNuRSxNQUFNQyxRQUFRLEdBQUcsZ0JBQWdCSCxXQUFXLGNBQWNGLEtBQUsseUJBQXlCO01BQ3hGTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsUUFBUSxDQUFDO01BQ3ZCLE1BQU0sSUFBSUcsS0FBSyxDQUFDSCxRQUFRLENBQUM7SUFDN0I7RUFDSixDQUFDLENBQUM7QUFDTjtBQUVBOzs7Ozs7QUFNTSxTQUFVSSxNQUFNQSxDQUNsQkMsV0FBbUIsRUFDQztFQUFBLElBQXBCQyxHQUFBLEdBQUFDLFNBQUEsQ0FBQVIsTUFBQSxRQUFBUSxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFlLEtBQUs7RUFFcEJGLFdBQVcsR0FBR0EsV0FBVyxDQUFDSSxJQUFJLEVBQUU7RUFDaEMsSUFBSUgsR0FBRyxFQUFFO0lBQ0wsT0FBT0ksS0FBSyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUlSLFdBQVcsQ0FBQyxDQUFDO0VBQ2hFLENBQUMsTUFBTTtJQUNILE1BQU1ULE9BQU8sR0FBR2dCLFFBQVEsQ0FBQ0UsYUFBYSxDQUFJVCxXQUFXLENBQUM7SUFDdEQsT0FBT1QsT0FBTyxHQUFHLENBQUNBLE9BQU8sQ0FBQyxHQUFHLEVBQUU7RUFDbkM7QUFDSjtBQUVBOzs7Ozs7O0FBT00sU0FBVW1CLEVBQUVBLENBQ2RDLFNBQWlCLEVBQ2pCWCxXQUFtQixFQUNuQlksUUFBZ0MsRUFDWjtFQUFBLElBQXBCWCxHQUFBLEdBQUFDLFNBQUEsQ0FBQVIsTUFBQSxRQUFBUSxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFlLEtBQUs7RUFFcEIsTUFBTVcsUUFBUSxHQUFHZCxNQUFNLENBQUlDLFdBQVcsRUFBRUMsR0FBRyxDQUFDO0VBQzVDZixhQUFhLENBQUMsQ0FDVjtJQUFFSyxPQUFPLEVBQUVzQixRQUFRO0lBQUVyQixXQUFXLEVBQUUsR0FBR1EsV0FBVztFQUFpQixDQUFFLENBQ3RFLENBQUM7RUFFRmEsUUFBUSxDQUFDekIsT0FBTyxDQUFFMEIsRUFBRSxJQUFLQSxFQUFFLENBQUNDLGdCQUFnQixDQUFDSixTQUFTLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFO0FBRUE7Ozs7O0FBS00sU0FBVUksUUFBUUEsQ0FDcEJDLE1BQWUsRUFDZkwsUUFBZ0M7RUFFaEMxQixhQUFhLENBQUMsQ0FBQztJQUFFSyxPQUFPLEVBQUUwQixNQUFNO0lBQUV6QixXQUFXLEVBQUU7RUFBaUIsQ0FBRSxDQUFDLENBQUM7RUFDcEV5QixNQUFNLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRUgsUUFBUSxDQUFDO0FBQy9DO0FBRUE7Ozs7QUFJTSxTQUFVTSxlQUFlQSxDQUFDM0IsT0FBZ0I7RUFDNUNMLGFBQWEsQ0FBQyxDQUFDO0lBQUVLLE9BQU8sRUFBRUEsT0FBTztJQUFFQyxXQUFXLEVBQUU7RUFBaUIsQ0FBRSxDQUFDLENBQUM7RUFFckUyQixVQUFVLENBQUMsTUFBSztJQUNaLE1BQU1DLE1BQU0sR0FBR3JCLE1BQU0sQ0FBYyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJc0IsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJRCxNQUFNLENBQUMxQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ25CMkIsTUFBTSxHQUFHRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNFLFlBQVk7SUFDbkM7SUFDQUMsTUFBTSxDQUFDQyxRQUFRLENBQUM7TUFDWkMsR0FBRyxFQUFFbEMsT0FBTyxDQUFDbUMscUJBQXFCLEVBQUUsQ0FBQ0QsR0FBRyxHQUFHRixNQUFNLENBQUNJLE9BQU8sR0FBR04sTUFBTTtNQUNsRU8sUUFBUSxFQUFFO0tBQ2IsQ0FBQztFQUNOLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRmdEO0FBQ2hEO0FBQ3FDO0FBRXJDLE1BQUFFLFNBQXFCLFNBQVEvQywwREFBVTtFQUF2Q2dELFlBQUE7O0lBV1ksS0FBQUMsZ0JBQWdCLEdBQStCLEVBQUU7SUFDakQsS0FBQUMsT0FBTyxHQUEyQixFQUFFO0VBc09oRDtFQTdOSUMsT0FBT0EsQ0FBQTtJQUNIO0lBQ0EsSUFBSSxDQUFDRCxPQUFPLEdBQUc7TUFDWEUsa0NBQWtDLEVBQUUsRUFBRTtNQUN0Q0MsMENBQTBDLEVBQUU7S0FDL0M7SUFFRDtJQUNBLE1BQU1DLFNBQVMsR0FBRzlCLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLGFBQWEsQ0FBQztJQUN2RCxJQUFJNEIsU0FBUyxFQUFFO01BQ1gsSUFBSSxDQUFDTCxnQkFBZ0IsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLElBQUlILHVEQUFPLENBQUMsYUFBYSxFQUFFO1FBQ3JGUyxZQUFZLEVBQUUsT0FBTztRQUNyQkMsVUFBVSxFQUFFLFNBQVM7UUFDckJDLFdBQVcsRUFBRTtVQUNUQyxLQUFLLEVBQUUsdUJBQXVCO1VBQzlCQyxRQUFRLEVBQUUsMEJBQTBCO1VBQ3BDQyxNQUFNLEVBQUUsaUNBQWlDO1VBQ3pDQyxVQUFVLEVBQUU7O09BRW5CLENBQUM7TUFDRjtNQUNBLElBQUksQ0FBQ1osZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQ3RCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxNQUFLO1FBQ25GLElBQUksQ0FBQ21DLDhCQUE4QixDQUFDLFlBQVksQ0FBQztRQUNqRCxJQUFJLENBQUNDLHVCQUF1QixDQUFDLG9DQUFvQyxDQUFDO01BQ3RFLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0QsOEJBQThCLENBQUMsWUFBWSxDQUFDO0lBQ3JEO0lBRUE7SUFDQSxNQUFNRSxpQkFBaUIsR0FBR3hDLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQ3hFLElBQUlzQyxpQkFBaUIsRUFBRTtNQUNuQixNQUFNQyxvQkFBb0IsR0FBR3pDLFFBQVEsQ0FBQzBDLGNBQWMsQ0FBQyxzQ0FBc0MsQ0FBQztNQUM1RixJQUFJRCxvQkFBb0IsRUFBRTtRQUN0QixNQUFNRSxTQUFTLEdBQUczQixNQUFNLENBQUM0QixnQkFBZ0IsQ0FBQ0gsb0JBQW9CLENBQUMsQ0FBQ0ksT0FBTyxLQUFLLE1BQU07UUFFbEYsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBSztVQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDckIsZ0JBQWdCLENBQUMsNENBQTRDLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUNBLGdCQUFnQixDQUFDLDRDQUE0QyxDQUFDLEdBQ25FLElBQUlILHVEQUFPLENBQUNrQixpQkFBaUIsRUFDN0I7Y0FDSVQsWUFBWSxFQUFFLE9BQU87Y0FDckJDLFVBQVUsRUFBRSxTQUFTO2NBQ3JCQyxXQUFXLEVBQUU7Z0JBQ1RDLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCQyxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQ0MsTUFBTSxFQUFFLGlDQUFpQztnQkFDekNDLFVBQVUsRUFBRTs7YUFFbkIsQ0FBQztZQUNGLElBQUksQ0FBQ1UsWUFBWSxDQUFDLDRDQUE0QyxDQUFDO1lBQy9EO1lBQ0EsSUFBSSxDQUFDdEIsZ0JBQWdCLENBQUMsNENBQTRDLENBQUMsQ0FBQ3RCLEVBQUUsQ0FBQyxpQkFBaUIsRUFDeEYsTUFBSztjQUNELElBQUksQ0FBQ21DLDhCQUE4QixDQUFDLHFCQUFxQixDQUFDO2NBQzFELElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsNENBQTRDLENBQUM7WUFDOUUsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDRCw4QkFBOEIsQ0FBQyxxQkFBcUIsQ0FBQztVQUM5RCxDQUFDLE1BQU07WUFDSCxJQUFJLENBQUNiLGdCQUFnQixDQUFDLDRDQUE0QyxDQUFDLENBQUN1QixPQUFPLEVBQUU7VUFDakY7UUFDSixDQUFDO1FBRUQsSUFBSUwsU0FBUyxFQUFFO1VBQ1g7VUFDQUcsd0JBQXdCLEVBQUU7UUFDOUIsQ0FBQyxNQUFNO1VBQ0g7VUFDQUwsb0JBQW9CLENBQUNqQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRXNDLHdCQUF3QixDQUFDO1FBQ3hGO01BQ0o7SUFDSjtFQUNKO0VBRUFDLFlBQVlBLENBQUNFLE9BQWU7SUFDeEIsTUFBTUMsY0FBYyxHQUFHLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ3VCLE9BQU8sQ0FBQztJQUU1QyxJQUFJLENBQUN4QixnQkFBZ0IsQ0FBQ3dCLE9BQU8sQ0FBQyxDQUFDRCxPQUFPLENBQUM7TUFDbkNHLE1BQU0sRUFBR0MsUUFBaUIsSUFBSTtRQUMxQixNQUFNbEIsS0FBSyxHQUFHbUIsUUFBUSxDQUFDRCxRQUFRLENBQUNFLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEUsTUFBTW5CLFFBQVEsR0FBR2tCLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3hFLE1BQU1sQixNQUFNLEdBQUdtQixVQUFVLENBQUNILFFBQVEsQ0FBQ0UsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRyxDQUFDO1FBQzdFLE1BQU1qQixVQUFVLEdBQUdlLFFBQVEsQ0FBQ0UsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEtBQUssTUFBTTtRQUV0RSxNQUFNRSxVQUFVLEdBQ1pOLGNBQWMsQ0FBQ2hCLEtBQUssS0FBS3RDLFNBQVMsR0FBR3NDLEtBQUssSUFBSWdCLGNBQWMsQ0FBQ2hCLEtBQUssR0FBRyxJQUFJO1FBQzdFLE1BQU11QixhQUFhLEdBQ2ZQLGNBQWMsQ0FBQ2YsUUFBUSxLQUFLdkMsU0FBUyxHQUFHdUMsUUFBUSxJQUFJZSxjQUFjLENBQUNmLFFBQVEsR0FBRyxJQUFJO1FBQ3RGLE1BQU11QixXQUFXLEdBQ2JSLGNBQWMsQ0FBQ2QsTUFBTSxLQUFLeEMsU0FBUyxHQUFHd0MsTUFBTSxJQUFJYyxjQUFjLENBQUNkLE1BQU0sR0FBRyxJQUFJO1FBQ2hGLE1BQU11QixRQUFRLEdBQ1ZULGNBQWMsQ0FBQ1UsR0FBRyxHQUFHdkIsVUFBVSxHQUFHLElBQUk7UUFFMUMsT0FBT21CLFVBQVUsSUFBSUMsYUFBYSxJQUFJQyxXQUFXLElBQUlDLFFBQVE7TUFDakU7S0FDSCxDQUFDO0VBQ047RUFFQUUsU0FBU0EsQ0FBQ0MsS0FBWTtJQUNsQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsYUFBNEI7SUFDakQsTUFBTWYsT0FBTyxHQUFHYyxNQUFNLENBQUNFLE9BQU8sQ0FBQ2hCLE9BQVE7SUFDdkMsTUFBTWlCLFFBQVEsR0FBR0gsTUFBTSxDQUFDSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEQsSUFBSSxDQUFDMUMsT0FBTyxDQUFDdUIsT0FBTyxDQUFDLENBQUNXLEdBQUcsR0FBR00sUUFBUTtJQUNwQyxJQUFJLENBQUNuQixZQUFZLENBQUNFLE9BQU8sQ0FBQztFQUM5QjtFQUVBb0IsYUFBYUEsQ0FBQ1AsS0FBWTtJQUN0QixNQUFNUSxLQUFLLEdBQUdSLEtBQUssQ0FBQ3BELE1BQTBCO0lBQzlDLE1BQU11QyxPQUFPLEdBQUdxQixLQUFLLENBQUNMLE9BQU8sQ0FBQ2hCLE9BQVE7SUFDdEMsSUFBSSxDQUFDdkIsT0FBTyxDQUFDdUIsT0FBTyxDQUFDLENBQUNmLEtBQUssR0FBR21CLFFBQVEsQ0FBQ2lCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO0lBQ25EdkUsUUFBUSxDQUFDRSxhQUFhLENBQUMsSUFBSStDLE9BQU8sZUFBZSxDQUFFLENBQUN1QixXQUFXLEdBQUdGLEtBQUssQ0FBQ0MsS0FBSztJQUM3RSxJQUFJLENBQUN4QixZQUFZLENBQUNFLE9BQU8sQ0FBQztFQUM5QjtFQUVBd0IsZ0JBQWdCQSxDQUFDWCxLQUFZO0lBQ3pCLE1BQU1RLEtBQUssR0FBR1IsS0FBSyxDQUFDcEQsTUFBMEI7SUFDOUMsTUFBTXVDLE9BQU8sR0FBR3FCLEtBQUssQ0FBQ0wsT0FBTyxDQUFDaEIsT0FBUTtJQUN0QyxJQUFJLENBQUN2QixPQUFPLENBQUN1QixPQUFPLENBQUMsQ0FBQ2QsUUFBUSxHQUFHa0IsUUFBUSxDQUFDaUIsS0FBSyxDQUFDQyxLQUFLLENBQUM7SUFDdER2RSxRQUFRLENBQUNFLGFBQWEsQ0FBQyxJQUFJK0MsT0FBTyxrQkFBa0IsQ0FBRSxDQUFDdUIsV0FBVyxHQUFHRixLQUFLLENBQUNDLEtBQUs7SUFDaEYsSUFBSSxDQUFDeEIsWUFBWSxDQUFDRSxPQUFPLENBQUM7RUFDOUI7RUFFQXlCLGNBQWNBLENBQUNaLEtBQVk7SUFDdkIsTUFBTVEsS0FBSyxHQUFHUixLQUFLLENBQUNwRCxNQUEwQjtJQUM5QyxNQUFNdUMsT0FBTyxHQUFHcUIsS0FBSyxDQUFDTCxPQUFPLENBQUNoQixPQUFRO0lBQ3RDLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDYixNQUFNLEdBQUdtQixVQUFVLENBQUNlLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO0lBQ3REdkUsUUFBUSxDQUFDRSxhQUFhLENBQUMsSUFBSStDLE9BQU8sZ0JBQWdCLENBQUUsQ0FBQ3VCLFdBQVcsR0FBR0YsS0FBSyxDQUFDQyxLQUFLO0lBQzlFLElBQUksQ0FBQ3hCLFlBQVksQ0FBQ0UsT0FBTyxDQUFDO0VBQzlCO0VBRUE7RUFDQTBCLEtBQUtBLENBQUNiLEtBQVk7SUFDZCxNQUFNYixPQUFPLEdBQUlhLEtBQUssQ0FBQ0UsYUFBNkIsQ0FBQ0MsT0FBTyxDQUFDaEIsT0FBUTtJQUVyRTtJQUNBLE1BQU0yQixTQUFTLEdBQUcsSUFBSSxDQUFDQyxlQUFlO0lBQ3RDLE1BQU1DLFFBQVEsR0FBRzlFLFFBQVEsQ0FBQzBDLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDckQsSUFBSW9DLFFBQVEsRUFBRTtNQUNWRixTQUFTLENBQUNULFNBQVMsQ0FBQ1ksTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNwQ0QsUUFBUSxDQUFDTixXQUFXLEdBQUcsbUNBQW1DO0lBQzlEO0lBRUE7SUFDQSxNQUFNUSxXQUFXLEdBQUcsSUFBSSxDQUFDQyxpQkFBcUM7SUFDOUQsTUFBTUMsVUFBVSxHQUFHbEYsUUFBUSxDQUFDMEMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN6RCxJQUFJd0MsVUFBVSxFQUFFO01BQ1pGLFdBQVcsQ0FBQ1QsS0FBSyxHQUFHUyxXQUFXLENBQUNHLEdBQUc7TUFDbkNELFVBQVUsQ0FBQ1YsV0FBVyxHQUFHUSxXQUFXLENBQUNHLEdBQUc7SUFDNUM7SUFFQTtJQUNBLE1BQU1DLGNBQWMsR0FBRyxJQUFJLENBQUNDLG9CQUF3QztJQUNwRSxNQUFNQyxhQUFhLEdBQUd0RixRQUFRLENBQUMwQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7SUFDL0QsSUFBSTRDLGFBQWEsRUFBRTtNQUNmRixjQUFjLENBQUNiLEtBQUssR0FBR2EsY0FBYyxDQUFDRCxHQUFHO01BQ3pDRyxhQUFhLENBQUNkLFdBQVcsR0FBR1ksY0FBYyxDQUFDRCxHQUFHO0lBQ2xEO0lBRUE7SUFDQSxNQUFNSSxZQUFZLEdBQUcsSUFBSSxDQUFDQyxrQkFBc0M7SUFDaEUsTUFBTUMsV0FBVyxHQUFHekYsUUFBUSxDQUFDMEMsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUMzRCxJQUFJK0MsV0FBVyxFQUFFO01BQ2JGLFlBQVksQ0FBQ2hCLEtBQUssR0FBR2dCLFlBQVksQ0FBQ0csR0FBRztNQUNyQ0QsV0FBVyxDQUFDakIsV0FBVyxHQUFHZSxZQUFZLENBQUNHLEdBQUc7SUFDOUM7SUFFQSxJQUFJLENBQUNoRSxPQUFPLENBQUN1QixPQUFPLENBQUMsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQ0YsWUFBWSxDQUFDRSxPQUFPLENBQUM7RUFDOUI7RUFFQVYsdUJBQXVCQSxDQUFDVSxPQUFlO0lBQ25DLE1BQU1jLE1BQU0sR0FBRy9ELFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLElBQUkrQyxPQUFPLGNBQWMsQ0FBZ0I7SUFDL0U7SUFDQSxNQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDeEIsT0FBTyxDQUFDdUIsT0FBTyxDQUFDO0lBQzVDLE1BQU0wQyxpQkFBaUIsR0FDbkJ6QyxjQUFjLENBQUNoQixLQUFLLEtBQUt0QyxTQUFTLElBQ2xDc0QsY0FBYyxDQUFDZixRQUFRLEtBQUt2QyxTQUFTLElBQ3JDc0QsY0FBYyxDQUFDZCxNQUFNLEtBQUt4QyxTQUFTLElBQ25Dc0QsY0FBYyxDQUFDVSxHQUFHLEtBQUtoRSxTQUMxQjtJQUNEO0lBQ0EsTUFBTWdHLElBQUksR0FBRzVGLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLElBQUkrQyxPQUFPLE1BQU0sQ0FBZ0I7SUFDckUsTUFBTTRDLFlBQVksR0FBRy9GLEtBQUssQ0FBQ0MsSUFBSSxDQUFDNkYsSUFBSSxHQUFHQSxJQUFJLENBQUMzRixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQ2tELE1BQU0sQ0FBQzJDLElBQUksSUFBRztNQUN0RixNQUFNQyxhQUFhLEdBQUcvRSxNQUFNLENBQUM0QixnQkFBZ0IsQ0FBQ2tELElBQW1CLENBQUM7TUFDbEUsT0FBT0MsYUFBYSxDQUFDbEQsT0FBTyxLQUFLLE1BQU0sSUFBSWtELGFBQWEsQ0FBQ0MsVUFBVSxLQUFLLFFBQVE7SUFDcEYsQ0FBQyxDQUFDO0lBQ0Y7SUFDQSxJQUFJakMsTUFBTSxFQUFFO01BQ1IsSUFBSTRCLGlCQUFpQixFQUFFO1FBQ25CNUIsTUFBTSxDQUFDa0MsU0FBUyxHQUFHLHVCQUF1QjtNQUM5QyxDQUFDLE1BQU0sSUFBSUosWUFBWSxDQUFDMUcsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQzRFLE1BQU0sQ0FBQ2tDLFNBQVMsR0FBRyw4Q0FBOEM7TUFDckUsQ0FBQyxNQUFNO1FBQ0g7UUFDQSxNQUFNQyxXQUFXLEdBQUdMLFlBQVksQ0FBQzFHLE1BQU07UUFDdkM0RSxNQUFNLENBQUNrQyxTQUFTLEdBQUcsR0FBR0MsV0FBVywwQ0FBMEM7TUFDL0U7SUFDSjtFQUNKO0VBRUE1RCw4QkFBOEJBLENBQUM2RCxNQUFjO0lBQ3pDLE1BQU1DLFdBQVcsR0FBR3BGLE1BQU0sQ0FBQ3FGLFVBQVU7SUFDckMsTUFBTVQsSUFBSSxHQUFHNUYsUUFBUSxDQUFDRSxhQUFhLENBQUMsSUFBSWlHLE1BQU0sRUFBRSxDQUFDO0lBQ2pELE1BQU1HLEtBQUssR0FBR1YsSUFBSSxHQUFHQSxJQUFJLENBQUMzRixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO0lBQ3hELE1BQU00RixZQUFZLEdBQUcvRixLQUFLLENBQUNDLElBQUksQ0FBQ3VHLEtBQUssQ0FBQyxDQUFDbkQsTUFBTSxDQUFDMkMsSUFBSSxJQUFHO01BQ2pELE1BQU1DLGFBQWEsR0FBRy9FLE1BQU0sQ0FBQzRCLGdCQUFnQixDQUFDa0QsSUFBbUIsQ0FBQztNQUNsRSxPQUFPQyxhQUFhLENBQUNsRCxPQUFPLEtBQUssTUFBTSxJQUFJa0QsYUFBYSxDQUFDQyxVQUFVLEtBQUssUUFBUTtJQUNwRixDQUFDLENBQUM7SUFFRkgsWUFBWSxDQUFDaEgsT0FBTyxDQUFFaUgsSUFBSSxJQUFJO01BQzFCLE1BQU05RyxPQUFPLEdBQUc4RyxJQUFtQjtNQUNuQyxJQUFJTSxXQUFXLElBQUksR0FBRyxJQUFJQSxXQUFXLElBQUksR0FBRyxJQUFJUCxZQUFZLENBQUMxRyxNQUFNLEtBQUssQ0FBQyxJQUNyRWlILFdBQVcsSUFBSSxHQUFHLElBQUlBLFdBQVcsSUFBSSxJQUFJLEtBQUtQLFlBQVksQ0FBQzFHLE1BQU0sS0FBSyxDQUFDLElBQUkwRyxZQUFZLENBQUMxRyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQ3JHaUgsV0FBVyxHQUFHLElBQUksSUFBS1AsWUFBWSxDQUFDMUcsTUFBTSxJQUFJLENBQUMsSUFBSTBHLFlBQVksQ0FBQzFHLE1BQU0sSUFBSSxDQUFFLEVBQzlFO1FBQ0VILE9BQU8sQ0FBQ3VILEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFVBQVU7UUFDbkN4SCxPQUFPLENBQUN1SCxLQUFLLENBQUNFLElBQUksR0FBRyxLQUFLO01BQzlCLENBQUMsTUFBTTtRQUNIekgsT0FBTyxDQUFDdUgsS0FBSyxDQUFDQyxRQUFRLEdBQUcsVUFBVTtNQUN2QztJQUNKLENBQUMsQ0FBQztFQUNOOztBQS9PQTtBQUNPakYsU0FBQSxDQUFBbUYsT0FBTyxHQUFHLENBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLE9BQU8sQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUVoRCxNQUFBbkYsU0FBcUIsU0FBUS9DLDBEQUFVO0VBWW5DbUQsT0FBT0EsQ0FBQTtJQUNILElBQUksQ0FBQ2dGLHlCQUF5QixDQUN6QjFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUN0QnBCLE9BQU8sQ0FBRWlILElBQUksSUFBSyxJQUFJLENBQUNjLGFBQWEsQ0FBQ2QsSUFBbUIsQ0FBQyxDQUFDO0VBQ25FO0VBRUFlLG9CQUFvQkEsQ0FBQTtJQUNoQixNQUFNZixJQUFJLEdBQUc5RixRQUFRLENBQUM4RyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDaEIsSUFBSSxDQUFDM0IsU0FBUyxDQUFDNEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQ3BDakIsSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDZSxjQUFjLENBQUNDLE9BQU8sQ0FDeEMsV0FBVyxFQUNYLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxRQUFRLEVBQUUsQ0FDN0I7SUFDRCxJQUFJLENBQUNSLHlCQUF5QixDQUFDUyxXQUFXLENBQUN0QixJQUFJLENBQUM7SUFDaEQsSUFBSSxDQUFDYyxhQUFhLENBQUNkLElBQUksQ0FBQztJQUN4QixJQUFJLENBQUNvQixVQUFVLEVBQUU7RUFDckI7RUFFUU4sYUFBYUEsQ0FBQ2QsSUFBaUI7SUFDbkMsTUFBTXVCLGdCQUFnQixHQUFHckgsUUFBUSxDQUFDOEcsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6RE8sZ0JBQWdCLENBQUNsRCxTQUFTLENBQUM0QyxHQUFHLENBQUMsMEJBQTBCLENBQUM7SUFDMURNLGdCQUFnQixDQUFDQyxZQUFZLENBQUMsWUFBWSxFQUFFLHVCQUF1QixDQUFDO0lBQ3BFRCxnQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDL0MsTUFBTUMsZ0JBQWdCLEdBQUd2SCxRQUFRLENBQUNFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUVwRSxJQUFJcUgsZ0JBQWdCLEVBQUU7TUFDbEIsTUFBTUMsYUFBYSxHQUFHRCxnQkFBZ0IsQ0FBQ2pFLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztNQUN0RSxJQUFJa0UsYUFBYSxFQUFFO1FBQ2ZILGdCQUFnQixDQUFDcEIsU0FBUyxHQUFHdUIsYUFBYTtNQUM5QztJQUNKLENBQUMsTUFBTTtNQUNISCxnQkFBZ0IsQ0FBQ0ksU0FBUyxHQUFHLHVCQUF1QjtJQUN4RDtJQUVBM0IsSUFBSSxDQUFDc0IsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQztJQUVsQ0EsZ0JBQWdCLENBQUM3RyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdrSCxDQUFRLElBQUk7TUFDcERBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCN0IsSUFBSSxDQUFDZixNQUFNLEVBQUU7SUFDakIsQ0FBQyxDQUFDO0VBQ047O0FBbkRPeEQsU0FBQSxDQUFBbUYsT0FBTyxHQUFHLENBQUMscUJBQXFCLENBQUM7QUFFakNuRixTQUFBLENBQUFxRyxNQUFNLEdBQUc7RUFDWjdJLEtBQUssRUFBRThJLE1BQU07RUFDYkMsU0FBUyxFQUFFQztDQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjJDO0FBUWhEO0FBQ0EsK0RBQWMsY0FBZXZKLDBEQUFVO0VBQXZDZ0QsWUFBQTs7SUFDSTtJQUNBLEtBQUF3RyxTQUFTLEdBQWM7TUFDbkJDLGVBQWUsRUFBRSxxQkFBcUI7TUFDdENDLGlCQUFpQixFQUFFO0tBQ3RCO0VBbUNMO0VBakNJO0VBQ0F2RyxPQUFPQSxDQUFBO0lBQ0g7SUFDQSxNQUFNd0csUUFBUSxHQUFHLElBQUksQ0FBQ25KLE9BQU8sQ0FBQ2lCLGdCQUFnQixDQUMxQyxJQUFJLENBQUMrSCxTQUFTLENBQUNDLGVBQWUsQ0FDakM7SUFFRDtJQUNBRSxRQUFRLENBQUN0SixPQUFPLENBQUV1SixPQUFPLElBQUk7TUFDekJBLE9BQU8sQ0FBQzVILGdCQUFnQixDQUNwQixPQUFPLEVBQ1AsSUFBSSxDQUFDNkgsa0JBQWtCLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDckM7SUFDTCxDQUFDLENBQUM7RUFDTjtFQUVBO0VBQ0FELGtCQUFrQkEsQ0FBQ3ZFLEtBQVk7SUFDM0JBLEtBQUssQ0FBQzZELGNBQWMsRUFBRTtJQUV0QjtJQUNBLE1BQU1ZLFNBQVMsR0FBRyxJQUFJLENBQUN2SixPQUFPLENBQUNrQixhQUFhLENBQ3hDLElBQUksQ0FBQzhILFNBQVMsQ0FBQ0UsaUJBQWlCLENBQ25DO0lBRUQsSUFBSUssU0FBUyxFQUFFO01BQ1hBLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3JCLENBQUMsTUFBTTtNQUNIbkosT0FBTyxDQUFDQyxLQUFLLENBQ1QsdUZBQXVGLENBQzFGO0lBQ0w7RUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7QUFDZDtBQUNpQjtBQUVuRCxNQUFBaUMsU0FBcUIsU0FBUS9DLDBEQUFVO0VBSW5DbUQsT0FBT0EsQ0FBQTtJQUNILE1BQU1nSCxJQUFJLEdBQ04sSUFBSSxDQUFDM0osT0FBTyxDQUFDc0UsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksU0FBUztJQUNqRSxNQUFNc0YsT0FBTyxHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNGLElBQUksQ0FBQztJQUU5QztJQUNBLElBQUksQ0FBQ0csZ0JBQWdCLENBQUNqSyxPQUFPLENBQUV5RixLQUFLLElBQUk7TUFDcENtRSxxREFBUyxDQUFDbkUsS0FBSyxFQUFFO1FBQ2J5RSxNQUFNLEVBQUVMLDZEQUFNO1FBQ2RsQyxRQUFRLEVBQUUsY0FBYztRQUN4QndDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxVQUFVLEVBQUUsYUFBYTtRQUN6QixHQUFHTjtPQUNOLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBOzs7Ozs7RUFNUUMsbUJBQW1CQSxDQUFDRixJQUFZO0lBQ3BDLE1BQU1RLEtBQUssR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFFeEIsSUFBSVQsSUFBSSxLQUFLLFlBQVksRUFBRTtNQUN2QixPQUFPO1FBQ0hVLE9BQU8sRUFBRUYsS0FBSztRQUNkRyxXQUFXLEVBQUVILEtBQUssQ0FBQ0ksV0FBVyxFQUFFLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUNDLFNBQVMsRUFBRTtPQUNkO0lBQ0wsQ0FBQyxNQUFNLElBQUlkLElBQUksS0FBSyw4QkFBOEIsRUFBRTtNQUNoRCxNQUFNZSxPQUFPLEdBQUcsSUFBSU4sSUFBSSxDQUFDRCxLQUFLLENBQUNRLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFBRVIsS0FBSyxDQUFDUyxRQUFRLEVBQUUsRUFBRVQsS0FBSyxDQUFDVSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFFeEYsT0FBTztRQUNIQyxVQUFVLEVBQUUsSUFBSTtRQUNoQlQsT0FBTyxFQUFFRixLQUFLO1FBQ2RPLE9BQU8sRUFBRUEsT0FBTztRQUNoQkQsU0FBUyxFQUFFO09BQ2Q7SUFDTCxDQUFDLE1BQU0sSUFBSWQsSUFBSSxLQUFLLFlBQVksRUFBRTtNQUM5QixPQUFPO1FBQ0hlLE9BQU8sRUFDSCxJQUFJLENBQUMxSyxPQUFPLENBQUNzRSxZQUFZLENBQUMseUJBQXlCLENBQUMsSUFDcEQ2RixLQUFLLENBQUNJLFdBQVcsRUFBRSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDQyxTQUFTLEVBQUU7T0FDZDtJQUNMLENBQUMsTUFBTSxJQUFJZCxJQUFJLEtBQUssYUFBYSxFQUFFO01BQy9CLE1BQU1vQixjQUFjLEdBQUcsSUFBSVgsSUFBSSxDQUFDRCxLQUFLLENBQUNRLFdBQVcsRUFBRSxHQUFHLEdBQUcsRUFBRVIsS0FBSyxDQUFDUyxRQUFRLEVBQUUsRUFBRVQsS0FBSyxDQUFDVSxPQUFPLEVBQUUsQ0FBQztNQUM3RixNQUFNRyxjQUFjLEdBQUcsSUFBSVosSUFBSSxDQUFDRCxLQUFLLENBQUNRLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRVIsS0FBSyxDQUFDUyxRQUFRLEVBQUUsRUFBRVQsS0FBSyxDQUFDVSxPQUFPLEVBQUUsQ0FBQztNQUU1RixPQUFPO1FBQ0hSLE9BQU8sRUFDSCxJQUFJLENBQUNySyxPQUFPLENBQUNzRSxZQUFZLENBQUMseUJBQXlCLENBQUMsSUFDcER5RyxjQUFjLENBQUNSLFdBQVcsRUFBRSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDRSxPQUFPLEVBQ0gsSUFBSSxDQUFDMUssT0FBTyxDQUFDc0UsWUFBWSxDQUFDLHlCQUF5QixDQUFDLElBQ3BEMEcsY0FBYyxDQUFDVCxXQUFXLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5Q0MsU0FBUyxFQUFFO09BQ2Q7SUFDTCxDQUFDLE1BQU07TUFDSCxPQUFPO1FBQ0g7UUFDQUosT0FBTyxFQUFFLElBQUksQ0FBQ3JLLE9BQU8sQ0FBQ3NFLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJNkYsS0FBSztRQUN0RUcsV0FBVyxFQUFFLElBQUksQ0FBQ3RLLE9BQU8sQ0FBQ3NFLFlBQVksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJNkYsS0FBSztRQUM5RU0sU0FBUyxFQUFFO09BQ2Q7SUFDTDtFQUNKOztBQXpFT2xJLFNBQUEsQ0FBQW1GLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNMYztBQUNkO0FBRWxDLE1BQU11RCxjQUFlLFNBQVF6TCwwREFBVTtBQUM1QnlMLGNBQUEsQ0FBQUMsV0FBVyxHQUFZLEtBQUs7QUFPdkMsK0RBQWMsY0FBZUQsY0FBYztFQUEzQ3pJLFlBQUE7O0lBQ0ksS0FBQXdHLFNBQVMsR0FBYztNQUNuQm1DLGFBQWEsRUFBRTtLQUNsQjtFQTBCTDtFQXhCSXhJLE9BQU9BLENBQUE7SUFDSCxJQUFJLENBQUN5SSxlQUFlLEVBQUU7SUFFdEIsSUFBSSxDQUFDSCxjQUFjLENBQUNDLFdBQVcsRUFBRTtNQUM3QixJQUFJLENBQUNHLFdBQVcsRUFBRTtNQUNsQkosY0FBYyxDQUFDQyxXQUFXLEdBQUcsSUFBSTtJQUNyQztFQUNKO0VBRVFFLGVBQWVBLENBQUE7SUFDbkIsTUFBTUQsYUFBYSxHQUFHM0ssOENBQU0sQ0FDeEIsSUFBSSxDQUFDd0ksU0FBUyxDQUFDbUMsYUFBYSxFQUM1QixLQUFLLENBQ1I7SUFDRCxJQUFJQSxhQUFhLENBQUNoTCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzFCZ0wsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDcEYsTUFBTSxFQUFFO0lBQzdCO0VBQ0o7RUFFUXNGLFdBQVdBLENBQUE7SUFDZnJLLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQUs7TUFDekMsSUFBSSxDQUFDNEosZUFBZSxFQUFFO0lBQzFCLENBQUMsQ0FBQztFQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNEM7QUFDVjtBQU10QztBQUNBLCtEQUFjLGNBQWU1TCwwREFBVTtFQUF2Q2dELFlBQUE7O0lBQ0ksS0FBQXdHLFNBQVMsR0FBYztNQUNuQnNDLGVBQWUsRUFBRTtLQUNwQjtJQUVELEtBQUFDLFdBQVcsR0FBa0IsRUFBRTtFQTBCbkM7RUF4Qkk1SSxPQUFPQSxDQUFBO0lBQ0g7SUFDQSxJQUFJLENBQUM0SSxXQUFXLEdBQUcvSyw4Q0FBTSxDQUNyQixJQUFJLENBQUN3SSxTQUFTLENBQUNzQyxlQUFlLEVBQzlCLElBQUksQ0FDUDtJQUVEO0lBQ0FuSywwQ0FBRSxDQUNFLE9BQU8sRUFDUCxJQUFJLENBQUM2SCxTQUFTLENBQUNzQyxlQUFlLEVBQzdCNUMsQ0FBQyxJQUFJO01BQ0YsSUFBSSxDQUFDNkMsV0FBVyxDQUFDMUwsT0FBTyxDQUFFMkwsT0FBTyxJQUFJO1FBQ2pDO1FBQ0FBLE9BQU8sS0FBSzlDLENBQUMsQ0FBQzFELGFBQWEsSUFDM0J3RyxPQUFPLENBQUNsSCxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUs7UUFDdEM7UUFBQSxFQUNFa0gsT0FBTyxDQUFDaEMsS0FBSyxFQUFFLEdBQ2YsSUFBSTtNQUNkLENBQUMsQ0FBQztJQUNOLENBQUMsRUFDRCxJQUFJLENBQ1A7RUFDTDs7Ozs7Ozs7Ozs7OztBQ3RDNEM7QUFFaEQsTUFBQWpILFNBQXFCLFNBQVEvQywwREFBVTtFQU1uQ21ELE9BQU9BLENBQUE7SUFDSCxJQUFJLENBQUM4SSxXQUFXLEVBQUU7RUFDdEI7RUFFQUEsV0FBV0EsQ0FBQTtJQUNQLE1BQU1sRyxLQUFLLEdBQUcsSUFBSSxDQUFDbUcsV0FBVyxDQUFDbkcsS0FBSztJQUNwQyxJQUFJLENBQUNvRyxZQUFZLENBQUNuRyxXQUFXLEdBQUdELEtBQUs7RUFDekM7O0FBWk9oRCxTQUFBLENBQUFtRixPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUTtBQUNaO0FBQ0Y7QUFNbEMsK0RBQWMsY0FBZWxJLDBEQUFVO0VBQXZDZ0QsWUFBQTs7SUFDSSxLQUFBd0csU0FBUyxHQUFjO01BQ25CNkMsZ0JBQWdCLEVBQUU7S0FDckI7SUFFRCxLQUFBQyxrQkFBa0IsR0FBYyxFQUFFO0VBV3RDO0VBVEluSixPQUFPQSxDQUFBO0lBQ0gsSUFBSSxDQUFDbUosa0JBQWtCLEdBQUd0TCw4Q0FBTSxDQUM1QixJQUFJLENBQUN3SSxTQUFTLENBQUM2QyxnQkFBZ0IsRUFDL0IsSUFBSSxDQUNQO0lBQ0QsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2pNLE9BQU8sQ0FBRWtNLGdCQUFnQixJQUFJO01BQ2pELElBQUlILDhDQUFPLENBQUNHLGdCQUFnQixDQUFDO0lBQ2pDLENBQUMsQ0FBQztFQUNOOzs7Ozs7Ozs7Ozs7QUN2Qko7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0E7QUFFaEQsSUFBSUMsbURBQWEsRUFBRTtFQUNmQywyQ0FBSyxDQUFDMU0sUUFBUSxDQUFDLEdBQUd5TSxtREFBYSxDQUFDO0FBQ3BDO0FBQ0EsSUFBSUUsa0JBQWtCLEdBQUcsS0FBSztBQUM5QixNQUFNM0osU0FBUyxTQUFTL0MsMERBQVUsQ0FBQztFQUMvQmdELFdBQVdBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQyxHQUFHN0IsU0FBUyxDQUFDO0lBQ25CLElBQUksQ0FBQ3dMLEtBQUssR0FBRyxJQUFJO0VBQ3JCO0VBQ0F4SixPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUN1SixrQkFBa0IsRUFBRTtNQUNyQkEsa0JBQWtCLEdBQUcsSUFBSTtNQUN6QixJQUFJLENBQUNFLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDdkJILEtBQUtBLDZDQUFBQTtNQUNULENBQUMsQ0FBQztJQUNOO0lBQ0EsSUFBSSxFQUFFLElBQUksQ0FBQ2pNLE9BQU8sWUFBWXFNLGlCQUFpQixDQUFDLEVBQUU7TUFDOUMsTUFBTSxJQUFJOUwsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RDO0lBQ0EsTUFBTStMLE9BQU8sR0FBRyxJQUFJLENBQUNDLFNBQVM7SUFDOUIsSUFBSXpMLEtBQUssQ0FBQzBMLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLMEMsT0FBTyxDQUFDMUMsT0FBTyxDQUFDekosTUFBTSxFQUFFO01BQ2hFbU0sT0FBTyxDQUFDMUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN4QjtJQUNBLElBQUksQ0FBQ3dDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7TUFDOUJ4QyxPQUFPLEVBQUUwQyxPQUFPLENBQUMxQyxPQUFPO01BQ3hCNkMsTUFBTSxFQUFFSDtJQUNaLENBQUMsQ0FBQztJQUNGLE1BQU1JLGFBQWEsR0FBRyxJQUFJLENBQUMxTSxPQUFPLENBQUMyTSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25ELElBQUksQ0FBQ0QsYUFBYSxFQUFFO01BQ2hCLE1BQU0sSUFBSW5NLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztJQUMxRDtJQUNBLElBQUksQ0FBQzRMLEtBQUssR0FBRyxJQUFJRiwyQ0FBSyxDQUFDUyxhQUFhLEVBQUVKLE9BQU8sQ0FBQztJQUM5QyxJQUFJLENBQUNGLGFBQWEsQ0FBQyxTQUFTLEVBQUU7TUFBRUQsS0FBSyxFQUFFLElBQUksQ0FBQ0E7SUFBTSxDQUFDLENBQUM7RUFDeEQ7RUFDQVMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDUixhQUFhLENBQUMsWUFBWSxFQUFFO01BQUVELEtBQUssRUFBRSxJQUFJLENBQUNBO0lBQU0sQ0FBQyxDQUFDO0lBQ3ZELElBQUksSUFBSSxDQUFDQSxLQUFLLEVBQUU7TUFDWixJQUFJLENBQUNBLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLENBQUM7TUFDcEIsSUFBSSxDQUFDVixLQUFLLEdBQUcsSUFBSTtJQUNyQjtFQUNKO0VBQ0FXLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxJQUFJLENBQUNYLEtBQUssRUFBRTtNQUNaLE1BQU1JLFNBQVMsR0FBRztRQUFFUSxJQUFJLEVBQUUsSUFBSSxDQUFDUixTQUFTLENBQUNRLElBQUk7UUFBRW5ELE9BQU8sRUFBRSxJQUFJLENBQUMyQyxTQUFTLENBQUMzQztNQUFRLENBQUM7TUFDaEYsSUFBSTlJLEtBQUssQ0FBQzBMLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLMkMsU0FBUyxDQUFDM0MsT0FBTyxDQUFDekosTUFBTSxFQUFFO1FBQ3BFb00sU0FBUyxDQUFDM0MsT0FBTyxHQUFHLENBQUMsQ0FBQztNQUMxQjtNQUNBLElBQUksQ0FBQ3dDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRUcsU0FBUyxDQUFDO01BQ2xELElBQUksQ0FBQ0osS0FBSyxDQUFDWSxJQUFJLEdBQUdSLFNBQVMsQ0FBQ1EsSUFBSTtNQUNoQyxJQUFJLENBQUNaLEtBQUssQ0FBQ3ZDLE9BQU8sR0FBRzJDLFNBQVMsQ0FBQzNDLE9BQU87TUFDdEMsSUFBSSxDQUFDdUMsS0FBSyxDQUFDYSxNQUFNLENBQUMsQ0FBQztNQUNuQixNQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDak4sT0FBTyxDQUFDaU4sYUFBYTtNQUNoRCxJQUFJQSxhQUFhLElBQUksSUFBSSxDQUFDZCxLQUFLLENBQUN2QyxPQUFPLENBQUNzRCxVQUFVLEVBQUU7UUFDaEQsTUFBTUMsYUFBYSxHQUFHRixhQUFhLENBQUMxRixLQUFLLENBQUM2RixLQUFLO1FBQy9DSCxhQUFhLENBQUMxRixLQUFLLENBQUM2RixLQUFLLEdBQUcsR0FBR0gsYUFBYSxDQUFDSSxXQUFXLEdBQUcsQ0FBQyxJQUFJO1FBQ2hFekwsVUFBVSxDQUFDLE1BQU07VUFDYnFMLGFBQWEsQ0FBQzFGLEtBQUssQ0FBQzZGLEtBQUssR0FBR0QsYUFBYTtRQUM3QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1Q7SUFDSjtFQUNKO0VBQ0FmLGFBQWFBLENBQUNrQixJQUFJLEVBQUVoQixPQUFPLEVBQUU7SUFDekIsSUFBSSxDQUFDaUIsUUFBUSxDQUFDRCxJQUFJLEVBQUU7TUFBRUUsTUFBTSxFQUFFbEIsT0FBTztNQUFFbUIsTUFBTSxFQUFFO0lBQVUsQ0FBQyxDQUFDO0VBQy9EO0FBQ0o7QUFDQWxMLFNBQVMsQ0FBQ3FHLE1BQU0sR0FBRztFQUNmOEUsSUFBSSxFQUFFQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2xpZ2h0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL191dGlscy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2FycG9vbEZpbHRlcnNfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY29sbGVjdGlvbkZvcm1fY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsZUlucHV0X2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZsYXRwaWNrcl9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wYWdlUHJlbG9hZGVyX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Byb2ZpbGVNZW51X2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3JhdGluZ1ZhbHVlX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Rvb2x0aXBzX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9saWdodC9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWNoYXJ0anMvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tIFwiQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlXCI7XHJcblxyXG5pbXBvcnQgRmxhdHBpY2tyQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9mbGF0cGlja3JfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgRmlsZUlucHV0Q29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9maWxlSW5wdXRfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgUGFnZVByZWxvYWRlckNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvcGFnZVByZWxvYWRlcl9jb250cm9sbGVyLnRzXCI7XHJcbmltcG9ydCBwcm9maWxlTWVudUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvcHJvZmlsZU1lbnVfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgVG9vbHRpcHNDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3Rvb2x0aXBzX2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IENvbGxlY3Rpb25Gb3JtQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9jb2xsZWN0aW9uRm9ybV9jb250cm9sbGVyLnRzXCI7XHJcbmltcG9ydCBSYXRpbmdWYWx1ZUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvcmF0aW5nVmFsdWVfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgQ2FycG9vbEZpbHRlcnNDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL2NhcnBvb2xGaWx0ZXJzX2NvbnRyb2xsZXIudHNcIjtcclxuXHJcbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcclxuXHJcbmFwcC5yZWdpc3RlcihcImZsYXRwaWNrclwiLCBGbGF0cGlja3JDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwiZmlsZUlucHV0XCIsIEZpbGVJbnB1dENvbnRyb2xsZXIpO1xyXG5hcHAucmVnaXN0ZXIoXCJwYWdlUHJlbG9hZGVyXCIsIFBhZ2VQcmVsb2FkZXJDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwicHJvZmlsZU1lbnVcIiwgcHJvZmlsZU1lbnVDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwidG9vbHRpcHNcIiwgVG9vbHRpcHNDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwiY29sbGVjdGlvbkZvcm1cIiwgQ29sbGVjdGlvbkZvcm1Db250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwicmF0aW5nVmFsdWVcIiwgUmF0aW5nVmFsdWVDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwiY2FycG9vbEZpbHRlcnNcIiwgQ2FycG9vbEZpbHRlcnNDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IFwiLi4vYm9vdHN0cmFwLmpzXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2xpZ2h0L2luZGV4LnNjc3NcIjtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJ0eXBlIEVsZW1lbnREZXNjcmlwdG9yID0ge1xyXG4gICAgZWxlbWVudDogRWxlbWVudCB8IE5vZGVMaXN0T2Y8RWxlbWVudD4gfCBFbGVtZW50W10gfCBudWxsO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgdGhlIGFjY2Vzc2liaWxpdHkgb2YgZWxlbWVudHMgYW5kIHRocm93cyBhbiBlcnJvciBpZiBhbnkgcmVxdWlyZWQgZWxlbWVudCBpcyBtaXNzaW5nLlxyXG4gKiBAcGFyYW0gZWxlbWVudExpc3QgTGlzdCBvZiBlbGVtZW50cyBhbmQgdGhlaXIgZGVzY3JpcHRpb25zIHRvIHZhbGlkYXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjY2Vzc0NvbnRyb2woZWxlbWVudExpc3Q6IEVsZW1lbnREZXNjcmlwdG9yW10pOiB2b2lkIHtcclxuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKHsgZWxlbWVudCwgZGVzY3JpcHRpb24gfSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCAmJiBlbGVtZW50Lmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBgVGhlIGVsZW1lbnQgXCIke2Rlc2NyaXB0aW9ufVwiIGF0IGluZGV4ICR7aW5kZXh9IGlzIG1pc3Npbmcgb3IgaW52YWxpZC5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBzZWxlY3RvciBmdW5jdGlvbjogcmV0dXJucyBhbiBhcnJheSBvZiBET00gZWxlbWVudHMuXHJcbiAqIEBwYXJhbSBjc3NTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkuXHJcbiAqIEBwYXJhbSBhbGwgSWYgYHRydWVgLCByZXR1cm5zIGFsbCBtYXRjaGluZyBlbGVtZW50czsgb3RoZXJ3aXNlLCB3cmFwcyBhIHNpbmdsZSBtYXRjaGluZyBlbGVtZW50IGluIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBlbGVtZW50cyAoZW1wdHkgaWYgbm8gbWF0Y2ggaXMgZm91bmQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdDxUIGV4dGVuZHMgRWxlbWVudD4oXHJcbiAgICBjc3NTZWxlY3Rvcjogc3RyaW5nLFxyXG4gICAgYWxsOiBib29sZWFuID0gZmFsc2VcclxuKTogVFtdIHtcclxuICAgIGNzc1NlbGVjdG9yID0gY3NzU2VsZWN0b3IudHJpbSgpO1xyXG4gICAgaWYgKGFsbCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8VD4oY3NzU2VsZWN0b3IpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8VD4oY3NzU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50ID8gW2VsZW1lbnRdIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIG9uZSBvciBtb3JlIHNlbGVjdGVkIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0gZXZlbnRUeXBlIFR5cGUgb2YgZXZlbnQgKGUuZy4sIFwiY2xpY2tcIikuXHJcbiAqIEBwYXJhbSBjc3NTZWxlY3RvciBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRhcmdldCBlbGVtZW50KHMpLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiB0aGUgZXZlbnQuXHJcbiAqIEBwYXJhbSBhbGwgSWYgYHRydWVgLCBhcHBsaWVzIHRoZSBldmVudCBsaXN0ZW5lciB0byBhbGwgbWF0Y2hpbmcgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb248VCBleHRlbmRzIEVsZW1lbnQ+KFxyXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBjc3NTZWxlY3Rvcjogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQsXHJcbiAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdEVsID0gc2VsZWN0PFQ+KGNzc1NlbGVjdG9yLCBhbGwpO1xyXG4gICAgYWNjZXNzQ29udHJvbChbXHJcbiAgICAgICAgeyBlbGVtZW50OiBzZWxlY3RFbCwgZGVzY3JpcHRpb246IGAke2Nzc1NlbGVjdG9yfSAoQ1NTIHNlbGVjdG9yKWAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIHNlbGVjdEVsLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBcInNjcm9sbFwiIGV2ZW50IGxpc3RlbmVyIHRvIGEgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciB0by5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gc2Nyb2xsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2Nyb2xsKFxyXG4gICAgdGFyZ2V0OiBFbGVtZW50LFxyXG4gICAgY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWRcclxuKTogdm9pZCB7XHJcbiAgICBhY2Nlc3NDb250cm9sKFt7IGVsZW1lbnQ6IHRhcmdldCwgZGVzY3JpcHRpb246IFwib25TY3JvbGwgdGFyZ2V0XCIgfV0pO1xyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2FsbGJhY2spO1xyXG59XHJcblxyXG4vKipcclxuICogU21vb3RobHkgc2Nyb2xscyB0byBhIHRhcmdldCBlbGVtZW50LCBjb25zaWRlcmluZyB0aGUgb2Zmc2V0IGNhdXNlZCBieSBhIGZpeGVkIG5hdmJhci5cclxuICogQHBhcmFtIGVsZW1lbnQgVGFyZ2V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICBhY2Nlc3NDb250cm9sKFt7IGVsZW1lbnQ6IGVsZW1lbnQsIGRlc2NyaXB0aW9uOiBcInNjcm9sbFRvIHRhcmdldFwiIH1dKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBzZWxlY3Q8SFRNTEVsZW1lbnQ+KFwiI21haW5OYXZiYXJcIiwgZmFsc2UpOyAvLyBSZXRvdXJuZSB0b3Vqb3VycyB1biB0YWJsZWF1XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgaWYgKG5hdmJhci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IG5hdmJhclswXS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIG9mZnNldCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCA1MDApO1xyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IElzb3RvcGUgZnJvbSBcImlzb3RvcGUtbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG5cclxuICAgIC8vIERlZmluZSB0YXJnZXRzIGZvciB0aGUgSFRNTCBlbGVtZW50cyB3ZSB3aWxsIG1hbmlwdWxhdGVcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xyXG4gICAgICAgIFwiZWNvQnV0dG9uXCIsXHJcbiAgICAgICAgXCJwcmljZVNsaWRlclwiLFxyXG4gICAgICAgIFwiZHVyYXRpb25TbGlkZXJcIixcclxuICAgICAgICBcInJhdGluZ1NsaWRlclwiLFxyXG4gICAgICAgIFwicmVzZXRcIlxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGlzb3RvcGVJbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogSXNvdG9wZSB9ID0ge307XHJcbiAgICBwcml2YXRlIGZpbHRlcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIHRhcmdldCBwcm9wZXJ0aWVzXHJcbiAgICBlY29CdXR0b25UYXJnZXQhOiBIVE1MRWxlbWVudDtcclxuICAgIHByaWNlU2xpZGVyVGFyZ2V0ITogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGR1cmF0aW9uU2xpZGVyVGFyZ2V0ITogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJhdGluZ1NsaWRlclRhcmdldCE6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXNldFRhcmdldCE6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZvciB0b2RheSBhbmQgZm9sbG93aW5nIGRheXNcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yVG9kYXk6IHt9LFxyXG4gICAgICAgICAgICBmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXM6IHt9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgSXNvdG9wZSBmb3IgdG9kYXkgZ3JpZCBpZiBpdCBleGlzdHNcclxuICAgICAgICBjb25zdCB0b2RheUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWdyaWRcIik7XHJcbiAgICAgICAgaWYgKHRvZGF5R3JpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzb3RvcGVJbnN0YW5jZXNbXCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvclRvZGF5XCJdID0gbmV3IElzb3RvcGUoXCIudG9kYXktZ3JpZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6IFwiLmNhcmRcIixcclxuICAgICAgICAgICAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxyXG4gICAgICAgICAgICAgICAgZ2V0U29ydERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogXCJbZGF0YS1wcmljZV0gcGFyc2VJbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXCJbZGF0YS1kdXJhdGlvbl0gcGFyc2VJbnRcIixcclxuICAgICAgICAgICAgICAgICAgICByYXRpbmc6IFwiW2RhdGEtZHJpdmVyLXJhdGluZ10gcGFyc2VGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb2xvZ2ljYWw6IFwiW2RhdGEtZWNvbG9naWNhbF1cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWRqdXN0IGNhcmQgcHNvdGlvbiBpZiBuZWNlc3NhcnkgYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICAgICAgICAgIHRoaXMuaXNvdG9wZUluc3RhbmNlc1tcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yVG9kYXlcIl0ub24oJ2FycmFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FyZFBvc2l0aW9uc0lmTmVjZXNzYXJ5KFwidG9kYXktZ3JpZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEZpbHRlckJ1dHRvblRleHQoJ2ZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yVG9kYXknKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FyZFBvc2l0aW9uc0lmTmVjZXNzYXJ5KFwidG9kYXktZ3JpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgSXNvdG9wZSBmb3IgZm9sbG93aW5nIGRheXMgZ3JpZCBpZiBpdCBleGlzdHNcclxuICAgICAgICBjb25zdCBmb2xsb3dpbmdEYXlzR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93aW5nLWRheXMtZ3JpZFwiKTtcclxuICAgICAgICBpZiAoZm9sbG93aW5nRGF5c0dyaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9sbG93aW5nRGF5c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiKTtcclxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ0RheXNTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb2xsb3dpbmdEYXlzU2VjdGlvbikuZGlzcGxheSAhPT0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdEZvbGxvd2luZ0RheXNJc290b3BlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc290b3BlSW5zdGFuY2VzW1wiZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JGb2xsb3dpbmdEYXlzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wZUluc3RhbmNlc1tcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBJc290b3BlKGZvbGxvd2luZ0RheXNHcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6IFwiLmNhcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U29ydERhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogXCJbZGF0YS1wcmljZV0gcGFyc2VJbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXCJbZGF0YS1kdXJhdGlvbl0gcGFyc2VJbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc6IFwiW2RhdGEtZHJpdmVyLXJhdGluZ10gcGFyc2VGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVjb2xvZ2ljYWw6IFwiW2RhdGEtZWNvbG9naWNhbF1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVycyhcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGFkanVzdCBjYXJkIHBvc2l0aW9ucyBpZiBuZWNlc3NhcnkgYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wZUluc3RhbmNlc1tcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiXS5vbignYXJyYW5nZUNvbXBsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RDYXJkUG9zaXRpb25zSWZOZWNlc3NhcnkoXCJmb2xsb3dpbmctZGF5cy1ncmlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRmlsdGVyQnV0dG9uVGV4dCgnZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JGb2xsb3dpbmdEYXlzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzdENhcmRQb3NpdGlvbnNJZk5lY2Vzc2FyeShcImZvbGxvd2luZy1kYXlzLWdyaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc290b3BlSW5zdGFuY2VzW1wiZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JGb2xsb3dpbmdEYXlzXCJdLmFycmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VjdGlvbiBpcyBhbHJlYWR5IHZpc2libGUsIGluaXRpYWxpemUgSXNvdG9wZSBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRGb2xsb3dpbmdEYXlzSXNvdG9wZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCB3YWl0IGZvciB0aGUgc2VjdGlvbiB0byBiZSBzaG93blxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGxvd2luZ0RheXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93bi5icy5jb2xsYXBzZVwiLCBpbml0Rm9sbG93aW5nRGF5c0lzb3RvcGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVycyhncm91cElkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RmlsdGVycyA9IHRoaXMuZmlsdGVyc1tncm91cElkXTtcclxuXHJcbiAgICAgICAgdGhpcy5pc290b3BlSW5zdGFuY2VzW2dyb3VwSWRdLmFycmFuZ2Uoe1xyXG4gICAgICAgICAgICBmaWx0ZXI6IChpdGVtRWxlbTogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwYXJzZUludChpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaWNlXCIpIHx8IFwiMFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VJbnQoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1kdXJhdGlvblwiKSB8fCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmcgPSBwYXJzZUZsb2F0KGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZHJpdmVyLXJhdGluZ1wiKSB8fCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlY29sb2dpY2FsID0gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1lY29sb2dpY2FsXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZU1hdGNoID1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVycy5wcmljZSAhPT0gdW5kZWZpbmVkID8gcHJpY2UgPD0gY3VycmVudEZpbHRlcnMucHJpY2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb25NYXRjaCA9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDw9IGN1cnJlbnRGaWx0ZXJzLmR1cmF0aW9uIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdGluZ01hdGNoID1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVycy5yYXRpbmcgIT09IHVuZGVmaW5lZCA/IHJhdGluZyA+PSBjdXJyZW50RmlsdGVycy5yYXRpbmcgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWNvTWF0Y2ggPVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLmVjbyA/IGVjb2xvZ2ljYWwgOiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmljZU1hdGNoICYmIGR1cmF0aW9uTWF0Y2ggJiYgcmF0aW5nTWF0Y2ggJiYgZWNvTWF0Y2g7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRWNvKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBJZCA9IGJ1dHRvbi5kYXRhc2V0Lmdyb3VwSWQhO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzW2dyb3VwSWRdLmVjbyA9IGlzQWN0aXZlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKGdyb3VwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckJ5UHJpY2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBncm91cElkID0gaW5wdXQuZGF0YXNldC5ncm91cElkITtcclxuICAgICAgICB0aGlzLmZpbHRlcnNbZ3JvdXBJZF0ucHJpY2UgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z3JvdXBJZH0gI3ByaWNlLXZhbHVlYCkhLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoZ3JvdXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQnlEdXJhdGlvbihldmVudDogRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBpbnB1dC5kYXRhc2V0Lmdyb3VwSWQhO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyc1tncm91cElkXS5kdXJhdGlvbiA9IHBhcnNlSW50KGlucHV0LnZhbHVlKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtncm91cElkfSAjZHVyYXRpb24tdmFsdWVgKSEudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLmFwcGx5RmlsdGVycyhncm91cElkKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCeVJhdGluZyhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBpbnB1dC5kYXRhc2V0Lmdyb3VwSWQhO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyc1tncm91cElkXS5yYXRpbmcgPSBwYXJzZUZsb2F0KGlucHV0LnZhbHVlKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtncm91cElkfSAjcmF0aW5nLXZhbHVlYCkhLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoZ3JvdXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgYWxsIGZpbHRlcnMgdG8gdGhlaXIgZGVmYXVsdCBzdGF0ZVxyXG4gICAgcmVzZXQoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBJZCA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0Lmdyb3VwSWQhO1xyXG5cclxuICAgICAgICAvLyBSZXNldCBlY28gYnV0dG9uXHJcbiAgICAgICAgY29uc3QgZWNvQnV0dG9uID0gdGhpcy5lY29CdXR0b25UYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgZWNvTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjby1sYWJlbFwiKTtcclxuICAgICAgICBpZiAoZWNvTGFiZWwpIHtcclxuICAgICAgICAgICAgZWNvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBlY29MYWJlbC50ZXh0Q29udGVudCA9IFwiU2V1bGVtZW50IGxlcyB0cmFqZXRzIMOpY29sb2dpcXVlc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgcHJpY2UgZmlsdGVyXHJcbiAgICAgICAgY29uc3QgcHJpY2VTbGlkZXIgPSB0aGlzLnByaWNlU2xpZGVyVGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcHJpY2VWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2UtdmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHByaWNlVmFsdWUpIHtcclxuICAgICAgICAgICAgcHJpY2VTbGlkZXIudmFsdWUgPSBwcmljZVNsaWRlci5tYXg7XHJcbiAgICAgICAgICAgIHByaWNlVmFsdWUudGV4dENvbnRlbnQgPSBwcmljZVNsaWRlci5tYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCBkdXJhdGlvbiBmaWx0ZXJcclxuICAgICAgICBjb25zdCBkdXJhdGlvblNsaWRlciA9IHRoaXMuZHVyYXRpb25TbGlkZXJUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdXJhdGlvbi12YWx1ZVwiKTtcclxuICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICBkdXJhdGlvblNsaWRlci52YWx1ZSA9IGR1cmF0aW9uU2xpZGVyLm1heDtcclxuICAgICAgICAgICAgZHVyYXRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGR1cmF0aW9uU2xpZGVyLm1heDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHJhdGluZyBmaWx0ZXJcclxuICAgICAgICBjb25zdCByYXRpbmdTbGlkZXIgPSB0aGlzLnJhdGluZ1NsaWRlclRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHJhdGluZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmctdmFsdWVcIik7XHJcbiAgICAgICAgaWYgKHJhdGluZ1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJhdGluZ1NsaWRlci52YWx1ZSA9IHJhdGluZ1NsaWRlci5taW47XHJcbiAgICAgICAgICAgIHJhdGluZ1ZhbHVlLnRleHRDb250ZW50ID0gcmF0aW5nU2xpZGVyLm1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyc1tncm91cElkXSA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKGdyb3VwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hGaWx0ZXJCdXR0b25UZXh0KGdyb3VwSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dyb3VwSWR9RmlsdGVyQnV0dG9uYCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIGZpbHRlcnMgYXJlIGluIHRoZWlyIGRlZmF1bHQgc3RhdGVcclxuICAgICAgICBjb25zdCBjdXJyZW50RmlsdGVycyA9IHRoaXMuZmlsdGVyc1tncm91cElkXTtcclxuICAgICAgICBjb25zdCBhbGxGaWx0ZXJzRGVmYXVsdCA9IChcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMucHJpY2UgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycy5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLnJhdGluZyA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLmVjbyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBDaGVjayBob3cgbWFueSBjYXJkcyBhcmUgdmlzaWJsZSBpbiB0aGUgZ3JvdXAgYWZ0ZXIgYXBwbHlpbmcgZmlsdGVyc1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtncm91cElkfUdyaWRgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSBBcnJheS5mcm9tKGdyaWQgPyBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykgOiBbXSkuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaXRlbSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIElmIGFsbCBmaWx0ZXJzIGFyZSBkZWZhdWx0LCBkaXNwbGF5IFwiRmlsdHJlciBsZXMgcsOpc3VsdGF0c1wiXHJcbiAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAoYWxsRmlsdGVyc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkZpbHRyZXIgbGVzIHLDqXN1bHRhdHNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2aXNpYmxlSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBdWN1biByw6lzdWx0YXQgYXZlYyBsZXMgZmlsdHJlcyBzw6lsZWN0aW9ubsOpc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBidXR0b24gdGV4dCB3aXRoIHRoZSBudW1iZXIgb2YgZmlsdGVyZWQgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0Q291bnQgPSB2aXNpYmxlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGAke3Jlc3VsdENvdW50fSByw6lzdWx0YXRzIGF2ZWMgbGVzIGZpbHRyZXMgc8OpbGVjdGlvbm7DqXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkanVzdENhcmRQb3NpdGlvbnNJZk5lY2Vzc2FyeShncmlkSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dyaWRJZH1gKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGdyaWQgPyBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykgOiBbXTtcclxuICAgICAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSBBcnJheS5mcm9tKGl0ZW1zKS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtIGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZpc2libGVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVtIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoc2NyZWVuV2lkdGggPj0gNjE4ICYmIHNjcmVlbldpZHRoIDw9IDkxMyAmJiB2aXNpYmxlSXRlbXMubGVuZ3RoID09PSAxIHx8XHJcbiAgICAgICAgICAgICAgICBzY3JlZW5XaWR0aCA+PSA5MTQgJiYgc2NyZWVuV2lkdGggPD0gMTM5OSAmJiAodmlzaWJsZUl0ZW1zLmxlbmd0aCA9PT0gMSB8fCB2aXNpYmxlSXRlbXMubGVuZ3RoID09PSAyKSB8fFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuV2lkdGggPiAxMzk5ICYmICh2aXNpYmxlSXRlbXMubGVuZ3RoID49IDEgJiYgdmlzaWJsZUl0ZW1zLmxlbmd0aCA8PSAzKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJjb2xsZWN0aW9uQ29udGFpbmVyXCJdO1xyXG5cclxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XHJcbiAgICAgICAgaW5kZXg6IE51bWJlcixcclxuICAgICAgICBwcm90b3R5cGU6IFN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgZGVjbGFyZSBjb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIGRlY2xhcmUgaW5kZXhWYWx1ZTogbnVtYmVyO1xyXG4gICAgZGVjbGFyZSBwcm90b3R5cGVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuYWRkRGVsZXRlTGluayhpdGVtIGFzIEhUTUxFbGVtZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29sbGVjdGlvbkVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJjb2xsZWN0aW9uSXRlbVwiKTtcclxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IHRoaXMucHJvdG90eXBlVmFsdWUucmVwbGFjZShcclxuICAgICAgICAgICAgL19fbmFtZV9fL2csXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhWYWx1ZS50b1N0cmluZygpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Db250YWluZXJUYXJnZXQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5hZGREZWxldGVMaW5rKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuaW5kZXhWYWx1ZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRGVsZXRlTGluayhpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZUZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbGxlY3Rpb25JdGVtRGVsZXRlTGlua1wiKTtcclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTdXBwcmltZXIgY2V0IMOpbMOpbWVudFwiKTtcclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgdHJhc2hJY29uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10cmFzaC1pY29uXVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYXNoSWNvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhc2hJY29uSFRNTCA9IHRyYXNoSWNvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10cmFzaC1pY29uXCIpO1xyXG4gICAgICAgICAgICBpZiAodHJhc2hJY29uSFRNTCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5pbm5lckhUTUwgPSB0cmFzaEljb25IVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5pbm5lclRleHQgPSBcIlN1cHByaW1lciBjZXQgw6lsw6ltZW50XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJlbW92ZUZvcm1CdXR0b24pO1xyXG5cclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiB0aGUgc2VsZWN0b3JzIHVzZWQgaW4gdGhpcyBjb250cm9sbGVyXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdHJpZ2dlclNlbGVjdG9yOiBzdHJpbmc7XHJcbiAgICBmaWxlSW5wdXRTZWxlY3Rvcjogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdGltdWx1cyBjb250cm9sbGVyIGZvciBoYW5kbGluZyBmaWxlIGlucHV0IHRocm91Z2ggYSB0cmlnZ2VyIGVsZW1lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIC8vIERlZmluZSBkZWZhdWx0IHNlbGVjdG9yc1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdHJpZ2dlclNlbGVjdG9yOiBcIi5maWxlLWlucHV0LXRyaWdnZXJcIixcclxuICAgICAgICBmaWxlSW5wdXRTZWxlY3RvcjogXCIuZmlsZS1pbnB1dFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NXHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZpbmQgYWxsIHRyaWdnZXIgZWxlbWVudHMgd2l0aGluIHRoZSBjdXJyZW50IGNvbnRyb2xsZXIncyBzY29wZVxyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy50cmlnZ2VyU2VsZWN0b3JcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBlYWNoIHRyaWdnZXJcclxuICAgICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrLmJpbmQodGhpcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciB0aGUgdHJpZ2dlciBlbGVtZW50XHJcbiAgICBoYW5kbGVUcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgYXNzb2NpYXRlZCBmaWxlIGlucHV0IGVsZW1lbnQgd2l0aGluIHRoZSBjdXJyZW50IGNvbnRyb2xsZXIncyBzY29wZVxyXG4gICAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy5maWxlSW5wdXRTZWxlY3RvclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChmaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgZmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgIFwiQXVjdW4gY2hhbXAgZGUgZmljaGllciB0cm91dsOpIGF2ZWMgbGUgc8OpbGVjdGV1ciA6ICR7dGhpcy5zZWxlY3RvcnMuZmlsZUlucHV0U2VsZWN0b3J9XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcclxuaW1wb3J0IGZsYXRwaWNrciBmcm9tIFwiZmxhdHBpY2tyXCI7XHJcbmltcG9ydCB7IEZyZW5jaCB9IGZyb20gXCJmbGF0cGlja3IvZGlzdC9sMTBuL2ZyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJkYXRlSW5wdXRcIl07XHJcbiAgICBkZWNsYXJlIGRhdGVJbnB1dFRhcmdldHM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtb2RlID1cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1vZGVcIikgfHwgXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmxhdHBpY2tyT3B0aW9ucyhtb2RlKTtcclxuXHJcbiAgICAgICAgLy8gQXBwbHkgZmxhdHBpY2tyIHRvIGVhY2ggdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dFRhcmdldHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgZmxhdHBpY2tyKGlucHV0LCB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IEZyZW5jaCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJlbG93IGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxsb3dJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFsdElucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZCBIOmk6U1wiLFxyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGZsYXRwaWNrciBvcHRpb25zIGJhc2VkIG9uIHRoZSBtb2RlIDpcclxuICAgICAqIFwiZGVmYXVsdFwiLCBcInNpbmNlVG9kYXlcIiwgXCJkYXRldGltZVNpbmNlVG9kYXlNYXhPbmVZZWFyXCIsIFwidW50aWxUb2RheVwiIG9yIFwiZGF0ZU9mQmlydGhcIi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgY29uZmlndXJhdGlvbiBtb2RlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEZsYXRwaWNrck9wdGlvbnMobW9kZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzaW5jZVRvZGF5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdLFxyXG4gICAgICAgICAgICAgICAgYWx0Rm9ybWF0OiBcImwgaiBGIFlcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZGF0ZXRpbWVTaW5jZVRvZGF5TWF4T25lWWVhclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpICsgMSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJsIGogRiDDoCBIXFxcXGhpXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBcInVudGlsVG9kYXlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWF4LWRhdGVcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJqIEYgWVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJkYXRlT2ZCaXJ0aFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNaW5EYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSAtIDEzMCwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1heERhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpIC0gMTgsIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWluRGF0ZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWluLWRhdGVcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWluRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICAgICAgICAgIG1heERhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1heC1kYXRlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1heERhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBhbHRGb3JtYXQ6IFwiaiBGIFlcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1mbGF0cGlja3ItbWluLWRhdGVcIikgfHwgdG9kYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLWRlZmF1bHQtZGF0ZVwiKSB8fCB0b2RheSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJsIGogRiBZXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gXCIuL191dGlsc1wiO1xyXG5cclxuY2xhc3MgQmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0b3JzIHtcclxuICAgIHBhZ2VQcmVsb2FkZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBzZWxlY3RvcnM6IFNlbGVjdG9ycyA9IHtcclxuICAgICAgICBwYWdlUHJlbG9hZGVyOiBcIiNwYWdlUHJlbG9hZGVyXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQcmVsb2FkZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCFCYXNlQ29udHJvbGxlci5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlblR1cmJvKCk7XHJcbiAgICAgICAgICAgIEJhc2VDb250cm9sbGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVQcmVsb2FkZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcGFnZVByZWxvYWRlciA9IHNlbGVjdDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnBhZ2VQcmVsb2FkZXIsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocGFnZVByZWxvYWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcmVsb2FkZXJbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuVHVyYm8oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByZWxvYWRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCB7IHNlbGVjdCwgb24gfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdXNlckJ0blNlbGVjdG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFVzZWQgdG8gdG9nZ2xlIHRoZSBidXR0b25zIGluIHRoZSBwcm9maWxlIHBhZ2UgbWVudVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdXNlckJ0blNlbGVjdG9yOiBcIi51c2VyQnRuXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHVzZXJCdXR0b25zOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZWxlY3QgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSB1c2VyIGJ1dHRvbiBzZWxlY3RvciBhbmQgc3RvcmUgdGhlbSBpbiB1c2VyQnV0dG9uc1xyXG4gICAgICAgIHRoaXMudXNlckJ1dHRvbnMgPSBzZWxlY3Q8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy51c2VyQnRuU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2ggYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBhbGwgdXNlciBidXR0b25zXHJcbiAgICAgICAgb24oXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMudXNlckJ0blNlbGVjdG9yLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyQnV0dG9ucy5mb3JFYWNoKCh1c2VyQnRuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGJ1dHRvbiBpcyBub3QgdGhlIG9uZSB0aGF0IHdhcyBjbGlja2VkIGFuZCBpcyBjdXJyZW50bHkgZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckJ0biAhPT0gZS5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckJ0bi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID09PSAndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJpZ2dlciBhIGNsaWNrIHRvIGNsb3NlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXNlckJ0bi5jbGljaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wicmFuZ2VcIiwgXCJvdXRwdXRcIl07XHJcblxyXG4gICAgZGVjbGFyZSByYW5nZVRhcmdldDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGRlY2xhcmUgb3V0cHV0VGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmFuZ2VUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgdG9vbHRpcHNTZWxlY3Rvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgdG9vbHRpcHNTZWxlY3RvcjogJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nLFxyXG4gICAgfTtcclxuXHJcbiAgICB0b29sdGlwVHJpZ2dlckxpc3Q6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwVHJpZ2dlckxpc3QgPSBzZWxlY3Q8RWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnRvb2x0aXBzU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcFRyaWdnZXJMaXN0LmZvckVhY2goKHRvb2x0aXBUcmlnZ2VyRWwpID0+IHtcclxuICAgICAgICAgICAgbmV3IFRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgeyByZWdpc3RlcmFibGVzLCBDaGFydCB9IGZyb20gJ2NoYXJ0LmpzJztcblxuaWYgKHJlZ2lzdGVyYWJsZXMpIHtcbiAgICBDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcbn1cbmxldCBpc0NoYXJ0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKCFpc0NoYXJ0SW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGlzQ2hhcnRJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2luaXQnLCB7XG4gICAgICAgICAgICAgICAgQ2hhcnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmlld1ZhbHVlO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkLm9wdGlvbnMpICYmIDAgPT09IHBheWxvYWQub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBheWxvYWQub3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncHJlLWNvbm5lY3QnLCB7XG4gICAgICAgICAgICBvcHRpb25zOiBwYXlsb2FkLm9wdGlvbnMsXG4gICAgICAgICAgICBjb25maWc6IHBheWxvYWQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmICghY2FudmFzQ29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0Q29udGV4dCgpIGZyb20gRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY2FudmFzQ29udGV4dCwgcGF5bG9hZCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZpZXdWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3VmFsdWUgPSB7IGRhdGE6IHRoaXMudmlld1ZhbHVlLmRhdGEsIG9wdGlvbnM6IHRoaXMudmlld1ZhbHVlLm9wdGlvbnMgfTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZpZXdWYWx1ZS5vcHRpb25zKSAmJiAwID09PSB2aWV3VmFsdWUub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2aWV3VmFsdWUub3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd2aWV3LXZhbHVlLWNoYW5nZScsIHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRhdGEgPSB2aWV3VmFsdWUuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQub3B0aW9ucyA9IHZpZXdWYWx1ZS5vcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmIHRoaXMuY2hhcnQub3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3BhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAxfXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2NoYXJ0anMnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdmlldzogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiRmxhdHBpY2tyQ29udHJvbGxlciIsIkZpbGVJbnB1dENvbnRyb2xsZXIiLCJQYWdlUHJlbG9hZGVyQ29udHJvbGxlciIsInByb2ZpbGVNZW51Q29udHJvbGxlciIsIlRvb2x0aXBzQ29udHJvbGxlciIsIkNvbGxlY3Rpb25Gb3JtQ29udHJvbGxlciIsIlJhdGluZ1ZhbHVlQ29udHJvbGxlciIsIkNhcnBvb2xGaWx0ZXJzQ29udHJvbGxlciIsImFwcCIsInJlZ2lzdGVyIiwiQ29udHJvbGxlciIsInR1cmJvX2NvbnRyb2xsZXIiLCJkZWZhdWx0IiwiYWNjZXNzQ29udHJvbCIsImVsZW1lbnRMaXN0IiwiZm9yRWFjaCIsIl9yZWYiLCJpbmRleCIsImVsZW1lbnQiLCJkZXNjcmlwdGlvbiIsIk5vZGVMaXN0IiwibGVuZ3RoIiwiZXJyb3JNc2ciLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsInNlbGVjdCIsImNzc1NlbGVjdG9yIiwiYWxsIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidHJpbSIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxiYWNrIiwic2VsZWN0RWwiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNjcm9sbCIsInRhcmdldCIsInNjcm9sbFRvRWxlbWVudCIsInNldFRpbWVvdXQiLCJuYXZiYXIiLCJvZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFkiLCJiZWhhdmlvciIsIklzb3RvcGUiLCJkZWZhdWx0XzEiLCJjb25zdHJ1Y3RvciIsImlzb3RvcGVJbnN0YW5jZXMiLCJmaWx0ZXJzIiwiY29ubmVjdCIsImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yVG9kYXkiLCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXMiLCJ0b2RheUdyaWQiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZ2V0U29ydERhdGEiLCJwcmljZSIsImR1cmF0aW9uIiwicmF0aW5nIiwiZWNvbG9naWNhbCIsImFkanVzdENhcmRQb3NpdGlvbnNJZk5lY2Vzc2FyeSIsInJlZnJlc2hGaWx0ZXJCdXR0b25UZXh0IiwiZm9sbG93aW5nRGF5c0dyaWQiLCJmb2xsb3dpbmdEYXlzU2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJpbml0Rm9sbG93aW5nRGF5c0lzb3RvcGUiLCJhcHBseUZpbHRlcnMiLCJhcnJhbmdlIiwiZ3JvdXBJZCIsImN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVyIiwiaXRlbUVsZW0iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInBhcnNlRmxvYXQiLCJwcmljZU1hdGNoIiwiZHVyYXRpb25NYXRjaCIsInJhdGluZ01hdGNoIiwiZWNvTWF0Y2giLCJlY28iLCJ0b2dnbGVFY28iLCJldmVudCIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNBY3RpdmUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaWx0ZXJCeVByaWNlIiwiaW5wdXQiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiZmlsdGVyQnlEdXJhdGlvbiIsImZpbHRlckJ5UmF0aW5nIiwicmVzZXQiLCJlY29CdXR0b24iLCJlY29CdXR0b25UYXJnZXQiLCJlY29MYWJlbCIsInJlbW92ZSIsInByaWNlU2xpZGVyIiwicHJpY2VTbGlkZXJUYXJnZXQiLCJwcmljZVZhbHVlIiwibWF4IiwiZHVyYXRpb25TbGlkZXIiLCJkdXJhdGlvblNsaWRlclRhcmdldCIsImR1cmF0aW9uVmFsdWUiLCJyYXRpbmdTbGlkZXIiLCJyYXRpbmdTbGlkZXJUYXJnZXQiLCJyYXRpbmdWYWx1ZSIsIm1pbiIsImFsbEZpbHRlcnNEZWZhdWx0IiwiZ3JpZCIsInZpc2libGVJdGVtcyIsIml0ZW0iLCJjb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsImlubmVySFRNTCIsInJlc3VsdENvdW50IiwiZ3JpZElkIiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiaXRlbXMiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRhcmdldHMiLCJjb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0IiwiYWRkRGVsZXRlTGluayIsImFkZENvbGxlY3Rpb25FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInByb3RvdHlwZVZhbHVlIiwicmVwbGFjZSIsImluZGV4VmFsdWUiLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwicmVtb3ZlRm9ybUJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsInRyYXNoSWNvbkVsZW1lbnQiLCJ0cmFzaEljb25IVE1MIiwiaW5uZXJUZXh0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWVzIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiU3RyaW5nIiwic2VsZWN0b3JzIiwidHJpZ2dlclNlbGVjdG9yIiwiZmlsZUlucHV0U2VsZWN0b3IiLCJ0cmlnZ2VycyIsInRyaWdnZXIiLCJoYW5kbGVUcmlnZ2VyQ2xpY2siLCJiaW5kIiwiZmlsZUlucHV0IiwiY2xpY2siLCJmbGF0cGlja3IiLCJGcmVuY2giLCJtb2RlIiwib3B0aW9ucyIsImdldEZsYXRwaWNrck9wdGlvbnMiLCJkYXRlSW5wdXRUYXJnZXRzIiwibG9jYWxlIiwiYWxsb3dJbnB1dCIsImFsdElucHV0IiwiZGF0ZUZvcm1hdCIsInRvZGF5IiwiRGF0ZSIsIm1pbkRhdGUiLCJkZWZhdWx0RGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhbHRGb3JtYXQiLCJtYXhEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJlbmFibGVUaW1lIiwiZGVmYXVsdE1pbkRhdGUiLCJkZWZhdWx0TWF4RGF0ZSIsIkJhc2VDb250cm9sbGVyIiwiaW5pdGlhbGl6ZWQiLCJwYWdlUHJlbG9hZGVyIiwicmVtb3ZlUHJlbG9hZGVyIiwibGlzdGVuVHVyYm8iLCJ1c2VyQnRuU2VsZWN0b3IiLCJ1c2VyQnV0dG9ucyIsInVzZXJCdG4iLCJ1cGRhdGVWYWx1ZSIsInJhbmdlVGFyZ2V0Iiwib3V0cHV0VGFyZ2V0IiwiVG9vbHRpcCIsInRvb2x0aXBzU2VsZWN0b3IiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJ0b29sdGlwVHJpZ2dlckVsIiwicmVnaXN0ZXJhYmxlcyIsIkNoYXJ0IiwiaXNDaGFydEluaXRpYWxpemVkIiwiY2hhcnQiLCJkaXNwYXRjaEV2ZW50IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJwYXlsb2FkIiwidmlld1ZhbHVlIiwiaXNBcnJheSIsImNvbmZpZyIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZGlzY29ubmVjdCIsImRlc3Ryb3kiLCJ2aWV3VmFsdWVDaGFuZ2VkIiwiZGF0YSIsInVwZGF0ZSIsInBhcmVudEVsZW1lbnQiLCJyZXNwb25zaXZlIiwib3JpZ2luYWxXaWR0aCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJuYW1lIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2aWV3IiwiT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==