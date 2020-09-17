(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Note_Components/cybersecurity/cybersecurity.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Note_Components/cybersecurity/cybersecurity.component.ts ***!
  \**************************************************************************/
/*! exports provided: CybersecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CybersecurityComponent", function() { return CybersecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cybersecurity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cybersecurity.service */ "./src/app/services/cybersecurity.service.ts");



class CybersecurityComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllCyberSecurity();
    }
}
CybersecurityComponent.ɵfac = function CybersecurityComponent_Factory(t) { return new (t || CybersecurityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cybersecurity_service__WEBPACK_IMPORTED_MODULE_1__["CybersecurityService"])); };
CybersecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CybersecurityComponent, selectors: [["app-cybersecurity"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function CybersecurityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL2N5YmVyc2VjdXJpdHkvY3liZXJzZWN1cml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7Ozs7QUFJSjs7QUFNQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7OztBQUd0Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixLQUFLO0lBQ0wsWUFBWTs7OztBQUloQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Ozs7O0FBS25COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL05vdGVfQ29tcG9uZW50cy9jeWJlcnNlY3VyaXR5L2N5YmVyc2VjdXJpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2aWdhdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2OTBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgwcHgpIGFuZCAobWF4LXdpZHRoOiA2OTBweCl7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmlnYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWluZXIxe1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcblxyXG4gICAgXHJcbn1cclxuI2Fuc3dlcntcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4jZnVsbHBhZ2V7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOjA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG59XHJcbiNyYW5kb217XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbGVmdDogNSU7XHJcbn1cclxuI2Zvb3Rlcl9oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuI2Zvb3Rlcl90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CybersecurityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cybersecurity',
                templateUrl: './cybersecurity.component.html',
                styleUrls: ['./cybersecurity.component.css']
            }]
    }], function () { return [{ type: src_app_services_cybersecurity_service__WEBPACK_IMPORTED_MODULE_1__["CybersecurityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/java/java.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Note_Components/java/java.component.ts ***!
  \********************************************************/
/*! exports provided: JavaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaComponent", function() { return JavaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_java_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/java.service */ "./src/app/services/java.service.ts");



class JavaComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllJava();
    }
}
JavaComponent.ɵfac = function JavaComponent_Factory(t) { return new (t || JavaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_java_service__WEBPACK_IMPORTED_MODULE_1__["JavaService"])); };
JavaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaComponent, selectors: [["app-java"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function JavaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL2phdmEvamF2YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7Ozs7QUFJSjs7QUFNQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7OztBQUd0Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixLQUFLO0lBQ0wsWUFBWTs7OztBQUloQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Ozs7O0FBS25COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL05vdGVfQ29tcG9uZW50cy9qYXZhL2phdmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2aWdhdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2OTBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgwcHgpIGFuZCAobWF4LXdpZHRoOiA2OTBweCl7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmlnYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWluZXIxe1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcblxyXG4gICAgXHJcbn1cclxuI2Fuc3dlcntcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4jZnVsbHBhZ2V7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOjA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogODAlO1xyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG59XHJcbiNyYW5kb217XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbGVmdDogNSU7XHJcbn1cclxuI2Zvb3Rlcl9oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuI2Zvb3Rlcl90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-java',
                templateUrl: './java.component.html',
                styleUrls: ['./java.component.css']
            }]
    }], function () { return [{ type: src_app_services_java_service__WEBPACK_IMPORTED_MODULE_1__["JavaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/jsp/jsp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Note_Components/jsp/jsp.component.ts ***!
  \******************************************************/
/*! exports provided: JspComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JspComponent", function() { return JspComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JspComponent {
    constructor() { }
    ngOnInit() {
    }
}
JspComponent.ɵfac = function JspComponent_Factory(t) { return new (t || JspComponent)(); };
JspComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JspComponent, selectors: [["app-jsp"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function JspComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL2pzcC9qc3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztBQUVKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOzs7O0FBSUo7O0FBTUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsS0FBSztJQUNMLFlBQVk7Ozs7QUFJaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOzs7OztBQUtuQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9Ob3RlX0NvbXBvbmVudHMvanNwL2pzcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIyMCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZpZ2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY5MHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY5MHB4KXtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5NSUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2aWdhdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lcjF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuXHJcbiAgICBcclxufVxyXG4jYW5zd2Vye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbiNmdWxscGFnZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JspComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jsp',
                templateUrl: './jsp.component.html',
                styleUrls: ['./jsp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/kafka/kafka.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Note_Components/kafka/kafka.component.ts ***!
  \**********************************************************/
/*! exports provided: KafkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafkaComponent", function() { return KafkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_kafka_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/kafka.service */ "./src/app/services/kafka.service.ts");



class KafkaComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllKafka();
    }
}
KafkaComponent.ɵfac = function KafkaComponent_Factory(t) { return new (t || KafkaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_kafka_service__WEBPACK_IMPORTED_MODULE_1__["KafkaService"])); };
KafkaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KafkaComponent, selectors: [["app-kafka"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function KafkaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL2thZmthL2thZmthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztBQUVKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7OztBQUlKOztBQU1BO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjs7O0FBR3RCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLEtBQUs7SUFDTCxZQUFZOzs7O0FBSWhCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTs7Ozs7QUFLbkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvTm90ZV9Db21wb25lbnRzL2thZmthL2thZmthLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmlnYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjkwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogNjkwcHgpe1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZpZ2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4jY29udGFpbmVyMXtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG5cclxuICAgIFxyXG59XHJcbiNhbnN3ZXJ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuI2Z1bGxwYWdle1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDowO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxufVxyXG4jcmFuZG9te1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGxlZnQ6IDUlO1xyXG59XHJcbiNmb290ZXJfaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNmb290ZXJfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KafkaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kafka',
                templateUrl: './kafka.component.html',
                styleUrls: ['./kafka.component.css']
            }]
    }], function () { return [{ type: src_app_services_kafka_service__WEBPACK_IMPORTED_MODULE_1__["KafkaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/owasp/owasp.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Note_Components/owasp/owasp.component.ts ***!
  \**********************************************************/
/*! exports provided: OWASPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWASPComponent", function() { return OWASPComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_owasp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/owasp.service */ "./src/app/services/owasp.service.ts");



class OWASPComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllOWASP();
    }
}
OWASPComponent.ɵfac = function OWASPComponent_Factory(t) { return new (t || OWASPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_owasp_service__WEBPACK_IMPORTED_MODULE_1__["OWASPService"])); };
OWASPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OWASPComponent, selectors: [["app-owasp"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function OWASPComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL293YXNwL293YXNwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztBQUVKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7OztBQUlKOztBQU1BO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjs7O0FBR3RCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLEtBQUs7SUFDTCxZQUFZOzs7O0FBSWhCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTs7Ozs7QUFLbkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvTm90ZV9Db21wb25lbnRzL293YXNwL293YXNwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmlnYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjkwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogNjkwcHgpe1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZpZ2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4jY29udGFpbmVyMXtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG5cclxuICAgIFxyXG59XHJcbiNhbnN3ZXJ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuI2Z1bGxwYWdle1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDowO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxufVxyXG4jcmFuZG9te1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGxlZnQ6IDUlO1xyXG59XHJcbiNmb290ZXJfaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNmb290ZXJfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OWASPComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-owasp',
                templateUrl: './owasp.component.html',
                styleUrls: ['./owasp.component.css']
            }]
    }], function () { return [{ type: src_app_services_owasp_service__WEBPACK_IMPORTED_MODULE_1__["OWASPService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/spark/spark.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Note_Components/spark/spark.component.ts ***!
  \**********************************************************/
/*! exports provided: SparkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkComponent", function() { return SparkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SparkComponent {
    constructor() { }
    ngOnInit() {
    }
}
SparkComponent.ɵfac = function SparkComponent_Factory(t) { return new (t || SparkComponent)(); };
SparkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SparkComponent, selectors: [["app-spark"]], decls: 31, vars: 0, consts: [["id", "fullpage"], ["id", "container"], ["id", "question"], ["id", "show"], ["id", "answer"], [2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container2"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function SparkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n    }\r\n\r\n}\r\n\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 50%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    color: darkgoldenrod;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 25%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 20%;\r\n\r\n    \r\n}\r\n\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: lavender;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n\r\n#container2[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    right: 0;\r\n    position: relative;\r\n    top: auto;\r\n    \r\n\r\n}\r\n\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: relative;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL3NwYXJrL3NwYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7SUFDYjs7QUFFSjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixLQUFLO0lBQ0wsWUFBWTs7OztBQUloQjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsU0FBUzs7O0FBR2I7OztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvTm90ZV9Db21wb25lbnRzL3NwYXJrL3NwYXJrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG5cclxuICAgICNjb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG5cclxuICAgIFxyXG59XHJcbiNhbnN3ZXJ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuI2Z1bGxwYWdle1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuI2NvbnRhaW5lcjJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBcclxuXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SparkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spark',
                templateUrl: './spark.component.html',
                styleUrls: ['./spark.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/spring/spring.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Note_Components/spring/spring.component.ts ***!
  \************************************************************/
/*! exports provided: SpringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringComponent", function() { return SpringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_spring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spring.service */ "./src/app/services/spring.service.ts");



class SpringComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllSpring();
    }
}
SpringComponent.ɵfac = function SpringComponent_Factory(t) { return new (t || SpringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_spring_service__WEBPACK_IMPORTED_MODULE_1__["SpringService"])); };
SpringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpringComponent, selectors: [["app-spring"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function SpringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL3NwcmluZy9zcHJpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztBQUVKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOzs7O0FBSUo7O0FBTUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsS0FBSztJQUNMLFlBQVk7Ozs7QUFJaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOzs7OztBQUtuQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9Ob3RlX0NvbXBvbmVudHMvc3ByaW5nL3NwcmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIyMCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZpZ2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY5MHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY5MHB4KXtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5NSUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2aWdhdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lcjF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuXHJcbiAgICBcclxufVxyXG4jYW5zd2Vye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbiNmdWxscGFnZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spring',
                templateUrl: './spring.component.html',
                styleUrls: ['./spring.component.css']
            }]
    }], function () { return [{ type: src_app_services_spring_service__WEBPACK_IMPORTED_MODULE_1__["SpringService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Note_Components/sql/sql.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Note_Components/sql/sql.component.ts ***!
  \******************************************************/
/*! exports provided: SqlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlComponent", function() { return SqlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sql.service */ "./src/app/services/sql.service.ts");



class SqlComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllSQL();
    }
}
SqlComponent.ɵfac = function SqlComponent_Factory(t) { return new (t || SqlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sql_service__WEBPACK_IMPORTED_MODULE_1__["SqlService"])); };
SqlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SqlComponent, selectors: [["app-sql"]], decls: 37, vars: 0, consts: [["id", "fullpage"], ["id", "container1"], ["id", "question"], ["id", "show"], ["id", "answer"], ["id", "navigation", 2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function SqlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u21D0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u21D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 580px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 180% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 220% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 280% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 690px) and (max-width: 1200px){\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 80% !important;\r\n        left: 10% !important;\r\n        margin-top: 50% !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) and (max-width: 690px){\r\n\r\n    #container1[_ngcontent-%COMP%]{\r\n        width: 80% !important;\r\n        left: 20px !important;\r\n        top: 50px;\r\n        margin-bottom: 95% !important;\r\n        left: 10% !important;\r\n        margin-top: 30% !important;\r\n    }\r\n\r\n    #navigation[_ngcontent-%COMP%]{\r\n        width: 50% !important;\r\n    }\r\n\r\n    \r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 75%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    color: black;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 13%;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-bottom: 30%;\r\n\r\n    \r\n}\r\n\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: whitesmoke;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n    height: auto;\r\n  \r\n    \r\n   \r\n}\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 80%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90ZV9Db21wb25lbnRzL3NxbC9zcWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDhCQUE4QjtRQUM5QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztBQUVKOztBQUVBOztJQUVJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOzs7O0FBSUo7O0FBTUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCOzs7QUFHdEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsS0FBSztJQUNMLFlBQVk7Ozs7QUFJaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOzs7OztBQUtuQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9Ob3RlX0NvbXBvbmVudHMvc3FsL3NxbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIyMCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhaW5lcjF7XHJcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZpZ2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY5MHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICNjb250YWluZXIxe1xyXG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY5MHB4KXtcclxuXHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5NSUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2aWdhdGlvbntcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lcjF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTMlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuXHJcbiAgICBcclxufVxyXG4jYW5zd2Vye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbiNmdWxscGFnZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sql',
                templateUrl: './sql.component.html',
                styleUrls: ['./sql.component.css']
            }]
    }], function () { return [{ type: src_app_services_sql_service__WEBPACK_IMPORTED_MODULE_1__["SqlService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'coding';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#wrapper[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_Note_Components_java_java_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Note_Components/java/java.component */ "./src/app/Note_Components/java/java.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var src_app_Note_Components_sql_sql_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Note_Components/sql/sql.component */ "./src/app/Note_Components/sql/sql.component.ts");
/* harmony import */ var src_app_Note_Components_spring_spring_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Note_Components/spring/spring.component */ "./src/app/Note_Components/spring/spring.component.ts");
/* harmony import */ var src_app_Note_Components_kafka_kafka_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Note_Components/kafka/kafka.component */ "./src/app/Note_Components/kafka/kafka.component.ts");
/* harmony import */ var src_app_Note_Components_spark_spark_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Note_Components/spark/spark.component */ "./src/app/Note_Components/spark/spark.component.ts");
/* harmony import */ var src_app_Note_Components_owasp_owasp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Note_Components/owasp/owasp.component */ "./src/app/Note_Components/owasp/owasp.component.ts");
/* harmony import */ var src_app_Note_Components_cybersecurity_cybersecurity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Note_Components/cybersecurity/cybersecurity.component */ "./src/app/Note_Components/cybersecurity/cybersecurity.component.ts");
/* harmony import */ var src_app_Note_Components_jsp_jsp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Note_Components/jsp/jsp.component */ "./src/app/Note_Components/jsp/jsp.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");















 // CLI imports router




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'java', component: src_app_Note_Components_java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"] },
    { path: 'sql', component: src_app_Note_Components_sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"] },
    { path: 'spring', component: src_app_Note_Components_spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"] },
    { path: 'kafka', component: src_app_Note_Components_kafka_kafka_component__WEBPACK_IMPORTED_MODULE_11__["KafkaComponent"] },
    { path: 'owasp', component: src_app_Note_Components_owasp_owasp_component__WEBPACK_IMPORTED_MODULE_13__["OWASPComponent"] },
    { path: 'cybersecurity', component: src_app_Note_Components_cybersecurity_cybersecurity_component__WEBPACK_IMPORTED_MODULE_14__["CybersecurityComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        src_app_Note_Components_java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        src_app_Note_Components_sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"],
        src_app_Note_Components_spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"],
        src_app_Note_Components_kafka_kafka_component__WEBPACK_IMPORTED_MODULE_11__["KafkaComponent"],
        src_app_Note_Components_spark_spark_component__WEBPACK_IMPORTED_MODULE_12__["SparkComponent"],
        src_app_Note_Components_owasp_owasp_component__WEBPACK_IMPORTED_MODULE_13__["OWASPComponent"],
        src_app_Note_Components_cybersecurity_cybersecurity_component__WEBPACK_IMPORTED_MODULE_14__["CybersecurityComponent"],
        src_app_Note_Components_jsp_jsp_component__WEBPACK_IMPORTED_MODULE_15__["JspComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    src_app_Note_Components_java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    src_app_Note_Components_sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"],
                    src_app_Note_Components_spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"],
                    src_app_Note_Components_kafka_kafka_component__WEBPACK_IMPORTED_MODULE_11__["KafkaComponent"],
                    src_app_Note_Components_spark_spark_component__WEBPACK_IMPORTED_MODULE_12__["SparkComponent"],
                    src_app_Note_Components_owasp_owasp_component__WEBPACK_IMPORTED_MODULE_13__["OWASPComponent"],
                    src_app_Note_Components_cybersecurity_cybersecurity_component__WEBPACK_IMPORTED_MODULE_14__["CybersecurityComponent"],
                    src_app_Note_Components_jsp_jsp_component__WEBPACK_IMPORTED_MODULE_15__["JspComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: [".container[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    right: 0px;\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
        let java;
        let sql;
        let full = [];
        java.name = 'Java';
        java.picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlO3uerl5SbAjJijs7pOJukdZiZKqEz5Kbg&usqp=CAU';
        java.routing = 'java';
        //////
        sql.name = 'SQL';
        sql.picture_url = 'https://.google.com/imgres?imgurl=https%3A%2F%2Fstackify.com%2Fwp-content%2Fuploads%2F2018%2F09%2FJava-Debugging-Tips-1280x720.jpg&imgrefurl=https%3A%2F%2Fstackify.com%2Fjava-debugging-tips%2F&tbnid=fUmYaCzLoutqAM&vet=12ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ..i&docid=dFSS8AtmIKzMbM&w=1280&h=720&q=java&authuser=2&ved=2ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ';
        sql.routing = 'sql';
        full.push(sql);
        full.push(java);
        console.log(full);
        console.log(java.name);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 74, vars: 0, consts: [["id", "everything", 2, "min-width", "100%"], ["id", "fullpageheader"], ["id", "slider"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", "alt", "...", 1, "d-block", "w-100"], ["src", "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "alt", "...", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "welcome", 1, "jumbotron"], [1, "display-4"], [1, "lead"], [1, "my-4"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg"], ["id", "second_part", 1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4", 2, "font-size", "40px"], [1, "display-4", 2, "text-align", "center", "margin", "3%"], ["id", "recent_notes", 1, "card-deck", 2, "margin-bottom", "20%", "min-width", "100%"], ["id", "notes", 1, "card"], [1, "card-body"], ["id", "name", "routerLink", "kafka", "routerLinkActive", "active"], ["id", "name", "routerLink", "owasp", "routerLinkActive", "active"], ["id", "name", "routerLink", "cybersecurity", "routerLinkActive", "active"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hey, Programmers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Become your most unstoppable self");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Master any subject, one success at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "90% of professionals who use Coding Interview Dojo kill the interview.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Most Recent Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "OWASP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Back to the Basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Spark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sponsors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Partnerships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@media screen and (min-width: 200px) and (max-width: 300px){\r\n\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        margin-top: 80% !important;\r\n        margin-bottom: 1% !important;\r\n    }\r\n \r\n    #slider[_ngcontent-%COMP%]{\r\n        float: none !important;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n\r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 150% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n    #notes[_ngcontent-%COMP%]{\r\n        min-width: 100% !important;\r\n        right: .5% !important;\r\n    }\r\n    #recent_notes[_ngcontent-%COMP%]{\r\n        margin-bottom: 300% !important;\r\n        margin-top: 10% !important;\r\n        \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 300px) and (max-width: 400px){\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        margin-top: 60% !important;\r\n    }\r\n \r\n    #slider[_ngcontent-%COMP%]{\r\n        float: none !important;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n\r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 126% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n    #notes[_ngcontent-%COMP%]{\r\n        min-width: 100% !important;\r\n        right: .5% !important;\r\n    }\r\n    #recent_notes[_ngcontent-%COMP%]{\r\n        margin-bottom: 240% !important;\r\n        margin-top: 10% !important;\r\n        \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 400px) and (max-width: 500px){\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        margin-top: 40% !important;\r\n    }\r\n \r\n    #slider[_ngcontent-%COMP%]{\r\n        float: none !important;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n\r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 106% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n    #notes[_ngcontent-%COMP%]{\r\n        min-width: 70% !important;\r\n        left: 14% !important;\r\n    }\r\n    #recent_notes[_ngcontent-%COMP%]{\r\n        margin-bottom: 130% !important;\r\n        margin-top: 10% !important;\r\n        \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 500px) and (max-width: 600px){\r\n\r\n\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        margin-top: 20% !important;\r\n    }\r\n \r\n    #slider[_ngcontent-%COMP%]{\r\n        float: none !important;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n\r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 86.5% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n    #notes[_ngcontent-%COMP%]{\r\n        min-width: 70% !important;\r\n        left: 14% !important;\r\n    }\r\n    #recent_notes[_ngcontent-%COMP%]{\r\n        margin-bottom: 130% !important;\r\n        margin-top: 10% !important;\r\n        \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 600px) and (max-width: 800px){\r\n\r\n\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        margin-top: 15% !important;\r\n        height: 20% !important;\r\n    }\r\n    #welcome[_ngcontent-%COMP%]{\r\n        margin-top: -9%;\r\n    }\r\n\r\n  \r\n    #welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n\r\n    #welcome[_ngcontent-%COMP%]   #welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 70% !important;\r\n    }\r\n    #welcome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 50% !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]{\r\n        display: none !important;\r\n    }\r\n    #slider[_ngcontent-%COMP%]{\r\n        height: 100% !important;\r\n    }\r\n \r\n   \r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 50.5% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 120% !important;\r\n    }\r\n   \r\n    #recent_notes[_ngcontent-%COMP%]{\r\n       margin-bottom: 80% !important;\r\n        \r\n    }\r\n\r\n    #name[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 800px) and (max-width: 900px){\r\n   \r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        \r\n        \r\n    }\r\n  \r\n\r\n  \r\n    #welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 200% !important;\r\n    }\r\n\r\n    #welcome[_ngcontent-%COMP%]   #welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 70% !important;\r\n    }\r\n    #welcome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 50% !important;\r\n    }\r\n    #description[_ngcontent-%COMP%]{\r\n        display: none !important;\r\n    }\r\n    #slider[_ngcontent-%COMP%]{\r\n        height: 100% !important;\r\n    }\r\n \r\n   \r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 40.5% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 120% !important;\r\n    }\r\n   \r\n    #recent_notes[_ngcontent-%COMP%]{\r\n       margin-bottom: 80% !important;\r\n        \r\n    }\r\n\r\n    #name[_ngcontent-%COMP%]{\r\n        font-size: 150% !important;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1200px){\r\n\r\n\r\n  \r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        \r\n    }\r\n    #second_part[_ngcontent-%COMP%]{\r\n        margin-top: 36.7% !important;\r\n    }\r\n    #second_part[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 200% !important;\r\n    } \r\n\r\n    #recent_notes[_ngcontent-%COMP%]{\r\n        margin-bottom: 60% !important;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n#everything[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: auto;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    right: 0px;\r\n    top:0;\r\n    background-color: whitesmoke;\r\n\r\n}\r\n\r\n\r\n#fullpageheader[_ngcontent-%COMP%]{\r\n    \r\n    position: absolute;\r\n    width: 100%;\r\n    height: auto;\r\n    right: 0px;\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n    margin-bottom: 20%;\r\n    \r\n   \r\n  \r\n  }\r\n\r\n\r\n#slider[_ngcontent-%COMP%]{\r\n    float: right;\r\n    background-color:whitesmoke;\r\n    height: 100%;\r\n    width: 55%;\r\n    position: relative;\r\n    \r\n    \r\n\r\n}\r\n\r\n\r\n#carouselExampleControls[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n\r\n}\r\n\r\n\r\n#description[_ngcontent-%COMP%]{\r\n    padding: 1%;\r\n    \r\n    position: absolute;\r\n    margin-top: 3%;\r\n    \r\n    width: 80%;\r\n    text-align: center;\r\n    left: 10%;\r\n    \r\n}\r\n\r\n\r\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    letter-spacing: 2px;\r\n    color: black;\r\n    font-size: 120%;\r\n\r\n\r\n}\r\n\r\n\r\n#second_part[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-top: 36%;\r\n    background-color: salmon;\r\n\r\n}\r\n\r\n\r\n#notes[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    min-width: 30%;\r\n    max-width: 30%;\r\n    margin: 1%;\r\n    right: -2%;\r\n    position: relative;\r\n}\r\n\r\n\r\n#welcome[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 45%;\r\n    text-align: center;\r\n    \r\n    \r\n    padding: 2%;\r\n    padding-top: 10%;\r\n    height: 100%;\r\n\r\n\r\n    \r\n    \r\n}\r\n\r\n\r\n#left_text[_ngcontent-%COMP%]{\r\n    margin-top: 30%;\r\n}\r\n\r\n\r\n#left_side[_ngcontent-%COMP%]{\r\n    float: right;\r\n    position: relative;\r\n    margin-top: 600px;\r\n    position: static;\r\n}\r\n\r\n\r\n#content[_ngcontent-%COMP%]{\r\n    padding: 100px;\r\n    max-width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    background-color: lavender;\r\n    margin-bottom: 30%;\r\n    margin-top: 20px;\r\n\r\n\r\n}\r\n\r\n\r\n#second_content[_ngcontent-%COMP%]{\r\n    margin-top: 540px;\r\n    background-color: lightcoral;\r\n    position: relative;\r\n    padding: 60px;\r\n    text-align: center;\r\n    position: static;\r\n}\r\n\r\n\r\n#flashcard[_ngcontent-%COMP%]{\r\n    max-width: 30%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    border-color: black;\r\n    height: auto;\r\n    display: inline-table;\r\n    margin: 20px;\r\n    \r\n    \r\n}\r\n\r\n\r\n#picture[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    position: relative;\r\n  \r\n    width: 300px;\r\n    height: 300px;\r\n    background-image: -webkit-image-set();\r\n    background-image: image-set();\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    background-color: black;\r\n    border-width: 5px;\r\n\r\n}\r\n\r\n\r\n#name[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    background-color: whitesmoke;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin-top: 30%;\r\n    margin-bottom: 30%;\r\n\r\n}\r\n\r\n\r\n#welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 300%;\r\n}\r\n\r\n\r\n#welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    background-color: salmon;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    margin-top: 60%;\r\n    \r\n    \r\n\r\n\r\n}\r\n\r\n\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: absolute;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n    position: static;\r\n    left: 5%;\r\n}\r\n\r\n\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSwwQkFBMEI7UUFDMUIsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCLDBCQUEwQjs7SUFFOUI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QiwwQkFBMEI7O0lBRTlCO0FBQ0o7OztBQUtBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsMEJBQTBCOztJQUU5QjtBQUNKOzs7QUFHQTs7O0lBR0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsMEJBQTBCOztJQUU5QjtBQUNKOzs7QUFFQTs7O0lBR0k7UUFDSSwwQkFBMEI7UUFDMUIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COzs7SUFHQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTs7O1FBR0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOzs7SUFHQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO09BQ0csNkJBQTZCOztJQUVoQzs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOzs7QUFHQTs7SUFFSTtRQUNJLGdDQUFnQztRQUNoQyw0QkFBNEI7SUFDaEM7Ozs7SUFJQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTs7O1FBR0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOzs7SUFHQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO09BQ0csNkJBQTZCOztJQUVoQzs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7QUFFSjs7O0FBR0E7Ozs7SUFJSTtRQUNJLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7OztBQUdKOzs7QUFJQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsS0FBSztJQUNMLDRCQUE0Qjs7QUFFaEM7OztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvS0FBb0s7OztFQUd0Szs7O0FBRUY7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOzs7QUFDQTtJQUNJLFdBQVc7O0FBRWY7OztBQUNBO0lBQ0ksV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7O0FBRWI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlOzs7QUFHbkI7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7O0FBRTVCOzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZOzs7OztBQUtoQjs7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCOzs7QUFHcEI7OztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTs7O0FBR2hCOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7O0FBRXJCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOzs7OztBQUtuQjs7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xyXG5cclxuICAgICNmdWxscGFnZWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gXHJcbiAgICAjc2xpZGVye1xyXG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjc2Vjb25kX3BhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NlY29uZF9wYXJ0IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI25vdGVze1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAuNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNyZWNlbnRfbm90ZXN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgICAjZnVsbHBhZ2VoZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiBcclxuICAgICNzbGlkZXJ7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNzZWNvbmRfcGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMjYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2Vjb25kX3BhcnQgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjbm90ZXN7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IC41JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3JlY2VudF9ub3Rlc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgI2Z1bGxwYWdlaGVhZGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gXHJcbiAgICAjc2xpZGVye1xyXG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjc2Vjb25kX3BhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTA2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NlY29uZF9wYXJ0IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI25vdGVze1xyXG4gICAgICAgIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTQlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmVjZW50X25vdGVze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEzMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG5cclxuXHJcbiAgICAjZnVsbHBhZ2VoZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiBcclxuICAgICNzbGlkZXJ7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNzZWNvbmRfcGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4Ni41JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NlY29uZF9wYXJ0IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI25vdGVze1xyXG4gICAgICAgIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTQlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmVjZW50X25vdGVze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEzMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG5cclxuICAgICNmdWxscGFnZWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3dlbGNvbWV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTklO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgICN3ZWxjb21lIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICN3ZWxjb21lXHJcblxyXG4gICAgI3dlbGNvbWUgcHtcclxuICAgICAgICBmb250LXNpemU6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3dlbGNvbWUgYXtcclxuICAgICAgICBmb250LXNpemU6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNzbGlkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiBcclxuICAgXHJcbiAgICAjc2Vjb25kX3BhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAuNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNzZWNvbmRfcGFydCBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEyMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgICAjcmVjZW50X25vdGVze1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgI25hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgXHJcbiAgICAjZnVsbHBhZ2VoZWFkZXJ7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMjUlICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgLyogaGVpZ2h0OiA1MCUgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuICBcclxuXHJcbiAgXHJcbiAgICAjd2VsY29tZSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjd2VsY29tZVxyXG5cclxuICAgICN3ZWxjb21lIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICN3ZWxjb21lIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNkZXNjcmlwdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2xpZGVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gXHJcbiAgIFxyXG4gICAgI3NlY29uZF9wYXJ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2Vjb25kX3BhcnQgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgI3JlY2VudF9ub3Rlc3tcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNuYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuXHJcblxyXG4gIFxyXG4gICAgI2Z1bGxwYWdlaGVhZGVye1xyXG4gICAgICAgIC8qIHBhZGRpbmctYm90dG9tOiAzMCUgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuICAgICNzZWNvbmRfcGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNi43JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NlY29uZF9wYXJ0IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJSAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuXHJcbiAgICAjcmVjZW50X25vdGVze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuI2V2ZXJ5dGhpbmd7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuXHJcbn1cclxuI2Z1bGxwYWdlaGVhZGVye1xyXG4gICAgLyogcG9zaXRpb246IHN0YXRpYzsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMzMDM1MzUzNzIwLWYxYzZhNzVjZDhhYj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjAnKTsgKi9cclxuICAgXHJcbiAgXHJcbiAgfVxyXG5cclxuI3NsaWRlcntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgLyogcG9zaXRpb246IHN0YXRpYzsgKi9cclxuXHJcbn1cclxuI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbiNkZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIC8qIHBvc2l0aW9uOiBzdGF0aWM7ICovXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbiBwe1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuXHJcblxyXG59XHJcbiNzZWNvbmRfcGFydHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDM2JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuXHJcbn1cclxuI25vdGVze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHJpZ2h0OiAtMiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuI3dlbGNvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNiU7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogc3RhdGljOyAqL1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG59XHJcbiNsZWZ0X3RleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuXHJcbiNsZWZ0X3NpZGV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MDBweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuI3NlY29uZF9jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbiNmbGFzaGNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jcGljdHVyZXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbWFnZS1zZXQoKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuXHJcbn1cclxuXHJcbiNuYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuXHJcbn1cclxuXHJcbiN3ZWxjb21lIGgxe1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG59XHJcblxyXG4jd2VsY29tZSBwe1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbiNjb250YWluZXJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MCU7XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.theNavbarStuff();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 0, consts: [["id", "navbar"], ["href", "", "id", "logo"], ["id", "navbar-right"], ["href", "", 1, "active"], ["id", "dropdown"], ["id", "content"], ["routerLink", "java", "routerLinkActive", "active"], ["routerLink", "sql", "routerLinkActive", "active"], ["routerLink", "spring", "routerLinkActive", "active"], ["routerLink", "kafka", "routerLinkActive", "active"], ["routerLink", "owasp", "routerLinkActive", "active"], ["routerLink", "cybersecurity", "routerLinkActive", "active"], ["href", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Coding Interview Dojo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "OWASP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cyber Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["#navbar[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n    padding: 50px 0px; \r\n    transition: 0.4s; \r\n    position: fixed; \r\n    width: 100%;\r\n    top: 0; \r\n    z-index: 99;\r\n    right: 0px;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]  {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  \r\n  }\r\n\r\n  \r\n  #dropdown[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  \r\n  #dropdown[_ngcontent-%COMP%]   #dropdownbtn[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    border: none;\r\n    outline: none;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n    font-family: inherit; \r\n    margin: 0; \r\n    position: absolute;\r\n    }\r\n\r\n  \r\n  #content[_ngcontent-%COMP%]{\r\n    display: none;\r\n    position: relative;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    position: absolute;\r\n    position: static;\r\n    height: 200px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\n\r\n  \r\n  #content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n    z-index: 100;\r\n    \r\n  }\r\n\r\n  \r\n  #dropdown[_ngcontent-%COMP%]:hover   #content[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    transition: 0.4s;\r\n    font-style: oblique;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    left: 30px;\r\n  }\r\n\r\n  \r\n  #logo[_ngcontent-%COMP%]{\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], div.active[_ngcontent-%COMP%] {\r\n    background-color: salmon;\r\n    color: white;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    #navbar[_ngcontent-%COMP%] {\r\n      padding: 20px 10px !important; \r\n    }\r\n    #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      \r\n    }\r\n    #navbar-right[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixpQkFBaUIsRUFBRSx5REFBeUQ7SUFDNUUsZ0JBQWdCLEVBQUUsMkRBQTJEO0lBQzdFLGVBQWUsRUFBRSx3QkFBd0I7SUFDekMsV0FBVztJQUNYLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7OztFQUdBLDJCQUEyQjs7O0VBQzNCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7OztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7O0VBR0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG9CQUFvQixFQUFFLGtEQUFrRDtJQUN4RSxTQUFTLEVBQUUsa0RBQWtEO0lBQzdELGtCQUFrQjtJQUNsQjs7O0VBRUY7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7O0VBRXBCOzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7O0VBRWQ7OztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0VBR0EsbUJBQW1COzs7RUFDbkI7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0VBQXNFO0lBQ3RFLFVBQVU7RUFDWjs7O0VBQ0E7SUFDRSxZQUFZOztFQUVkOzs7RUFFQSx3QkFBd0I7OztFQUN4QjtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7OztFQUVBLGtDQUFrQzs7O0VBQ2xDO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7RUFDZDs7O0VBR0Esb0NBQW9DOzs7RUFDcEM7SUFDRSxZQUFZOztFQUVkOzs7RUFFQSxnSEFBZ0g7OztFQUNoSDtJQUNFO01BQ0UsNkJBQTZCLEVBQUUsOEZBQThGO0lBQy9IO0lBQ0E7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGdCQUFnQjs7SUFFbEI7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDsgLyogTGFyZ2UgcGFkZGluZyB3aGljaCB3aWxsIHNocmluayBvbiBzY3JvbGwgKHVzaW5nIEpTKSAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC40czsgLyogQWRkcyBhIHRyYW5zaXRpb24gZWZmZWN0IHdoZW4gdGhlIHBhZGRpbmcgaXMgZGVjcmVhc2VkICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0aWNreS9maXhlZCBuYXZiYXIgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwOyAvKiBBdCB0aGUgdG9wICovXHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbmF2YmFyIGxpbmtzICovXHJcbiAgI25hdmJhciBhICB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBcclxuICB9XHJcbiAgI2Ryb3Bkb3duIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcblxyXG4gICNkcm9wZG93biAjZHJvcGRvd25idG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICAgIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICNjb250ZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICNjb250ZW50IGF7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgI2Ryb3Bkb3duOmhvdmVyICNjb250ZW50e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC8qIFN0eWxlIHRoZSBsb2dvICovXHJcbiAgI25hdmJhciAjbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gICNsb2dve1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIG9uIG1vdXNlLW92ZXIgKi9cclxuICAjbmF2YmFyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuICAjbmF2YmFyIGEuYWN0aXZlLCBkaXYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICAvKiBEaXNwbGF5IHNvbWUgbGlua3MgdG8gdGhlIHJpZ2h0ICovXHJcbiAgI25hdmJhci1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHJlc3BvbnNpdmVuZXNzIC0gb24gc2NyZWVucyBsZXNzIHRoYW4gNTgwcHggd2lkZSwgZGlzcGxheSB0aGUgbmF2YmFyIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgI25hdmJhciB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAhaW1wb3J0YW50OyAvKiBVc2UgIWltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBKYXZhU2NyaXB0IGRvZXNuJ3Qgb3ZlcnJpZGUgdGhlIHBhZGRpbmcgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gICAgI25hdmJhciBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICNuYXZiYXItcmlnaHQge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/cybersecurity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/cybersecurity.service.ts ***!
  \***************************************************/
/*! exports provided: CybersecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CybersecurityService", function() { return CybersecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CybersecurityService {
    constructor(http) {
        this.http = http;
    }
    getAllCyberSecurity() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/1e5bMPugm4kog_9ocQ_61l4tE25nI2UG1uC9_B8-q_P4/Sheet1.json').subscribe(data => {
            let java_data = this.javaData = data;
            let max = java_data[0];
            for (let i = 0; i < java_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = java_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = java_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > java_data.length - 2) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = java_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = java_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
CybersecurityService.ɵfac = function CybersecurityService_Factory(t) { return new (t || CybersecurityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CybersecurityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CybersecurityService, factory: CybersecurityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CybersecurityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/java.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/java.service.ts ***!
  \******************************************/
/*! exports provided: JavaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaService", function() { return JavaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class JavaService {
    constructor(http) {
        this.http = http;
    }
    getAllJava() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1.json').subscribe(data => {
            let java_data = this.javaData = data;
            let max = java_data[0];
            for (let i = 0; i < java_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = java_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "Question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "Answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = java_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > java_data.length - 2) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "Question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "Answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = java_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = java_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "Question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "Answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
JavaService.ɵfac = function JavaService_Factory(t) { return new (t || JavaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JavaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JavaService, factory: JavaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/kafka.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/kafka.service.ts ***!
  \*******************************************/
/*! exports provided: KafkaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafkaService", function() { return KafkaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class KafkaService {
    constructor(http) {
        this.http = http;
    }
    getAllKafka() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/1X919vgkpc8pJgvX3fDrboIu-l0sZ0gQjCMryx8jV20w/Sheet1.json').subscribe(data => {
            let kafka_data = this.kafkaData = data;
            console.log(kafka_data);
            let max = kafka_data[0];
            for (let i = 0; i < kafka_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = kafka_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = kafka_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > kafka_data.length - 2) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = kafka_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = kafka_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
KafkaService.ɵfac = function KafkaService_Factory(t) { return new (t || KafkaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
KafkaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KafkaService, factory: KafkaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KafkaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarService {
    constructor() { }
    theNavbarStuff() {
        window.onscroll = function () {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "30px 5px";
                document.getElementById("logo").style.fontSize = "25px";
                document.getElementById("navbar").style.backgroundColor = "whitesmoke";
            }
            else {
                document.getElementById("navbar").style.padding = "50px 5px";
                document.getElementById("navbar").style.backgroundColor = "transparent";
                document.getElementById("logo").style.fontSize = "35px";
            }
        };
    }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/owasp.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/owasp.service.ts ***!
  \*******************************************/
/*! exports provided: OWASPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWASPService", function() { return OWASPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class OWASPService {
    constructor(http) {
        this.http = http;
    }
    getAllOWASP() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/1IRp0xyNhOLlXydMalqROVvU6YmXq42nRWEDLumLvmd8/Sheet1.json').subscribe(data => {
            let owasp_data = this.owaspData = data;
            console.log(owasp_data);
            let max = owasp_data[0];
            for (let i = 0; i < owasp_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = owasp_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = owasp_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > owasp_data.length - 2) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = owasp_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = owasp_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
OWASPService.ɵfac = function OWASPService_Factory(t) { return new (t || OWASPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OWASPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OWASPService, factory: OWASPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OWASPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/spring.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/spring.service.ts ***!
  \********************************************/
/*! exports provided: SpringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringService", function() { return SpringService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SpringService {
    constructor(http) {
        this.http = http;
    }
    getAllSpring() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/19-s8pTQdyz9CmSkpFlWvR15Kquw988LvPsdr51_C0Vk/Sheet1.json').subscribe(data => {
            let spring_data = this.springData = data;
            for (let i = 0; i < spring_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = spring_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                            console.log(this.answer);
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = spring_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > (spring_data.length - 2)) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                                console.log(this.answer);
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = spring_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = spring_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
SpringService.ɵfac = function SpringService_Factory(t) { return new (t || SpringService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SpringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpringService, factory: SpringService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpringService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sql.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/sql.service.ts ***!
  \*****************************************/
/*! exports provided: SqlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlService", function() { return SqlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SqlService {
    constructor(http) {
        this.http = http;
    }
    getAllSQL() {
        this.http.get('https://flashcards-23d9f.firebaseio.com/1NU2tIKhzZ4N7JmwwbBxxIk_egRU6qwdmNcqgm7vGSwc/Sheet1.json').subscribe(data => {
            let sql_data = this.sqlData = data;
            console.log(sql_data);
            for (let i = 0; i < sql_data.length; i++) {
                let btn2 = document.getElementById("next");
                btn2.addEventListener("click", nextQuestion);
                let btn3 = document.getElementById("back");
                btn3.addEventListener("click", lastQuestion);
                let x = 1;
                let individual = sql_data[x];
                for (let item in individual) {
                    //Questions
                    if (item == "question") {
                        this.question = individual[item];
                        document.getElementById("question").innerHTML = this.question;
                    }
                    //filtering answers
                    if (item == "answer") {
                        let btn = document.getElementById("show");
                        btn.addEventListener("click", showAnswer);
                        function showAnswer() {
                            this.answer = (individual[item]);
                            document.getElementById("answer").innerHTML = this.answer;
                            console.log(this.answer);
                        }
                    }
                    //to show the number in the list on the frontend
                    if (item == "id") {
                        this.id = individual[item];
                        document.getElementById("id").innerHTML = this.id;
                    }
                }
                function nextQuestion() {
                    x++;
                    individual = sql_data[x];
                    document.getElementById("answer").hidden = true;
                    if (x > (sql_data.length - 2)) {
                        x = 0;
                    }
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                document.getElementById("answer").hidden = false;
                                document.getElementById("answer").innerHTML = this.answer;
                                console.log(this.answer);
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
                function lastQuestion() {
                    --x;
                    document.getElementById("answer").hidden = true;
                    if (x < 1) {
                        /*
                        comment will pop up here add event listener for a message to pop up
                        */
                        let max = sql_data.length - 1;
                        x = max;
                        console.log(x);
                    }
                    console.log(x);
                    individual = sql_data[x];
                    for (let item in individual) {
                        //Questions
                        if (item == "question") {
                            this.question = individual[item];
                            document.getElementById("question").innerHTML = this.question;
                        }
                        //filtering answers
                        if (item == "answer") {
                            let btn = document.getElementById("show");
                            btn.addEventListener("click", showAnswer);
                            function showAnswer() {
                                this.answer = (individual[item]);
                                console.log(this.answer);
                                document.getElementById("answer").innerHTML = this.answer;
                            }
                        }
                        //to show the number in the list on the frontend
                        if (item == "id") {
                            this.id = individual[item];
                            document.getElementById("id").innerHTML = this.id;
                        }
                    }
                }
            }
        });
    }
}
SqlService.ɵfac = function SqlService_Factory(t) { return new (t || SqlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SqlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SqlService, factory: SqlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\codingflashcards\coding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map