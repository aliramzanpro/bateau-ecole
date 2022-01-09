(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

(function () {
  'use strict';

  var Menu = /*#__PURE__*/function () {
    function Menu(settings) {
      _classCallCheck(this, Menu);

      this.menuNode = settings.menuNode;
      this.state = false;
      this.menuStateTextNode = settings.menuStateTextNode || this.menuNode.querySelector('.menu__screen-reader');
      this.menuOpenedText = settings.menuOpenedText || 'Open menu';
      this.menuClosedText = settings.menuClosedText || 'Close menu';
    }

    _createClass(Menu, [{
      key: "changeState",
      value: function changeState(state) {
        return this.state = !state;
      }
    }, {
      key: "changeStateText",
      value: function changeStateText(state, node) {
        var text = state !== true ? this.menuOpenedText : this.menuClosedText;
        node.textContent = text;
        return text;
      }
    }, {
      key: "toggleMenuState",
      value: function toggleMenuState(className) {
        var state;

        if (typeof className !== 'string' || className.length === 0) {
          return console.log('you did not give the class for the toggleState function');
        }

        state = this.changeState(this.state);
        this.changeStateText(state, this.menuStateTextNode);
        this.menuNode.classList.toggle(className);
        return state;
      }
    }]);

    return Menu;
  }();

  var jsMenuNode = document.querySelector('.menu');
  var demoMenu = new Menu({
    menuNode: jsMenuNode
  });

  function callMenuToggle(event) {
    demoMenu.toggleMenuState('menu_activated');
  }

  jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
})();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJkb2N1bWVudCIsInJlYWR5IiwicG9wb3ZlciIsIk1lbnUiLCJzZXR0aW5ncyIsIm1lbnVOb2RlIiwic3RhdGUiLCJtZW51U3RhdGVUZXh0Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51T3BlbmVkVGV4dCIsIm1lbnVDbG9zZWRUZXh0Iiwibm9kZSIsInRleHQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTdGF0ZSIsImNoYW5nZVN0YXRlVGV4dCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImpzTWVudU5vZGUiLCJkZW1vTWVudSIsImNhbGxNZW51VG9nZ2xlIiwiZXZlbnQiLCJ0b2dnbGVNZW51U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7QUFDQTs7QUFFQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakIsQyxDQUNBO0FBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLGdFQUFELENBQVAsQyxDQUVBO0FBQ0E7QUFDQTs7O0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkgsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJJLE9BQTdCO0FBQ0gsQ0FGRDs7QUFLQSxDQUFDLFlBQVk7QUFDVDs7QUFEUyxNQUdIQyxJQUhHO0FBSUwsa0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDbEIsV0FBS0MsUUFBTCxHQUFnQkQsUUFBUSxDQUFDQyxRQUF6QjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS0MsaUJBQUwsR0FBeUJILFFBQVEsQ0FBQ0csaUJBQVQsSUFBOEIsS0FBS0YsUUFBTCxDQUFjRyxhQUFkLENBQTRCLHNCQUE1QixDQUF2RDtBQUNBLFdBQUtDLGNBQUwsR0FBc0JMLFFBQVEsQ0FBQ0ssY0FBVCxJQUEyQixXQUFqRDtBQUNBLFdBQUtDLGNBQUwsR0FBc0JOLFFBQVEsQ0FBQ00sY0FBVCxJQUEyQixZQUFqRDtBQUNIOztBQVZJO0FBQUE7QUFBQSxrQ0FZT0osS0FaUCxFQVljO0FBQ2YsZUFBTyxLQUFLQSxLQUFMLEdBQWEsQ0FBQ0EsS0FBckI7QUFDSDtBQWRJO0FBQUE7QUFBQSxzQ0FnQldBLEtBaEJYLEVBZ0JrQkssSUFoQmxCLEVBZ0J3QjtBQUN6QixZQUFJQyxJQUFJLEdBQUlOLEtBQUssS0FBSyxJQUFYLEdBQW1CLEtBQUtHLGNBQXhCLEdBQXlDLEtBQUtDLGNBQXpEO0FBRUFDLFlBQUksQ0FBQ0UsV0FBTCxHQUFtQkQsSUFBbkI7QUFDQSxlQUFPQSxJQUFQO0FBQ0g7QUFyQkk7QUFBQTtBQUFBLHNDQXVCV0UsU0F2QlgsRUF1QnNCO0FBRXZCLFlBQUlSLEtBQUo7O0FBRUEsWUFBSSxPQUFPUSxTQUFQLEtBQXFCLFFBQXJCLElBQWlDQSxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBMUQsRUFBNkQ7QUFDekQsaUJBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlEQUFaLENBQVA7QUFDSDs7QUFFRFgsYUFBSyxHQUFHLEtBQUtZLFdBQUwsQ0FBaUIsS0FBS1osS0FBdEIsQ0FBUjtBQUVBLGFBQUthLGVBQUwsQ0FBcUJiLEtBQXJCLEVBQTRCLEtBQUtDLGlCQUFqQztBQUNBLGFBQUtGLFFBQUwsQ0FBY2UsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0JQLFNBQS9CO0FBRUEsZUFBT1IsS0FBUDtBQUNIO0FBckNJOztBQUFBO0FBQUE7O0FBd0NULE1BQU1nQixVQUFVLEdBQUd0QixRQUFRLENBQUNRLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQSxNQUFNZSxRQUFRLEdBQUcsSUFBSXBCLElBQUosQ0FBUztBQUN0QkUsWUFBUSxFQUFFaUI7QUFEWSxHQUFULENBQWpCOztBQUlBLFdBQVNFLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzNCRixZQUFRLENBQUNHLGVBQVQsQ0FBeUIsZ0JBQXpCO0FBQ0g7O0FBRURKLFlBQVUsQ0FBQ2QsYUFBWCxDQUF5QixlQUF6QixFQUEwQ21CLGdCQUExQyxDQUEyRCxPQUEzRCxFQUFvRUgsY0FBcEU7QUFDSCxDQWxERCxJOzs7Ozs7Ozs7OztBQzNCQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHRoaXMgXCJtb2RpZmllc1wiIHRoZSBqcXVlcnkgbW9kdWxlOiBhZGRpbmcgYmVoYXZpb3IgdG8gaXRcbi8vIHRoZSBib290c3RyYXAgbW9kdWxlIGRvZXNuJ3QgZXhwb3J0L3JldHVybiBhbnl0aGluZ1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIG9yIHlvdSBjYW4gaW5jbHVkZSBzcGVjaWZpYyBwaWVjZXNcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG59KTtcblxuXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNsYXNzIE1lbnUge1xuICAgICAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5tZW51Tm9kZSA9IHNldHRpbmdzLm1lbnVOb2RlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tZW51U3RhdGVUZXh0Tm9kZSA9IHNldHRpbmdzLm1lbnVTdGF0ZVRleHROb2RlIHx8IHRoaXMubWVudU5vZGUucXVlcnlTZWxlY3RvcignLm1lbnVfX3NjcmVlbi1yZWFkZXInKTtcbiAgICAgICAgICAgIHRoaXMubWVudU9wZW5lZFRleHQgPSBzZXR0aW5ncy5tZW51T3BlbmVkVGV4dCB8fCAnT3BlbiBtZW51JztcbiAgICAgICAgICAgIHRoaXMubWVudUNsb3NlZFRleHQgPSBzZXR0aW5ncy5tZW51Q2xvc2VkVGV4dCB8fCAnQ2xvc2UgbWVudSc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VTdGF0ZShzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPSAhc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VTdGF0ZVRleHQoc3RhdGUsIG5vZGUpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gKHN0YXRlICE9PSB0cnVlKSA/IHRoaXMubWVudU9wZW5lZFRleHQgOiB0aGlzLm1lbnVDbG9zZWRUZXh0O1xuXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlTWVudVN0YXRlKGNsYXNzTmFtZSkge1xuXG4gICAgICAgICAgICBsZXQgc3RhdGU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lICE9PSAnc3RyaW5nJyB8fCBjbGFzc05hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd5b3UgZGlkIG5vdCBnaXZlIHRoZSBjbGFzcyBmb3IgdGhlIHRvZ2dsZVN0YXRlIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5jaGFuZ2VTdGF0ZSh0aGlzLnN0YXRlKTtcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZVRleHQoc3RhdGUsIHRoaXMubWVudVN0YXRlVGV4dE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5tZW51Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpzTWVudU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgIGNvbnN0IGRlbW9NZW51ID0gbmV3IE1lbnUoe1xuICAgICAgICBtZW51Tm9kZToganNNZW51Tm9kZVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2FsbE1lbnVUb2dnbGUoZXZlbnQpIHtcbiAgICAgICAgZGVtb01lbnUudG9nZ2xlTWVudVN0YXRlKCdtZW51X2FjdGl2YXRlZCcpO1xuICAgIH1cblxuICAgIGpzTWVudU5vZGUucXVlcnlTZWxlY3RvcignLm1lbnVfX3RvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbE1lbnVUb2dnbGUpO1xufSkoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9