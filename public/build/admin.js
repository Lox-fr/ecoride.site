"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/scripts/admin.js":
/*!*********************************!*\
  !*** ./assets/scripts/admin.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-zoom */ "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.esm.js");

document.addEventListener('chartjs:init', function (event) {
  const Chart = event.detail.Chart;
  Chart.register(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_dist_chunks_helpers_segment_js","vendors-node_modules_chartjs-plugin-zoom_dist_chartjs-plugin-zoom_esm_js"], function() { return __webpack_exec__("./assets/scripts/admin.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFFN0NDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUN2RCxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDRCxLQUFLO0VBQ2hDQSxLQUFLLENBQUNFLFFBQVEsQ0FBQ04sMkRBQVUsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgem9vbVBsdWdpbiBmcm9tICdjaGFydGpzLXBsdWdpbi16b29tJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYXJ0anM6aW5pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgY29uc3QgQ2hhcnQgPSBldmVudC5kZXRhaWwuQ2hhcnQ7XHJcbiAgICBDaGFydC5yZWdpc3Rlcih6b29tUGx1Z2luKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ6b29tUGx1Z2luIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJDaGFydCIsImRldGFpbCIsInJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==