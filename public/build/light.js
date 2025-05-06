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
/* harmony import */ var _controllers_popovers_controller_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/popovers_controller.ts */ "./assets/controllers/popovers_controller.ts");
/* harmony import */ var _controllers_carpoolDetailsFetch_controller_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/carpoolDetailsFetch_controller.ts */ "./assets/controllers/carpoolDetailsFetch_controller.ts");











const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)();
app.register("flatpickr", _controllers_flatpickr_controller_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.register("fileInput", _controllers_fileInput_controller_ts__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.register("pagePreloader", _controllers_pagePreloader_controller_ts__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.register("profileMenu", _controllers_profileMenu_controller_ts__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.register("tooltips", _controllers_tooltips_controller_ts__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.register("collectionForm", _controllers_collectionForm_controller_ts__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.register("ratingValue", _controllers_ratingValue_controller_ts__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.register("carpoolFilters", _controllers_carpoolFilters_controller_ts__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.register("popovers", _controllers_popovers_controller_ts__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.register("carpoolDetailsFetch", _controllers_carpoolDetailsFetch_controller_ts__WEBPACK_IMPORTED_MODULE_10__["default"]);

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

/***/ "./assets/controllers/carpoolDetailsFetch_controller.ts":
/*!**************************************************************!*\
  !*** ./assets/controllers/carpoolDetailsFetch_controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  constructor() {
    super(...arguments);
    this.boundLoadDetails = this.loadDetails.bind(this); // Initialisation
    this.isLoading = false;
  }
  connect() {
    this.element.addEventListener("shown.bs.popover", this.boundLoadDetails);
  }
  disconnect() {
    this.element.removeEventListener("shown.bs.popover", this.boundLoadDetails);
  }
  async loadDetails() {
    if (this.isLoading || !this.urlValue) return;
    this.isLoading = true;
    try {
      const response = await fetch(this.urlValue);
      if (!response.ok) throw new Error("Échec du chargement");
      const html = await response.text();
      // Temporarily detach to prevent infinite loop
      this.element.removeEventListener("shown.bs.popover", this.boundLoadDetails);
      const popover = bootstrap__WEBPACK_IMPORTED_MODULE_1__.Popover.getInstance(this.element);
      if (popover) {
        popover.setContent({
          ".popover-body": html
        });
      }
      // Reattach the event listener after slight delay
      setTimeout(() => {
        this.element.addEventListener("shown.bs.popover", this.boundLoadDetails);
        this.isLoading = false;
      }, 300);
    } catch (e) {
      console.error("Erreur lors du chargement des détails :", e);
      this.isLoading = false;
    }
  }
}
default_1.values = {
  url: String
};
/* harmony default export */ __webpack_exports__["default"] = (default_1);

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

/***/ "./assets/controllers/popovers_controller.ts":
/*!***************************************************!*\
  !*** ./assets/controllers/popovers_controller.ts ***!
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
      popoversSelector: '[data-bs-toggle="popover"]'
    };
    this.popoverTriggerList = [];
  }
  connect() {
    this.popoverTriggerList = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.select)(this.selectors.popoversSelector, true);
    this.popoverTriggerList.forEach(popoverTriggerEl => {
      new bootstrap__WEBPACK_IMPORTED_MODULE_3__.Popover(popoverTriggerEl);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ0FkLGFBQWFBLENBQUNpQixJQUFJLEVBQUVmLE9BQU8sRUFBRTtJQUN6QixJQUFJLENBQUNnQixRQUFRLENBQUNELElBQUksRUFBRTtNQUFFRSxNQUFNLEVBQUVqQixPQUFPO01BQUVrQixNQUFNLEVBQUU7SUFBVSxDQUFDLENBQUM7RUFDL0Q7QUFDSjtBQUNBcE0sU0FBUyxDQUFDbUIsTUFBTSxHQUFHO0VBQ2ZrTCxJQUFJLEVBQUVDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvX3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJwb29sRGV0YWlsc0ZldGNoX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnBvb2xGaWx0ZXJzX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NvbGxlY3Rpb25Gb3JtX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbGVJbnB1dF9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mbGF0cGlja3JfY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcGFnZVByZWxvYWRlcl9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wb3BvdmVyc19jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wcm9maWxlTWVudV9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yYXRpbmdWYWx1ZV9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy90b29sdGlwc19jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbGlnaHQvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1jaGFydGpzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1jaGFydGpzL2Rpc3QvY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1jaGFydGpzLS1jaGFydCc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8xLFxufTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSBcIkBzeW1mb255L3N0aW11bHVzLWJyaWRnZVwiO1xyXG5cclxuaW1wb3J0IEZsYXRwaWNrckNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvZmxhdHBpY2tyX2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IEZpbGVJbnB1dENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvZmlsZUlucHV0X2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IFBhZ2VQcmVsb2FkZXJDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3BhZ2VQcmVsb2FkZXJfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgcHJvZmlsZU1lbnVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3Byb2ZpbGVNZW51X2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IFRvb2x0aXBzQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy90b29sdGlwc19jb250cm9sbGVyLnRzXCI7XHJcbmltcG9ydCBDb2xsZWN0aW9uRm9ybUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvY29sbGVjdGlvbkZvcm1fY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgUmF0aW5nVmFsdWVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3JhdGluZ1ZhbHVlX2NvbnRyb2xsZXIudHNcIjtcclxuaW1wb3J0IENhcnBvb2xGaWx0ZXJzQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9jYXJwb29sRmlsdGVyc19jb250cm9sbGVyLnRzXCI7XHJcbmltcG9ydCBQb3BvdmVyc0NvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvcG9wb3ZlcnNfY29udHJvbGxlci50c1wiO1xyXG5pbXBvcnQgQ2FycG9vbERldGFpbHNGZXRjaENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvY2FycG9vbERldGFpbHNGZXRjaF9jb250cm9sbGVyLnRzXCI7XHJcblxyXG5jb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKCk7XHJcblxyXG5hcHAucmVnaXN0ZXIoXCJmbGF0cGlja3JcIiwgRmxhdHBpY2tyQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcImZpbGVJbnB1dFwiLCBGaWxlSW5wdXRDb250cm9sbGVyKTtcclxuYXBwLnJlZ2lzdGVyKFwicGFnZVByZWxvYWRlclwiLCBQYWdlUHJlbG9hZGVyQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcInByb2ZpbGVNZW51XCIsIHByb2ZpbGVNZW51Q29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcInRvb2x0aXBzXCIsIFRvb2x0aXBzQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcImNvbGxlY3Rpb25Gb3JtXCIsIENvbGxlY3Rpb25Gb3JtQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcInJhdGluZ1ZhbHVlXCIsIFJhdGluZ1ZhbHVlQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcImNhcnBvb2xGaWx0ZXJzXCIsIENhcnBvb2xGaWx0ZXJzQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcInBvcG92ZXJzXCIsIFBvcG92ZXJzQ29udHJvbGxlcik7XHJcbmFwcC5yZWdpc3RlcihcImNhcnBvb2xEZXRhaWxzRmV0Y2hcIiwgQ2FycG9vbERldGFpbHNGZXRjaENvbnRyb2xsZXIpO1xyXG4iLCJpbXBvcnQgXCIuLi9ib290c3RyYXAuanNcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbGlnaHQvaW5kZXguc2Nzc1wiO1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsInR5cGUgRWxlbWVudERlc2NyaXB0b3IgPSB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50IHwgTm9kZUxpc3RPZjxFbGVtZW50PiB8IEVsZW1lbnRbXSB8IG51bGw7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB0aGUgYWNjZXNzaWJpbGl0eSBvZiBlbGVtZW50cyBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIGFueSByZXF1aXJlZCBlbGVtZW50IGlzIG1pc3NpbmcuXHJcbiAqIEBwYXJhbSBlbGVtZW50TGlzdCBMaXN0IG9mIGVsZW1lbnRzIGFuZCB0aGVpciBkZXNjcmlwdGlvbnMgdG8gdmFsaWRhdGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzQ29udHJvbChlbGVtZW50TGlzdDogRWxlbWVudERlc2NyaXB0b3JbXSk6IHZvaWQge1xyXG4gICAgZWxlbWVudExpc3QuZm9yRWFjaCgoeyBlbGVtZW50LCBkZXNjcmlwdGlvbiB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICghZWxlbWVudCB8fCAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ICYmIGVsZW1lbnQubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGBUaGUgZWxlbWVudCBcIiR7ZGVzY3JpcHRpb259XCIgYXQgaW5kZXggJHtpbmRleH0gaXMgbWlzc2luZyBvciBpbnZhbGlkLmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2ltcGxlIHNlbGVjdG9yIGZ1bmN0aW9uOiByZXR1cm5zIGFuIGFycmF5IG9mIERPTSBlbGVtZW50cy5cclxuICogQHBhcmFtIGNzc1NlbGVjdG9yIENTUyBzZWxlY3RvciB0byBxdWVyeS5cclxuICogQHBhcmFtIGFsbCBJZiBgdHJ1ZWAsIHJldHVybnMgYWxsIG1hdGNoaW5nIGVsZW1lbnRzOyBvdGhlcndpc2UsIHdyYXBzIGEgc2luZ2xlIG1hdGNoaW5nIGVsZW1lbnQgaW4gYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGVsZW1lbnRzIChlbXB0eSBpZiBubyBtYXRjaCBpcyBmb3VuZCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0PFQgZXh0ZW5kcyBFbGVtZW50PihcclxuICAgIGNzc1NlbGVjdG9yOiBzdHJpbmcsXHJcbiAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZVxyXG4pOiBUW10ge1xyXG4gICAgY3NzU2VsZWN0b3IgPSBjc3NTZWxlY3Rvci50cmltKCk7XHJcbiAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxUPihjc3NTZWxlY3RvcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxUPihjc3NTZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBbZWxlbWVudF0gOiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gb25lIG9yIG1vcmUgc2VsZWN0ZWQgZWxlbWVudHMuXHJcbiAqIEBwYXJhbSBldmVudFR5cGUgVHlwZSBvZiBldmVudCAoZS5nLiwgXCJjbGlja1wiKS5cclxuICogQHBhcmFtIGNzc1NlbGVjdG9yIENTUyBzZWxlY3RvciBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQocykuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlIG9uIHRoZSBldmVudC5cclxuICogQHBhcmFtIGFsbCBJZiBgdHJ1ZWAsIGFwcGxpZXMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCBtYXRjaGluZyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbjxUIGV4dGVuZHMgRWxlbWVudD4oXHJcbiAgICBldmVudFR5cGU6IHN0cmluZyxcclxuICAgIGNzc1NlbGVjdG9yOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcclxuICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlXHJcbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0RWwgPSBzZWxlY3Q8VD4oY3NzU2VsZWN0b3IsIGFsbCk7XHJcbiAgICBhY2Nlc3NDb250cm9sKFtcclxuICAgICAgICB7IGVsZW1lbnQ6IHNlbGVjdEVsLCBkZXNjcmlwdGlvbjogYCR7Y3NzU2VsZWN0b3J9IChDU1Mgc2VsZWN0b3IpYCB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgc2VsZWN0RWwuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaykpO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIFwic2Nyb2xsXCIgZXZlbnQgbGlzdGVuZXIgdG8gYSBzcGVjaWZpZWQgZWxlbWVudC5cclxuICogQHBhcmFtIHRhcmdldCBUYXJnZXQgZWxlbWVudCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIHRvLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBzY3JvbGwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25TY3JvbGwoXHJcbiAgICB0YXJnZXQ6IEVsZW1lbnQsXHJcbiAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZFxyXG4pOiB2b2lkIHtcclxuICAgIGFjY2Vzc0NvbnRyb2woW3sgZWxlbWVudDogdGFyZ2V0LCBkZXNjcmlwdGlvbjogXCJvblNjcm9sbCB0YXJnZXRcIiB9XSk7XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTbW9vdGhseSBzY3JvbGxzIHRvIGEgdGFyZ2V0IGVsZW1lbnQsIGNvbnNpZGVyaW5nIHRoZSBvZmZzZXQgY2F1c2VkIGJ5IGEgZml4ZWQgbmF2YmFyLlxyXG4gKiBAcGFyYW0gZWxlbWVudCBUYXJnZXQgZWxlbWVudCB0byBzY3JvbGwgdG8uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGFjY2Vzc0NvbnRyb2woW3sgZWxlbWVudDogZWxlbWVudCwgZGVzY3JpcHRpb246IFwic2Nyb2xsVG8gdGFyZ2V0XCIgfV0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmJhciA9IHNlbGVjdDxIVE1MRWxlbWVudD4oXCIjbWFpbk5hdmJhclwiLCBmYWxzZSk7IC8vIFJldG91cm5lIHRvdWpvdXJzIHVuIHRhYmxlYXVcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBpZiAobmF2YmFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gbmF2YmFyWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gb2Zmc2V0LFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB9KTtcclxuICAgIH0sIDUwMCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcclxuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gXCJib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xyXG4gICAgICAgIHVybDogU3RyaW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICBkZWNsYXJlIHJlYWRvbmx5IHVybFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZExvYWREZXRhaWxzOiAoKSA9PiB2b2lkID0gdGhpcy5sb2FkRGV0YWlscy5iaW5kKHRoaXMpOyAvLyBJbml0aWFsaXNhdGlvblxyXG5cclxuICAgIHByaXZhdGUgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNob3duLmJzLnBvcG92ZXJcIiwgdGhpcy5ib3VuZExvYWREZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2hvd24uYnMucG9wb3ZlclwiLCB0aGlzLmJvdW5kTG9hZERldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWREZXRhaWxzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZyB8fCAhdGhpcy51cmxWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmxWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIsOJY2hlYyBkdSBjaGFyZ2VtZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyaWx5IGRldGFjaCB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzaG93bi5icy5wb3BvdmVyXCIsIHRoaXMuYm91bmRMb2FkRGV0YWlscyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3BvdmVyID0gUG9wb3Zlci5nZXRJbnN0YW5jZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAocG9wb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgcG9wb3Zlci5zZXRDb250ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBcIi5wb3BvdmVyLWJvZHlcIjogaHRtbCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZWF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgYWZ0ZXIgc2xpZ2h0IGRlbGF5XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93bi5icy5wb3BvdmVyXCIsIHRoaXMuYm91bmRMb2FkRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyBkw6l0YWlscyA6XCIsIGUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBJc290b3BlIGZyb20gXCJpc290b3BlLWxheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuXHJcbiAgICAvLyBEZWZpbmUgdGFyZ2V0cyBmb3IgdGhlIEhUTUwgZWxlbWVudHMgd2Ugd2lsbCBtYW5pcHVsYXRlXHJcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcclxuICAgICAgICBcImVjb0J1dHRvblwiLFxyXG4gICAgICAgIFwicHJpY2VTbGlkZXJcIixcclxuICAgICAgICBcImR1cmF0aW9uU2xpZGVyXCIsXHJcbiAgICAgICAgXCJyYXRpbmdTbGlkZXJcIixcclxuICAgICAgICBcInJlc2V0XCJcclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBpc290b3BlSW5zdGFuY2VzOiB7IFtrZXk6IHN0cmluZ106IElzb3RvcGUgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgLy8gQWRkIHRoZSB0YXJnZXQgcHJvcGVydGllc1xyXG4gICAgZWNvQnV0dG9uVGFyZ2V0ITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcmljZVNsaWRlclRhcmdldCE6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBkdXJhdGlvblNsaWRlclRhcmdldCE6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByYXRpbmdTbGlkZXJUYXJnZXQhOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmVzZXRUYXJnZXQhOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmb3IgdG9kYXkgYW5kIGZvbGxvd2luZyBkYXlzXHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvclRvZGF5OiB7fSxcclxuICAgICAgICAgICAgZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JGb2xsb3dpbmdEYXlzOiB7fSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIElzb3RvcGUgZm9yIHRvZGF5IGdyaWQgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgdG9kYXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1ncmlkXCIpO1xyXG4gICAgICAgIGlmICh0b2RheUdyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc290b3BlSW5zdGFuY2VzW1wiZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JUb2RheVwiXSA9IG5ldyBJc290b3BlKFwiLnRvZGF5LWdyaWRcIiwge1xyXG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5jYXJkXCIsXHJcbiAgICAgICAgICAgICAgICBsYXlvdXRNb2RlOiBcImZpdFJvd3NcIixcclxuICAgICAgICAgICAgICAgIGdldFNvcnREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IFwiW2RhdGEtcHJpY2VdIHBhcnNlSW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IFwiW2RhdGEtZHVyYXRpb25dIHBhcnNlSW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiBcIltkYXRhLWRyaXZlci1yYXRpbmddIHBhcnNlRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBlY29sb2dpY2FsOiBcIltkYXRhLWVjb2xvZ2ljYWxdXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGFkanVzdCBjYXJkIHBzb3Rpb24gaWYgbmVjZXNzYXJ5IGFmdGVyIGZpbHRlcmluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzb3RvcGVJbnN0YW5jZXNbXCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvclRvZGF5XCJdLm9uKCdhcnJhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdENhcmRQb3NpdGlvbnNJZk5lY2Vzc2FyeShcInRvZGF5LWdyaWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hGaWx0ZXJCdXR0b25UZXh0KCdmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvclRvZGF5Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFkanVzdENhcmRQb3NpdGlvbnNJZk5lY2Vzc2FyeShcInRvZGF5LWdyaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIElzb3RvcGUgZm9yIGZvbGxvd2luZyBkYXlzIGdyaWQgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgZm9sbG93aW5nRGF5c0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvd2luZy1kYXlzLWdyaWRcIik7XHJcbiAgICAgICAgaWYgKGZvbGxvd2luZ0RheXNHcmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZ0RheXNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXNcIik7XHJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdEYXlzU2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9sbG93aW5nRGF5c1NlY3Rpb24pLmRpc3BsYXkgIT09IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRGb2xsb3dpbmdEYXlzSXNvdG9wZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNvdG9wZUluc3RhbmNlc1tcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzb3RvcGVJbnN0YW5jZXNbXCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXNcIl0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSXNvdG9wZShmb2xsb3dpbmdEYXlzR3JpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5jYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRNb2RlOiBcImZpdFJvd3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNvcnREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IFwiW2RhdGEtcHJpY2VdIHBhcnNlSW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IFwiW2RhdGEtZHVyYXRpb25dIHBhcnNlSW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiBcIltkYXRhLWRyaXZlci1yYXRpbmddIHBhcnNlRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlY29sb2dpY2FsOiBcIltkYXRhLWVjb2xvZ2ljYWxdXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoXCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBhZGp1c3QgY2FyZCBwb3NpdGlvbnMgaWYgbmVjZXNzYXJ5IGFmdGVyIGZpbHRlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzb3RvcGVJbnN0YW5jZXNbXCJmaWx0ZXJDYXJwb29sU2VhcmNoUmVzdWx0c0ZvckZvbGxvd2luZ0RheXNcIl0ub24oJ2FycmFuZ2VDb21wbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0Q2FyZFBvc2l0aW9uc0lmTmVjZXNzYXJ5KFwiZm9sbG93aW5nLWRheXMtZ3JpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEZpbHRlckJ1dHRvblRleHQoJ2ZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RDYXJkUG9zaXRpb25zSWZOZWNlc3NhcnkoXCJmb2xsb3dpbmctZGF5cy1ncmlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wZUluc3RhbmNlc1tcImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5c1wiXS5hcnJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlY3Rpb24gaXMgYWxyZWFkeSB2aXNpYmxlLCBpbml0aWFsaXplIElzb3RvcGUgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgICAgICAgICBpbml0Rm9sbG93aW5nRGF5c0lzb3RvcGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgd2FpdCBmb3IgdGhlIHNlY3Rpb24gdG8gYmUgc2hvd25cclxuICAgICAgICAgICAgICAgICAgICBmb2xsb3dpbmdEYXlzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwic2hvd24uYnMuY29sbGFwc2VcIiwgaW5pdEZvbGxvd2luZ0RheXNJc290b3BlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcnMoZ3JvdXBJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEZpbHRlcnMgPSB0aGlzLmZpbHRlcnNbZ3JvdXBJZF07XHJcblxyXG4gICAgICAgIHRoaXMuaXNvdG9wZUluc3RhbmNlc1tncm91cElkXS5hcnJhbmdlKHtcclxuICAgICAgICAgICAgZmlsdGVyOiAoaXRlbUVsZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcGFyc2VJbnQoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZVwiKSB8fCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZHVyYXRpb25cIikgfHwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmF0aW5nID0gcGFyc2VGbG9hdChpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRyaXZlci1yYXRpbmdcIikgfHwgXCIwXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWNvbG9naWNhbCA9IGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZWNvbG9naWNhbFwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VNYXRjaCA9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcnMucHJpY2UgIT09IHVuZGVmaW5lZCA/IHByaWNlIDw9IGN1cnJlbnRGaWx0ZXJzLnByaWNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uTWF0Y2ggPVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBkdXJhdGlvbiA8PSBjdXJyZW50RmlsdGVycy5kdXJhdGlvbiA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmdNYXRjaCA9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlcnMucmF0aW5nICE9PSB1bmRlZmluZWQgPyByYXRpbmcgPj0gY3VycmVudEZpbHRlcnMucmF0aW5nIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVjb01hdGNoID1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVycy5lY28gPyBlY29sb2dpY2FsIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJpY2VNYXRjaCAmJiBkdXJhdGlvbk1hdGNoICYmIHJhdGluZ01hdGNoICYmIGVjb01hdGNoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUVjbyhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBidXR0b24uZGF0YXNldC5ncm91cElkITtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyc1tncm91cElkXS5lY28gPSBpc0FjdGl2ZTtcclxuICAgICAgICB0aGlzLmFwcGx5RmlsdGVycyhncm91cElkKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCeVByaWNlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBJZCA9IGlucHV0LmRhdGFzZXQuZ3JvdXBJZCE7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzW2dyb3VwSWRdLnByaWNlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dyb3VwSWR9ICNwcmljZS12YWx1ZWApIS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKGdyb3VwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckJ5RHVyYXRpb24oZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBncm91cElkID0gaW5wdXQuZGF0YXNldC5ncm91cElkITtcclxuICAgICAgICB0aGlzLmZpbHRlcnNbZ3JvdXBJZF0uZHVyYXRpb24gPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z3JvdXBJZH0gI2R1cmF0aW9uLXZhbHVlYCkhLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoZ3JvdXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQnlSYXRpbmcoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBncm91cElkID0gaW5wdXQuZGF0YXNldC5ncm91cElkITtcclxuICAgICAgICB0aGlzLmZpbHRlcnNbZ3JvdXBJZF0ucmF0aW5nID0gcGFyc2VGbG9hdChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z3JvdXBJZH0gI3JhdGluZy12YWx1ZWApIS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKGdyb3VwSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IGFsbCBmaWx0ZXJzIHRvIHRoZWlyIGRlZmF1bHQgc3RhdGVcclxuICAgIHJlc2V0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC5ncm91cElkITtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgZWNvIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGVjb0J1dHRvbiA9IHRoaXMuZWNvQnV0dG9uVGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGVjb0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlY28tbGFiZWxcIik7XHJcbiAgICAgICAgaWYgKGVjb0xhYmVsKSB7XHJcbiAgICAgICAgICAgIGVjb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZWNvTGFiZWwudGV4dENvbnRlbnQgPSBcIlNldWxlbWVudCBsZXMgdHJhamV0cyDDqWNvbG9naXF1ZXNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHByaWNlIGZpbHRlclxyXG4gICAgICAgIGNvbnN0IHByaWNlU2xpZGVyID0gdGhpcy5wcmljZVNsaWRlclRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHByaWNlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaWNlLXZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChwcmljZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHByaWNlU2xpZGVyLnZhbHVlID0gcHJpY2VTbGlkZXIubWF4O1xyXG4gICAgICAgICAgICBwcmljZVZhbHVlLnRleHRDb250ZW50ID0gcHJpY2VTbGlkZXIubWF4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgZHVyYXRpb24gZmlsdGVyXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb25TbGlkZXIgPSB0aGlzLmR1cmF0aW9uU2xpZGVyVGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb24tdmFsdWVcIik7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgZHVyYXRpb25TbGlkZXIudmFsdWUgPSBkdXJhdGlvblNsaWRlci5tYXg7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBkdXJhdGlvblNsaWRlci5tYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCByYXRpbmcgZmlsdGVyXHJcbiAgICAgICAgY29uc3QgcmF0aW5nU2xpZGVyID0gdGhpcy5yYXRpbmdTbGlkZXJUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCByYXRpbmdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nLXZhbHVlXCIpO1xyXG4gICAgICAgIGlmIChyYXRpbmdWYWx1ZSkge1xyXG4gICAgICAgICAgICByYXRpbmdTbGlkZXIudmFsdWUgPSByYXRpbmdTbGlkZXIubWluO1xyXG4gICAgICAgICAgICByYXRpbmdWYWx1ZS50ZXh0Q29udGVudCA9IHJhdGluZ1NsaWRlci5taW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlcnNbZ3JvdXBJZF0gPSB7fTtcclxuICAgICAgICB0aGlzLmFwcGx5RmlsdGVycyhncm91cElkKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoRmlsdGVyQnV0dG9uVGV4dChncm91cElkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtncm91cElkfUZpbHRlckJ1dHRvbmApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGFsbCBmaWx0ZXJzIGFyZSBpbiB0aGVpciBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgY29uc3QgY3VycmVudEZpbHRlcnMgPSB0aGlzLmZpbHRlcnNbZ3JvdXBJZF07XHJcbiAgICAgICAgY29uc3QgYWxsRmlsdGVyc0RlZmF1bHQgPSAoXHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJzLnByaWNlID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcnMuZHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycy5yYXRpbmcgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVycy5lY28gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaG93IG1hbnkgY2FyZHMgYXJlIHZpc2libGUgaW4gdGhlIGdyb3VwIGFmdGVyIGFwcGx5aW5nIGZpbHRlcnNcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z3JvdXBJZH1HcmlkYCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gQXJyYXkuZnJvbShncmlkID8gZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpIDogW10pLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW0gYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhbGwgZmlsdGVycyBhcmUgZGVmYXVsdCwgZGlzcGxheSBcIkZpbHRyZXIgbGVzIHLDqXN1bHRhdHNcIlxyXG4gICAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgICAgaWYgKGFsbEZpbHRlcnNEZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJGaWx0cmVyIGxlcyByw6lzdWx0YXRzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmlzaWJsZUl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQXVjdW4gcsOpc3VsdGF0IGF2ZWMgbGVzIGZpbHRyZXMgc8OpbGVjdGlvbm7DqXNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYnV0dG9uIHRleHQgd2l0aCB0aGUgbnVtYmVyIG9mIGZpbHRlcmVkIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdENvdW50ID0gdmlzaWJsZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgJHtyZXN1bHRDb3VudH0gcsOpc3VsdGF0cyBhdmVjIGxlcyBmaWx0cmVzIHPDqWxlY3Rpb25uw6lzYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGp1c3RDYXJkUG9zaXRpb25zSWZOZWNlc3NhcnkoZ3JpZElkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtncmlkSWR9YCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBncmlkID8gZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpIDogW107XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gQXJyYXkuZnJvbShpdGVtcykuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaXRlbSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2aXNpYmxlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaXRlbSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHNjcmVlbldpZHRoID49IDYxOCAmJiBzY3JlZW5XaWR0aCA8PSA5MTMgJiYgdmlzaWJsZUl0ZW1zLmxlbmd0aCA9PT0gMSB8fFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuV2lkdGggPj0gOTE0ICYmIHNjcmVlbldpZHRoIDw9IDEzOTkgJiYgKHZpc2libGVJdGVtcy5sZW5ndGggPT09IDEgfHwgdmlzaWJsZUl0ZW1zLmxlbmd0aCA9PT0gMikgfHxcclxuICAgICAgICAgICAgICAgIHNjcmVlbldpZHRoID4gMTM5OSAmJiAodmlzaWJsZUl0ZW1zLmxlbmd0aCA+PSAxICYmIHZpc2libGVJdGVtcy5sZW5ndGggPD0gMylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wiY29sbGVjdGlvbkNvbnRhaW5lclwiXTtcclxuXHJcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xyXG4gICAgICAgIGluZGV4OiBOdW1iZXIsXHJcbiAgICAgICAgcHJvdG90eXBlOiBTdHJpbmcsXHJcbiAgICB9O1xyXG5cclxuICAgIGRlY2xhcmUgY29sbGVjdGlvbkNvbnRhaW5lclRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBkZWNsYXJlIGluZGV4VmFsdWU6IG51bWJlcjtcclxuICAgIGRlY2xhcmUgcHJvdG90eXBlVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNvbnRhaW5lclRhcmdldFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLmFkZERlbGV0ZUxpbmsoaXRlbSBhcyBIVE1MRWxlbWVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbGxlY3Rpb25FbGVtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiY29sbGVjdGlvbkl0ZW1cIik7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSB0aGlzLnByb3RvdHlwZVZhbHVlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIC9fX25hbWVfXy9nLFxyXG4gICAgICAgICAgICB0aGlzLmluZGV4VmFsdWUudG9TdHJpbmcoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ29udGFpbmVyVGFyZ2V0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuYWRkRGVsZXRlTGluayhpdGVtKTtcclxuICAgICAgICB0aGlzLmluZGV4VmFsdWUrKztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZERlbGV0ZUxpbmsoaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZW1vdmVGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVGb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb2xsZWN0aW9uSXRlbURlbGV0ZUxpbmtcIik7XHJcbiAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiU3VwcHJpbWVyIGNldCDDqWzDqW1lbnRcIik7XHJcbiAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdHJhc2gtaWNvbl1cIik7XHJcblxyXG4gICAgICAgIGlmICh0cmFzaEljb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbkhUTUwgPSB0cmFzaEljb25FbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdHJhc2gtaWNvblwiKTtcclxuICAgICAgICAgICAgaWYgKHRyYXNoSWNvbkhUTUwpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZvcm1CdXR0b24uaW5uZXJIVE1MID0gdHJhc2hJY29uSFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZvcm1CdXR0b24uaW5uZXJUZXh0ID0gXCJTdXBwcmltZXIgY2V0IMOpbMOpbWVudFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmVGb3JtQnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5cclxuLy8gRGVmaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHNlbGVjdG9ycyB1c2VkIGluIHRoaXMgY29udHJvbGxlclxyXG5pbnRlcmZhY2UgU2VsZWN0b3JzIHtcclxuICAgIHRyaWdnZXJTZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgZmlsZUlucHV0U2VsZWN0b3I6IHN0cmluZztcclxufVxyXG5cclxuLy8gU3RpbXVsdXMgY29udHJvbGxlciBmb3IgaGFuZGxpbmcgZmlsZSBpbnB1dCB0aHJvdWdoIGEgdHJpZ2dlciBlbGVtZW50XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICAvLyBEZWZpbmUgZGVmYXVsdCBzZWxlY3RvcnNcclxuICAgIHNlbGVjdG9yczogU2VsZWN0b3JzID0ge1xyXG4gICAgICAgIHRyaWdnZXJTZWxlY3RvcjogXCIuZmlsZS1pbnB1dC10cmlnZ2VyXCIsXHJcbiAgICAgICAgZmlsZUlucHV0U2VsZWN0b3I6IFwiLmZpbGUtaW5wdXRcIixcclxuICAgIH07XHJcblxyXG4gICAgLy8gQXV0b21hdGljYWxseSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbGxlciBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTVxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGaW5kIGFsbCB0cmlnZ2VyIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VycmVudCBjb250cm9sbGVyJ3Mgc2NvcGVcclxuICAgICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMudHJpZ2dlclNlbGVjdG9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCB0cmlnZ2VyXHJcbiAgICAgICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXJDbGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIHRoZSBjbGljayBldmVudCBmb3IgdGhlIHRyaWdnZXIgZWxlbWVudFxyXG4gICAgaGFuZGxlVHJpZ2dlckNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgdGhlIGFzc29jaWF0ZWQgZmlsZSBpbnB1dCBlbGVtZW50IHdpdGhpbiB0aGUgY3VycmVudCBjb250cm9sbGVyJ3Mgc2NvcGVcclxuICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMuZmlsZUlucHV0U2VsZWN0b3JcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIkF1Y3VuIGNoYW1wIGRlIGZpY2hpZXIgdHJvdXbDqSBhdmVjIGxlIHPDqWxlY3RldXIgOiAke3RoaXMuc2VsZWN0b3JzLmZpbGVJbnB1dFNlbGVjdG9yfVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCBmbGF0cGlja3IgZnJvbSBcImZsYXRwaWNrclwiO1xyXG5pbXBvcnQgeyBGcmVuY2ggfSBmcm9tIFwiZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wiZGF0ZUlucHV0XCJdO1xyXG4gICAgZGVjbGFyZSBkYXRlSW5wdXRUYXJnZXRzOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbW9kZSA9XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZsYXRwaWNrci1tb2RlXCIpIHx8IFwiZGVmYXVsdFwiO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZsYXRwaWNrck9wdGlvbnMobW9kZSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGZsYXRwaWNrciB0byBlYWNoIHRhcmdldCBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRUYXJnZXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGZsYXRwaWNrcihpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBGcmVuY2gsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJiZWxvdyBjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWQgSDppOlNcIixcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBmbGF0cGlja3Igb3B0aW9ucyBiYXNlZCBvbiB0aGUgbW9kZSA6XHJcbiAgICAgKiBcImRlZmF1bHRcIiwgXCJzaW5jZVRvZGF5XCIsIFwiZGF0ZXRpbWVTaW5jZVRvZGF5TWF4T25lWWVhclwiLCBcInVudGlsVG9kYXlcIiBvciBcImRhdGVPZkJpcnRoXCIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1vZGUgVGhlIGNvbmZpZ3VyYXRpb24gbW9kZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRGbGF0cGlja3JPcHRpb25zKG1vZGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2luY2VUb2RheVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlOiB0b2RheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlOiB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICAgICAgICAgIGFsdEZvcm1hdDogXCJsIGogRiBZXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBcImRhdGV0aW1lU2luY2VUb2RheU1heE9uZVllYXJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSArIDEsIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSAtIDEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlOiB0b2RheSxcclxuICAgICAgICAgICAgICAgIG1heERhdGU6IG1heERhdGUsXHJcbiAgICAgICAgICAgICAgICBhbHRGb3JtYXQ6IFwibCBqIEYgw6AgSFxcXFxoaVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJ1bnRpbFRvZGF5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1heERhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1heC1kYXRlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBhbHRGb3JtYXQ6IFwiaiBGIFlcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZGF0ZU9mQmlydGhcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0TWluRGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCkgLSAxMzAsIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNYXhEYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSAtIDE4LCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1pbi1kYXRlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1pbkRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZsYXRwaWNrci1tYXgtZGF0ZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXhEYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdLFxyXG4gICAgICAgICAgICAgICAgYWx0Rm9ybWF0OiBcImogRiBZXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZTogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZmxhdHBpY2tyLW1pbi1kYXRlXCIpIHx8IHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZsYXRwaWNrci1kZWZhdWx0LWRhdGVcIikgfHwgdG9kYXksXHJcbiAgICAgICAgICAgICAgICBhbHRGb3JtYXQ6IFwibCBqIEYgWVwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmNsYXNzIEJhc2VDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9ycyB7XHJcbiAgICBwYWdlUHJlbG9hZGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgcGFnZVByZWxvYWRlcjogXCIjcGFnZVByZWxvYWRlclwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUHJlbG9hZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICghQmFzZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5UdXJibygpO1xyXG4gICAgICAgICAgICBCYXNlQ29udHJvbGxlci5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlUHJlbG9hZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VQcmVsb2FkZXIgPSBzZWxlY3Q8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy5wYWdlUHJlbG9hZGVyLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHBhZ2VQcmVsb2FkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwYWdlUHJlbG9hZGVyWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxpc3RlblR1cmJvKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcmVsb2FkZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xyXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi9fdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvcnMge1xyXG4gICAgcG9wb3ZlcnNTZWxlY3Rvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc2VsZWN0b3JzOiBTZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgcG9wb3ZlcnNTZWxlY3RvcjogJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nLFxyXG4gICAgfTtcclxuXHJcbiAgICBwb3BvdmVyVHJpZ2dlckxpc3Q6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3BvdmVyVHJpZ2dlckxpc3QgPSBzZWxlY3Q8RWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnBvcG92ZXJzU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucG9wb3ZlclRyaWdnZXJMaXN0LmZvckVhY2goKHBvcG92ZXJUcmlnZ2VyRWwpID0+IHtcclxuICAgICAgICAgICAgbmV3IFBvcG92ZXIocG9wb3ZlclRyaWdnZXJFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcclxuaW1wb3J0IHsgc2VsZWN0LCBvbiB9IGZyb20gXCIuL191dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9ycyB7XHJcbiAgICB1c2VyQnRuU2VsZWN0b3I6IHN0cmluZztcclxufVxyXG5cclxuLy8gVXNlZCB0byB0b2dnbGUgdGhlIGJ1dHRvbnMgaW4gdGhlIHByb2ZpbGUgcGFnZSBtZW51XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBzZWxlY3RvcnM6IFNlbGVjdG9ycyA9IHtcclxuICAgICAgICB1c2VyQnRuU2VsZWN0b3I6IFwiLnVzZXJCdG5cIixcclxuICAgIH07XHJcblxyXG4gICAgdXNlckJ1dHRvbnM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICBjb25uZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNlbGVjdCBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHVzZXIgYnV0dG9uIHNlbGVjdG9yIGFuZCBzdG9yZSB0aGVtIGluIHVzZXJCdXR0b25zXHJcbiAgICAgICAgdGhpcy51c2VyQnV0dG9ucyA9IHNlbGVjdDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzLnVzZXJCdG5TZWxlY3RvcixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEF0dGFjaCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB1c2VyIGJ1dHRvbnNcclxuICAgICAgICBvbihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycy51c2VyQnRuU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJCdXR0b25zLmZvckVhY2goKHVzZXJCdG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGlzIG5vdCB0aGUgb25lIHRoYXQgd2FzIGNsaWNrZWQgYW5kIGlzIGN1cnJlbnRseSBleHBhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQnRuICE9PSBlLmN1cnJlbnRUYXJnZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQnRuLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09ICd0cnVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIGEgY2xpY2sgdG8gY2xvc2UgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1c2VyQnRuLmNsaWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJyYW5nZVwiLCBcIm91dHB1dFwiXTtcclxuXHJcbiAgICBkZWNsYXJlIHJhbmdlVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgZGVjbGFyZSBvdXRwdXRUYXJnZXQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yYW5nZVRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLm91dHB1dFRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gXCIuL191dGlsc1wiO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9ycyB7XHJcbiAgICB0b29sdGlwc1NlbGVjdG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBzZWxlY3RvcnM6IFNlbGVjdG9ycyA9IHtcclxuICAgICAgICB0b29sdGlwc1NlbGVjdG9yOiAnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRvb2x0aXBUcmlnZ2VyTGlzdDogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBUcmlnZ2VyTGlzdCA9IHNlbGVjdDxFbGVtZW50PihcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMudG9vbHRpcHNTZWxlY3RvcixcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50b29sdGlwVHJpZ2dlckxpc3QuZm9yRWFjaCgodG9vbHRpcFRyaWdnZXJFbCkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCB7IHJlZ2lzdGVyYWJsZXMsIENoYXJ0IH0gZnJvbSAnY2hhcnQuanMnO1xuXG5pZiAocmVnaXN0ZXJhYmxlcykge1xuICAgIENoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xufVxubGV0IGlzQ2hhcnRJbml0aWFsaXplZCA9IGZhbHNlO1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAoIWlzQ2hhcnRJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaXNDaGFydEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnaW5pdCcsIHtcbiAgICAgICAgICAgICAgICBDaGFydCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52aWV3VmFsdWU7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQub3B0aW9ucykgJiYgMCA9PT0gcGF5bG9hZC5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF5bG9hZC5vcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHBheWxvYWQub3B0aW9ucyxcbiAgICAgICAgICAgIGNvbmZpZzogcGF5bG9hZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKCFjYW52YXNDb250ZXh0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXRDb250ZXh0KCkgZnJvbSBFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjYW52YXNDb250ZXh0LCBwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjaGFydDogdGhpcy5jaGFydCB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0JywgeyBjaGFydDogdGhpcy5jaGFydCB9KTtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmlld1ZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdWYWx1ZSA9IHsgZGF0YTogdGhpcy52aWV3VmFsdWUuZGF0YSwgb3B0aW9uczogdGhpcy52aWV3VmFsdWUub3B0aW9ucyB9O1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmlld1ZhbHVlLm9wdGlvbnMpICYmIDAgPT09IHZpZXdWYWx1ZS5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZpZXdWYWx1ZS5vcHRpb25zID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ZpZXctdmFsdWUtY2hhbmdlJywgdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGF0YSA9IHZpZXdWYWx1ZS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jaGFydC5vcHRpb25zID0gdmlld1ZhbHVlLm9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgdGhpcy5jaGFydC5vcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7cGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArIDF9cHhgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LnN0eWxlLndpZHRoID0gb3JpZ2luYWxXaWR0aDtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnY2hhcnRqcycgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICB2aWV3OiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbInN0YXJ0U3RpbXVsdXNBcHAiLCJGbGF0cGlja3JDb250cm9sbGVyIiwiRmlsZUlucHV0Q29udHJvbGxlciIsIlBhZ2VQcmVsb2FkZXJDb250cm9sbGVyIiwicHJvZmlsZU1lbnVDb250cm9sbGVyIiwiVG9vbHRpcHNDb250cm9sbGVyIiwiQ29sbGVjdGlvbkZvcm1Db250cm9sbGVyIiwiUmF0aW5nVmFsdWVDb250cm9sbGVyIiwiQ2FycG9vbEZpbHRlcnNDb250cm9sbGVyIiwiUG9wb3ZlcnNDb250cm9sbGVyIiwiQ2FycG9vbERldGFpbHNGZXRjaENvbnRyb2xsZXIiLCJhcHAiLCJyZWdpc3RlciIsIkNvbnRyb2xsZXIiLCJ0dXJib19jb250cm9sbGVyIiwiZGVmYXVsdCIsImFjY2Vzc0NvbnRyb2wiLCJlbGVtZW50TGlzdCIsImZvckVhY2giLCJfcmVmIiwiaW5kZXgiLCJlbGVtZW50IiwiZGVzY3JpcHRpb24iLCJOb2RlTGlzdCIsImxlbmd0aCIsImVycm9yTXNnIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJzZWxlY3QiLCJjc3NTZWxlY3RvciIsImFsbCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRyaW0iLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwib24iLCJldmVudFR5cGUiLCJjYWxsYmFjayIsInNlbGVjdEVsIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwib25TY3JvbGwiLCJ0YXJnZXQiLCJzY3JvbGxUb0VsZW1lbnQiLCJzZXRUaW1lb3V0IiwibmF2YmFyIiwib2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJQb3BvdmVyIiwiZGVmYXVsdF8xIiwiY29uc3RydWN0b3IiLCJib3VuZExvYWREZXRhaWxzIiwibG9hZERldGFpbHMiLCJiaW5kIiwiaXNMb2FkaW5nIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXJsVmFsdWUiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJodG1sIiwidGV4dCIsInBvcG92ZXIiLCJnZXRJbnN0YW5jZSIsInNldENvbnRlbnQiLCJlIiwidmFsdWVzIiwidXJsIiwiU3RyaW5nIiwiSXNvdG9wZSIsImlzb3RvcGVJbnN0YW5jZXMiLCJmaWx0ZXJzIiwiZmlsdGVyQ2FycG9vbFNlYXJjaFJlc3VsdHNGb3JUb2RheSIsImZpbHRlckNhcnBvb2xTZWFyY2hSZXN1bHRzRm9yRm9sbG93aW5nRGF5cyIsInRvZGF5R3JpZCIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJnZXRTb3J0RGF0YSIsInByaWNlIiwiZHVyYXRpb24iLCJyYXRpbmciLCJlY29sb2dpY2FsIiwiYWRqdXN0Q2FyZFBvc2l0aW9uc0lmTmVjZXNzYXJ5IiwicmVmcmVzaEZpbHRlckJ1dHRvblRleHQiLCJmb2xsb3dpbmdEYXlzR3JpZCIsImZvbGxvd2luZ0RheXNTZWN0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1Zpc2libGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImluaXRGb2xsb3dpbmdEYXlzSXNvdG9wZSIsImFwcGx5RmlsdGVycyIsImFycmFuZ2UiLCJncm91cElkIiwiY3VycmVudEZpbHRlcnMiLCJmaWx0ZXIiLCJpdGVtRWxlbSIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwicGFyc2VGbG9hdCIsInByaWNlTWF0Y2giLCJkdXJhdGlvbk1hdGNoIiwicmF0aW5nTWF0Y2giLCJlY29NYXRjaCIsImVjbyIsInRvZ2dsZUVjbyIsImV2ZW50IiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpc0FjdGl2ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbHRlckJ5UHJpY2UiLCJpbnB1dCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJmaWx0ZXJCeUR1cmF0aW9uIiwiZmlsdGVyQnlSYXRpbmciLCJyZXNldCIsImVjb0J1dHRvbiIsImVjb0J1dHRvblRhcmdldCIsImVjb0xhYmVsIiwicmVtb3ZlIiwicHJpY2VTbGlkZXIiLCJwcmljZVNsaWRlclRhcmdldCIsInByaWNlVmFsdWUiLCJtYXgiLCJkdXJhdGlvblNsaWRlciIsImR1cmF0aW9uU2xpZGVyVGFyZ2V0IiwiZHVyYXRpb25WYWx1ZSIsInJhdGluZ1NsaWRlciIsInJhdGluZ1NsaWRlclRhcmdldCIsInJhdGluZ1ZhbHVlIiwibWluIiwiYWxsRmlsdGVyc0RlZmF1bHQiLCJncmlkIiwidmlzaWJsZUl0ZW1zIiwiaXRlbSIsImNvbXB1dGVkU3R5bGUiLCJ2aXNpYmlsaXR5IiwiaW5uZXJIVE1MIiwicmVzdWx0Q291bnQiLCJncmlkSWQiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJpdGVtcyIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidGFyZ2V0cyIsImNvbGxlY3Rpb25Db250YWluZXJUYXJnZXQiLCJhZGREZWxldGVMaW5rIiwiYWRkQ29sbGVjdGlvbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwicHJvdG90eXBlVmFsdWUiLCJyZXBsYWNlIiwiaW5kZXhWYWx1ZSIsInRvU3RyaW5nIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVGb3JtQnV0dG9uIiwic2V0QXR0cmlidXRlIiwidHJhc2hJY29uRWxlbWVudCIsInRyYXNoSWNvbkhUTUwiLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsInByb3RvdHlwZSIsInNlbGVjdG9ycyIsInRyaWdnZXJTZWxlY3RvciIsImZpbGVJbnB1dFNlbGVjdG9yIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaGFuZGxlVHJpZ2dlckNsaWNrIiwiZmlsZUlucHV0IiwiY2xpY2siLCJmbGF0cGlja3IiLCJGcmVuY2giLCJtb2RlIiwib3B0aW9ucyIsImdldEZsYXRwaWNrck9wdGlvbnMiLCJkYXRlSW5wdXRUYXJnZXRzIiwibG9jYWxlIiwiYWxsb3dJbnB1dCIsImFsdElucHV0IiwiZGF0ZUZvcm1hdCIsInRvZGF5IiwiRGF0ZSIsIm1pbkRhdGUiLCJkZWZhdWx0RGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhbHRGb3JtYXQiLCJtYXhEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJlbmFibGVUaW1lIiwiZGVmYXVsdE1pbkRhdGUiLCJkZWZhdWx0TWF4RGF0ZSIsIkJhc2VDb250cm9sbGVyIiwiaW5pdGlhbGl6ZWQiLCJwYWdlUHJlbG9hZGVyIiwicmVtb3ZlUHJlbG9hZGVyIiwibGlzdGVuVHVyYm8iLCJwb3BvdmVyc1NlbGVjdG9yIiwicG9wb3ZlclRyaWdnZXJMaXN0IiwicG9wb3ZlclRyaWdnZXJFbCIsInVzZXJCdG5TZWxlY3RvciIsInVzZXJCdXR0b25zIiwidXNlckJ0biIsInVwZGF0ZVZhbHVlIiwicmFuZ2VUYXJnZXQiLCJvdXRwdXRUYXJnZXQiLCJUb29sdGlwIiwidG9vbHRpcHNTZWxlY3RvciIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJyZWdpc3RlcmFibGVzIiwiQ2hhcnQiLCJpc0NoYXJ0SW5pdGlhbGl6ZWQiLCJjaGFydCIsImRpc3BhdGNoRXZlbnQiLCJIVE1MQ2FudmFzRWxlbWVudCIsInBheWxvYWQiLCJ2aWV3VmFsdWUiLCJpc0FycmF5IiwiY29uZmlnIiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJkZXN0cm95Iiwidmlld1ZhbHVlQ2hhbmdlZCIsImRhdGEiLCJ1cGRhdGUiLCJwYXJlbnRFbGVtZW50IiwicmVzcG9uc2l2ZSIsIm9yaWdpbmFsV2lkdGgiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibmFtZSIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmlldyIsIk9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=