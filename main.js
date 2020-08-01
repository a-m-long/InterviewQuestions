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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [2, "background-color", "lavender"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
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
/* harmony import */ var _java_java_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./java/java.component */ "./src/app/java/java.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sql/sql.component */ "./src/app/sql/sql.component.ts");
/* harmony import */ var _spring_spring_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spring/spring.component */ "./src/app/spring/spring.component.ts");










 // CLI imports router


const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'java', component: _java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"] },
    { path: 'sql', component: _sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"] },
    { path: 'spring', component: _spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"] },
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
        _java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"],
        _spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _java_java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _sql_sql_component__WEBPACK_IMPORTED_MODULE_9__["SqlComponent"],
                    _spring_spring_component__WEBPACK_IMPORTED_MODULE_10__["SpringComponent"]
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 51, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1, maximum-scale=0"], ["id", "everything"], ["id", "fullpageheader"], ["id", "slider"], ["id", "the_image"], ["id", "description"], [2, "float", "right"], ["id", "welcome"], ["id", "left_text"], ["id", "become"], ["id", "second_content"], ["id", "content"], ["id", "flashcard"], ["id", "picture", 2, "background-image", "url('data:image/png;base64,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')", "background-position", "center"], ["id", "name", "routerLink", "java", "routerLinkActive", "active"], ["id", "picture", 2, "background-image", "url('https://imageog.flaticon.com/icons/png/512/29/29165.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF')", "background-position", "center"], ["id", "name", "routerLink", "sql", "routerLinkActive", "active"], ["id", "picture"], ["id", "name", "routerLink", "spring", "routerLinkActive", "active"], ["id", "name"], ["id", "container"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to the Interview Dojo. This is a website dedicated to keeping you updated on the latest programming tools, concepts, and technologies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Become your most unstoppable self");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Master any subject, one success at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "90% of professionals who use Coding Interview Dojo kill the interview.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Spring Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nothing Yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Random stuff down here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@media screen and (max-width: 700px) {\r\n\r\n    #fullpageheader[_ngcontent-%COMP%]{\r\n        overflow: visible;\r\n        position:absolute;\r\n        display: inline-flex;\r\n        \r\n        \r\n    }\r\n    #everything[_ngcontent-%COMP%]{\r\n        display: inline-table;\r\n        overflow: visible;\r\n        position: absolute;  \r\n    }\r\n    #second_content[_ngcontent-%COMP%]{\r\n        overflow: visible;\r\n        display: inline-table;\r\n        position: absolute;\r\n        max-width: 100%;\r\n        left: 80px;\r\n        font-size: 15px;\r\n    }\r\n    #container[_ngcontent-%COMP%]{\r\n        overflow: visible;\r\n        max-width: 100%;\r\n        display: inline-flex;\r\n        position: relative;\r\n        left: 50px;\r\n\r\n    }\r\n    #content[_ngcontent-%COMP%]{\r\n       width: 100%;\r\n    }\r\n    #picture[_ngcontent-%COMP%]{\r\n        left: -12px;\r\n    }\r\n    #description[_ngcontent-%COMP%]{\r\n        visibility: hidden;\r\n    }\r\n    #container[_ngcontent-%COMP%]{\r\n        display: block;\r\n        margin-left: 75px;\r\n        \r\n    }\r\n    #random[_ngcontent-%COMP%]{\r\n        max-width: 100%;\r\n        position: absolute;\r\n        float: left;\r\n        \r\n      \r\n     \r\n\r\n        \r\n    }\r\n  \r\n\r\n  \r\n}\r\n@media screen and (max-width: 1100px) {\r\n    #description[_ngcontent-%COMP%]{\r\n        visibility: hidden;\r\n    }\r\n}\r\n#everything[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: auto;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    right: 0px;\r\n    top:0;\r\n}\r\n#fullpageheader[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    position: absolute;\r\n    width: 100%;\r\n    height: auto;\r\n    right: 0px;\r\n    background-color: blueviolet;\r\n    overflow: hidden;\r\n    max-width: 100%;\r\n   \r\n  \r\n  }\r\n#slider[_ngcontent-%COMP%]{\r\n    float: right;\r\n    background-color: rgb(98, 42, 151);\r\n    height: 100%;\r\n    width: 55%;\r\n    position: relative;\r\n    padding: 20px;\r\n\r\n    ;\r\n    \r\n}\r\n#description[_ngcontent-%COMP%]{\r\n    float: right;\r\n    font-size: 11px;\r\n    max-width: 43%;\r\n    letter-spacing: 2px;\r\n    position: relative;\r\n    margin-top: 18%;\r\n    \r\n}\r\n#the_image[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    shape-outside: circle();\r\n    margin: 10px;\r\n    margin-top: 50px;\r\n    float: right;\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    background-image: url('https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif');\r\n    margin-bottom: 50px;\r\n}\r\n#welcome[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 45%;\r\n    text-align: center;\r\n    margin-top: 20%;\r\n    background: url('https://unsplash.com/photos/02z1I7gv4ao');\r\n\r\n    \r\n    \r\n}\r\n#left_text[_ngcontent-%COMP%]{\r\n    margin-top: 30%;\r\n}\r\n#left_side[_ngcontent-%COMP%]{\r\n    float: right;\r\n    position: relative;\r\n    margin-top: 600px;\r\n}\r\n#content[_ngcontent-%COMP%]{\r\n    padding: 100px;\r\n    max-width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    background-color: lavender;\r\n\r\n\r\n}\r\n#second_content[_ngcontent-%COMP%]{\r\n    margin-top: 540px;\r\n    background-color: lightcoral;\r\n    position: relative;\r\n    padding: 60px;\r\n    text-align: center;\r\n}\r\n#flashcard[_ngcontent-%COMP%]{\r\n    max-width: 30%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    border-color: black;\r\n    height: auto;\r\n    display: inline-table;\r\n    margin: 20px;\r\n    \r\n    \r\n}\r\n#picture[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    position: relative;\r\n  \r\n    width: 300px;\r\n    height: 300px;\r\n    background-image: -webkit-image-set();\r\n    background-image: image-set();\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    background-color: black;\r\n    border-width: 5px;\r\n\r\n}\r\n#name[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    background-color: whitesmoke;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin-top: 40%;\r\n\r\n}\r\n#container[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n\r\n   \r\n}\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: relative;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n}\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG9CQUFvQjs7O0lBR3hCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsVUFBVTs7SUFFZDtJQUNBO09BQ0csV0FBVztJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjs7SUFFckI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVzs7Ozs7O0lBTWY7Ozs7QUFJSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQU9BO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixLQUFLO0FBQ1Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTs7O0VBR2pCO0FBRUY7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7OztJQUdiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxR0FBcUc7SUFDckcsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMERBQTBEOzs7O0FBSTlEO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQkFBMEI7OztBQUc5QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTs7O0FBR2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7OztBQUdwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcblxyXG4gICAgI2Z1bGxwYWdlaGVhZGVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2V2ZXJ5dGhpbmd7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gICAgfVxyXG4gICAgI3NlY29uZF9jb250ZW50e1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgI2NvbnRhaW5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgI2NvbnRlbnR7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICNwaWN0dXJle1xyXG4gICAgICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgfVxyXG4gICAgI2Rlc2NyaXB0aW9ue1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNjb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjcmFuZG9te1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuXHJcbiAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAjZGVzY3JpcHRpb257XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNldmVyeXRoaW5ne1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6MDtcclxufVxyXG4jZnVsbHBhZ2VoZWFkZXJ7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogc3RhdGljOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gIFxyXG4gIH1cclxuXHJcbiNzbGlkZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDQyLCAxNTEpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgO1xyXG4gICAgLyogcGFkZGluZy1ib3R0b206IDQwMHB4OyAqL1xyXG59XHJcbiNkZXNjcmlwdGlvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1heC13aWR0aDogNDMlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDE4JTtcclxuICAgIFxyXG59XHJcbiN0aGVfaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoKTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZTQvMjYvNzAvZTQyNjcwMmVkZjg3NGIxODFhY2VkMWUyZmE1YzZjZGUuZ2lmJyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4jd2VsY29tZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy8wMnoxSTdndjRhbycpO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2xlZnRfdGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG5cclxuI2xlZnRfc2lkZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDYwMHB4O1xyXG59XHJcblxyXG4jY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG5cclxuXHJcbn1cclxuI3NlY29uZF9jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2ZsYXNoY2FyZHtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbiNwaWN0dXJle1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGltYWdlLXNldCgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG5cclxufVxyXG4jbmFtZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcblxyXG59XHJcbiNjb250YWluZXJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/java/java.component.ts":
/*!****************************************!*\
  !*** ./src/app/java/java.component.ts ***!
  \****************************************/
/*! exports provided: JavaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaComponent", function() { return JavaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_java_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/java.service */ "./src/app/services/java.service.ts");



class JavaComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllJava();
    }
}
JavaComponent.ɵfac = function JavaComponent_Factory(t) { return new (t || JavaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_java_service__WEBPACK_IMPORTED_MODULE_1__["JavaService"])); };
JavaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaComponent, selectors: [["app-java"]], decls: 31, vars: 0, consts: [["id", "fullpage"], ["id", "container"], ["id", "question"], ["id", "show"], ["id", "answer"], [2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container2"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function JavaComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#container[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 50%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    color: darkgoldenrod;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 25%;\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    padding: 20px;\r\n\r\n    \r\n}\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lavender;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n   \r\n}\r\n#container2[_ngcontent-%COMP%]{\r\n    bottom: 0px;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    right: 0;\r\n    position: absolute;\r\n\r\n   \r\n}\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: relative;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n}\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamF2YS9qYXZhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTs7O0FBR2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixLQUFLOztBQUVUO0FBRUE7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixrQkFBa0I7OztBQUd0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9qYXZhL2phdmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuI2Fuc3dlcntcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4jZnVsbHBhZ2V7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOjA7XHJcbiAgIFxyXG59XHJcblxyXG4jY29udGFpbmVyMntcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgXHJcbn1cclxuI3JhbmRvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4jZm9vdGVyX2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jZm9vdGVyX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-java',
                templateUrl: './java.component.html',
                styleUrls: ['./java.component.css']
            }]
    }], function () { return [{ type: _services_java_service__WEBPACK_IMPORTED_MODULE_1__["JavaService"] }]; }, null); })();


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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 0, consts: [["id", "navbar"], ["href", "", "id", "logo"], ["id", "navbar-right"], ["href", "", 1, "active"], ["routerLink", "java", "routerLinkActive", "active"], ["routerLink", "sql", "routerLinkActive", "active"], ["routerLink", "spring", "routerLinkActive", "active"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Coding Interview Dojo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["#navbar[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n    padding: 50px 0px; \r\n    transition: 0.4s; \r\n    position: fixed; \r\n    width: 100%;\r\n    top: 0; \r\n    z-index: 99;\r\n    right: 0px;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  \r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    transition: 0.4s;\r\n    font-style: oblique;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    left: 30px;\r\n  }\r\n\r\n  \r\n  #logo[_ngcontent-%COMP%]{\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: salmon;\r\n    color: white;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  #navbar-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    \r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  @media screen and (max-width: 580px) {\r\n    #navbar[_ngcontent-%COMP%] {\r\n      padding: 20px 10px !important; \r\n    }\r\n    #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      \r\n    }\r\n    #navbar-right[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixpQkFBaUIsRUFBRSx5REFBeUQ7SUFDNUUsZ0JBQWdCLEVBQUUsMkRBQTJEO0lBQzdFLGVBQWUsRUFBRSx3QkFBd0I7SUFDekMsV0FBVztJQUNYLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7OztFQUdBLDJCQUEyQjs7O0VBQzNCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7OztFQUVBLG1CQUFtQjs7O0VBQ25CO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNFQUFzRTtJQUN0RSxVQUFVO0VBQ1o7OztFQUNBO0lBQ0UsWUFBWTs7RUFFZDs7O0VBRUEsd0JBQXdCOzs7RUFDeEI7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOzs7RUFFQSxrQ0FBa0M7OztFQUNsQztJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7OztFQUVBLG9DQUFvQzs7O0VBQ3BDO0lBQ0UsWUFBWTs7RUFFZDs7O0VBRUEsZ0hBQWdIOzs7RUFDaEg7SUFDRTtNQUNFLDZCQUE2QixFQUFFLDhGQUE4RjtJQUMvSDtJQUNBO01BQ0UsV0FBVztNQUNYLGNBQWM7TUFDZCxnQkFBZ0I7O0lBRWxCO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogNTBweCAwcHg7IC8qIExhcmdlIHBhZGRpbmcgd2hpY2ggd2lsbCBzaHJpbmsgb24gc2Nyb2xsICh1c2luZyBKUykgKi9cclxuICAgIHRyYW5zaXRpb246IDAuNHM7IC8qIEFkZHMgYSB0cmFuc2l0aW9uIGVmZmVjdCB3aGVuIHRoZSBwYWRkaW5nIGlzIGRlY3JlYXNlZCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGlja3kvZml4ZWQgbmF2YmFyICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDsgLyogQXQgdGhlIHRvcCAqL1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIG5hdmJhciBsaW5rcyAqL1xyXG4gICNuYXZiYXIgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxvZ28gKi9cclxuICAjbmF2YmFyICNsb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgbGVmdDogMzBweDtcclxuICB9XHJcbiAgI2xvZ297XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3Mgb24gbW91c2Utb3ZlciAqL1xyXG4gICNuYXZiYXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4gICNuYXZiYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBEaXNwbGF5IHNvbWUgbGlua3MgdG8gdGhlIHJpZ2h0ICovXHJcbiAgI25hdmJhci1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHJlc3BvbnNpdmVuZXNzIC0gb24gc2NyZWVucyBsZXNzIHRoYW4gNTgwcHggd2lkZSwgZGlzcGxheSB0aGUgbmF2YmFyIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgI25hdmJhciB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAhaW1wb3J0YW50OyAvKiBVc2UgIWltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBKYXZhU2NyaXB0IGRvZXNuJ3Qgb3ZlcnJpZGUgdGhlIHBhZGRpbmcgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gICAgI25hdmJhciBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICNuYXZiYXItcmlnaHQge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }]; }, null); })();


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

/***/ "./src/app/spring/spring.component.ts":
/*!********************************************!*\
  !*** ./src/app/spring/spring.component.ts ***!
  \********************************************/
/*! exports provided: SpringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringComponent", function() { return SpringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_spring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/spring.service */ "./src/app/services/spring.service.ts");



class SpringComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllSpring();
    }
}
SpringComponent.ɵfac = function SpringComponent_Factory(t) { return new (t || SpringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spring_service__WEBPACK_IMPORTED_MODULE_1__["SpringService"])); };
SpringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpringComponent, selectors: [["app-spring"]], decls: 31, vars: 0, consts: [["id", "fullpage"], ["id", "container"], ["id", "question"], ["id", "show"], ["id", "answer"], [2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container2"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function SpringComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#container[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 50%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    color: darkgoldenrod;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 25%;\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    padding: 20px;\r\n\r\n    \r\n}\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lavender;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n   \r\n}\r\n#container2[_ngcontent-%COMP%]{\r\n    bottom: 0px;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    right: 0;\r\n    position: absolute;\r\n\r\n   \r\n}\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: relative;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n}\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ByaW5nL3NwcmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsS0FBSzs7QUFFVDtBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3ByaW5nL3NwcmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBcclxufVxyXG4jYW5zd2Vye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbiNmdWxscGFnZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgXHJcbn1cclxuXHJcbiNjb250YWluZXIye1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICBcclxufVxyXG4jcmFuZG9te1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbiNmb290ZXJfaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNmb290ZXJfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spring',
                templateUrl: './spring.component.html',
                styleUrls: ['./spring.component.css']
            }]
    }], function () { return [{ type: _services_spring_service__WEBPACK_IMPORTED_MODULE_1__["SpringService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sql/sql.component.ts":
/*!**************************************!*\
  !*** ./src/app/sql/sql.component.ts ***!
  \**************************************/
/*! exports provided: SqlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlComponent", function() { return SqlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sql.service */ "./src/app/services/sql.service.ts");



class SqlComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.getAllSQL();
    }
}
SqlComponent.ɵfac = function SqlComponent_Factory(t) { return new (t || SqlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sql_service__WEBPACK_IMPORTED_MODULE_1__["SqlService"])); };
SqlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SqlComponent, selectors: [["app-sql"]], decls: 31, vars: 0, consts: [["id", "fullpage"], ["id", "container"], ["id", "question"], ["id", "show"], ["id", "answer"], [2, "width", "30%", "display", "inline-block", "position", "static"], ["id", "back", 2, "float", "left"], ["id", "id", 2, "text-align", "center", "display", "inline-block"], ["id", "next", 2, "float", "right"], ["id", "container2"], ["id", "random"], ["id", "footer_header"], ["id", "footer_text"]], template: function SqlComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#container[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    width: 50%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    color: darkgoldenrod;\r\n    background-color: gainsboro;\r\n    position: absolute;\r\n    left: 25%;\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    padding: 20px;\r\n\r\n    \r\n}\r\n#answer[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n#fullpage[_ngcontent-%COMP%]{\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lavender;\r\n    position: absolute;\r\n    right: 0;\r\n    top:0;\r\n   \r\n}\r\n#container2[_ngcontent-%COMP%]{\r\n    bottom: 0px;\r\n    background-color: blueviolet;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    right: 0;\r\n    position: absolute;\r\n\r\n   \r\n}\r\n#random[_ngcontent-%COMP%]{\r\n    display: inline-table;\r\n    position: relative;\r\n    left: 20px;\r\n    margin: 50px;\r\n    width: 25%;\r\n    letter-spacing: 2px;\r\n}\r\n#footer_header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n#footer_text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3FsL3NxbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsS0FBSzs7QUFFVDtBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3FsL3NxbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBcclxufVxyXG4jYW5zd2Vye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbiNmdWxscGFnZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgXHJcbn1cclxuXHJcbiNjb250YWluZXIye1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICBcclxufVxyXG4jcmFuZG9te1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbiNmb290ZXJfaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNmb290ZXJfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SqlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sql',
                templateUrl: './sql.component.html',
                styleUrls: ['./sql.component.css']
            }]
    }], function () { return [{ type: _services_sql_service__WEBPACK_IMPORTED_MODULE_1__["SqlService"] }]; }, null); })();


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