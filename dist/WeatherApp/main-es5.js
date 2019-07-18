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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/about/about.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/about/about.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/bodyn.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/bodyn.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/mainPage/home.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/mainPage/home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-weather-search></app-weather-search>\n<app-sidebar></app-sidebar>\n<app-weather-list></app-weather-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/not-found404/not-found404.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/not-found404/not-found404.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>not-found404 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/sign-in/sign-in.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/sign-in/sign-in.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/user-page/user-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/user-page/user-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user-page works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bodyn\">\n\n    <a\n\n        routerLink=\"/login\" routerLinkActive=\"active\" class=\"sign\">Sign In</a>\n\n    <a\n\n        routerLink=\"/register\" routerLinkActive=\"active\" class=\"sign\">Sign Up</a>\n\n    <a\n\n        routerLink=\"/about\" routerLinkActive=\"active\" class=\"sign\">About</a>\n</div>\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/not-found404/not-found404.component */ "./src/app/body/not-found404/not-found404.component.ts");
/* harmony import */ var _body_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/sign-up/sign-up.component */ "./src/app/body/sign-up/sign-up.component.ts");
/* harmony import */ var _body_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/sign-in/sign-in.component */ "./src/app/body/sign-in/sign-in.component.ts");
/* harmony import */ var _body_mainPage_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/mainPage/home.component */ "./src/app/body/mainPage/home.component.ts");
/* harmony import */ var _body_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/about/about.component */ "./src/app/body/about/about.component.ts");
/* harmony import */ var _body_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/user-page/user-page.component */ "./src/app/body/user-page/user-page.component.ts");









var routes = [
    { path: 'login', pathMatch: 'full', component: _body_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"] },
    { path: 'register', pathMatch: 'full', component: _body_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'about', pathMatch: 'full', component: _body_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'userPage', pathMatch: 'full', component: _body_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__["UserPageComponent"] },
    { path: '', pathMatch: 'full', component: _body_mainPage_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '**', pathMatch: 'full', component: _body_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_3__["NotFound404Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Place For SIGN IN';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _body_weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/weather/weather-item/weather-item.component */ "./src/app/body/weather/weather-item/weather-item.component.ts");
/* harmony import */ var _body_weather_weather_list_weather_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/weather/weather-list/weather-list.component */ "./src/app/body/weather/weather-list/weather-list.component.ts");
/* harmony import */ var _body_weather_weather_search_weather_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/weather/weather-search/weather-search.component */ "./src/app/body/weather/weather-search/weather-search.component.ts");
/* harmony import */ var _body_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/sidebar/sidebar.component */ "./src/app/body/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_bodyn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/bodyn.component */ "./src/app/body/bodyn.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./body/sign-in/sign-in.component */ "./src/app/body/sign-in/sign-in.component.ts");
/* harmony import */ var _body_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./body/sign-up/sign-up.component */ "./src/app/body/sign-up/sign-up.component.ts");
/* harmony import */ var _body_mainPage_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./body/mainPage/home.component */ "./src/app/body/mainPage/home.component.ts");
/* harmony import */ var _body_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./body/not-found404/not-found404.component */ "./src/app/body/not-found404/not-found404.component.ts");
/* harmony import */ var _body_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./body/about/about.component */ "./src/app/body/about/about.component.ts");
/* harmony import */ var _body_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./body/user-page/user-page.component */ "./src/app/body/user-page/user-page.component.ts");







//



//










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _body_weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_7__["WeatherItemComponent"],
                _body_weather_weather_list_weather_list_component__WEBPACK_IMPORTED_MODULE_8__["WeatherListComponent"],
                _body_weather_weather_search_weather_search_component__WEBPACK_IMPORTED_MODULE_9__["WeatherSearchComponent"],
                _body_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _body_bodyn_component__WEBPACK_IMPORTED_MODULE_12__["BodynComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _body_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
                _body_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                _body_mainPage_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _body_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_17__["NotFound404Component"],
                _body_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _body_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_19__["UserPageComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/body/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n    max-width: 700px;\n    margin: 200px auto;\n    border-radius: 10px;\n    background: #fff;\n    text-align: center;\n}\n.header h1{\n    padding-top: 15px;\n    font-size: 2em;\n    text-align: center;\n}\n.repositories{\n    font-size: 2em;text-align: center;}\n.dev{\n    padding: 30px 0;\n    font-size: 1.5em;\n    display: inline-block;\n    margin-right: 20px;\n    margin-left: 20px;\n    color: black;\n    text-decoration: none;\n}\n.dev:hover{\n    transition: 400ms ease;\n    text-decoration: underline;\n}\n@media only screen and (min-width : 480px) and (max-width: 767px) {\n    .content{max-width: 400px}\n    .repositories{font-size: 1.5em}\n    .header h1{font-size: 1.5em;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUV0QztJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksU0FBUyxnQkFBZ0I7SUFDekIsY0FBYyxnQkFBZ0I7SUFDOUIsV0FBVyxnQkFBZ0IsQ0FBQztBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAyMDBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIGgxe1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXBvc2l0b3JpZXN7XG4gICAgZm9udC1zaXplOiAyZW07dGV4dC1hbGlnbjogY2VudGVyO31cblxuLmRldntcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGV2OmhvdmVye1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGVhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRlbnR7bWF4LXdpZHRoOiA0MDBweH1cbiAgICAucmVwb3NpdG9yaWVze2ZvbnQtc2l6ZTogMS41ZW19XG4gICAgLmhlYWRlciBoMXtmb250LXNpemU6IDEuNWVtO31cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/body/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/about/about.component.html"),
            template: "<div class=\"container\">\n        <div class=\"content\">\n            <div class=\"header\">\n            <h1>Here you can find the developer repositories</h1>\n            </div>\n            <div class=\"repositories\">\n                <a class=\"dev\" href=\"https://github.com/Vodem420/WeatherApp\">Frontovik</a>\n                <a class=\"dev\" href=\"https://github.com/Vodem420/WeatherApp\">Tehnik</a>\n            </div>\n        </div>\n    </div>",
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/body/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/body/bodyn.component.css":
/*!******************************************!*\
  !*** ./src/app/body/bodyn.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/body/bodyn.component.ts":
/*!*****************************************!*\
  !*** ./src/app/body/bodyn.component.ts ***!
  \*****************************************/
/*! exports provided: BodynComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodynComponent", function() { return BodynComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodynComponent = /** @class */ (function () {
    function BodynComponent() {
    }
    BodynComponent.prototype.ngOnInit = function () {
    };
    BodynComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bodyn',
            template: __webpack_require__(/*! raw-loader!./bodyn.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/bodyn.component.html"),
            styles: [__webpack_require__(/*! ./bodyn.component.css */ "./src/app/body/bodyn.component.css")]
        })
    ], BodynComponent);
    return BodynComponent;
}());



/***/ }),

/***/ "./src/app/body/mainPage/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/body/mainPage/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbWFpblBhZ2UvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/body/mainPage/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/body/mainPage/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/mainPage/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/body/mainPage/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/body/not-found404/not-found404.component.css":
/*!**************************************************************!*\
  !*** ./src/app/body/not-found404/not-found404.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    max-width: 700px;\n    margin: 200px auto;\n    border-radius: 10px;\n    background: #fff;\n    text-align: center;\n}\n.content{margin: 0 auto;text-align: center;}\n.title{font-size: 6em;color: coral;}\n.Houston{\n    font-size: 2em;\n    color: #3498db;\n}\n.back{\n    padding-bottom: 20px;\n}\n.backToMain{\n    font-size: 2em;\n    color: black;\n    text-decoration: underline;\n}\n.backToMain:hover{\n    transition: 400ms ease;\n    color: lime;\n}\n@media only screen and (min-width : 480px) and (max-width: 767px) {\n    .container{max-width: 450px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ub3QtZm91bmQ0MDQvbm90LWZvdW5kNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0EsU0FBUyxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ25DO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVcsZ0JBQWdCLENBQUM7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9ib2R5L25vdC1mb3VuZDQwNC9ub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDIwMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50e21hcmdpbjogMCBhdXRvO3RleHQtYWxpZ246IGNlbnRlcjt9XG4udGl0bGV7Zm9udC1zaXplOiA2ZW07Y29sb3I6IGNvcmFsO31cbi5Ib3VzdG9ue1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmJhY2t7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYmFja1RvTWFpbntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYmFja1RvTWFpbjpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBlYXNlO1xuICAgIGNvbG9yOiBsaW1lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5jb250YWluZXJ7bWF4LXdpZHRoOiA0NTBweDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/body/not-found404/not-found404.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/body/not-found404/not-found404.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFound404Component = /** @class */ (function () {
    function NotFound404Component() {
    }
    NotFound404Component.prototype.ngOnInit = function () {
    };
    NotFound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found404',
            template: __webpack_require__(/*! raw-loader!./not-found404.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/not-found404/not-found404.component.html"),
            template: "<div class=\"container\">\n        <div class=\"content\">\n            <h1 class=\"title\">404</h1>\n            <h2 class=\"Houston\">Houston, we have a problem.</h2>\n            <div class=\"back\">\n            <a href=\"#\" class=\"backToMain\">Back to main page.</a>\n            </div>\n        </div>\n    </div>",
            styles: [__webpack_require__(/*! ./not-found404.component.css */ "./src/app/body/not-found404/not-found404.component.css")]
        })
    ], NotFound404Component);
    return NotFound404Component;
}());



/***/ }),

/***/ "./src/app/body/sidebar/profile/profile.ts":
/*!*************************************************!*\
  !*** ./src/app/body/sidebar/profile/profile.ts ***!
  \*************************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(profileName, cities) {
        this.profileName = profileName;
        this.cities = cities;
    }
    Profile.ctorParameters = function () { return [
        { type: String },
        { type: Array }
    ]; };
    return Profile;
}());



/***/ }),

/***/ "./src/app/body/sidebar/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/body/sidebar/services/index.ts ***!
  \************************************************/
/*! exports provided: WeatherItemsService, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ "./src/app/body/sidebar/services/profile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]; });

/* harmony import */ var _weather_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-items.service */ "./src/app/body/sidebar/services/weather-items.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherItemsService", function() { return _weather_items_service__WEBPACK_IMPORTED_MODULE_1__["WeatherItemsService"]; });





/***/ }),

/***/ "./src/app/body/sidebar/services/profile.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/body/sidebar/services/profile.service.ts ***!
  \**********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile */ "./src/app/body/sidebar/profile/profile.ts");



var ProfileService = /** @class */ (function () {
    function ProfileService() {
        this.profiles = [
            new _profile_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"]('Default Profile', ['stalker', 'Volgograd', 'Madagascar'])
        ];
    }
    ProfileService.prototype.saveNewProfile = function (cities) {
        var profileName = "Profile " + this.profiles.length;
        var newProfile = new _profile_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](profileName, cities);
        this.profiles.push(newProfile);
    };
    ProfileService.prototype.getProfiles = function () {
        return this.profiles;
    };
    ProfileService.prototype.deleteProfile = function (profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/body/sidebar/services/weather-items.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/body/sidebar/services/weather-items.service.ts ***!
  \****************************************************************/
/*! exports provided: WeatherItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItemsService", function() { return WeatherItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_init_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/init-weather */ "./src/app/init-weather.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// import { Init } from '../init-weather';



// import { WEATHER_ITEMS } from '../init-weather';


var WeatherItemsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeatherItemsService, _super);
    function WeatherItemsService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        console.log('Weather Items Service Init...');
        _this.load();
        _this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
        _this.API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
        return _this;
    }
    WeatherItemsService.prototype.getWeatherItem = function () {
        return src_app_init_weather__WEBPACK_IMPORTED_MODULE_2__["WEATHER_ITEMS"];
    };
    WeatherItemsService.prototype.clearWeatherItems = function () {
        src_app_init_weather__WEBPACK_IMPORTED_MODULE_2__["WEATHER_ITEMS"].splice(0);
    };
    WeatherItemsService.prototype.addItem = function (weatherItem) {
        src_app_init_weather__WEBPACK_IMPORTED_MODULE_2__["WEATHER_ITEMS"].push(weatherItem);
    };
    WeatherItemsService.prototype.searchWeatherData = function (cityName) {
        return this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&units=metric');
    };
    WeatherItemsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    WeatherItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WeatherItemsService);
    return WeatherItemsService;
}(src_app_init_weather__WEBPACK_IMPORTED_MODULE_2__["Init"]));



/***/ }),

/***/ "./src/app/body/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/index */ "./src/app/body/sidebar/services/index.ts");
/* harmony import */ var _weather_weatherInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather/weatherInterface */ "./src/app/body/weather/weatherInterface.ts");




var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(ProfileService$, WeatherService$) {
        this.ProfileService$ = ProfileService$;
        this.WeatherService$ = WeatherService$;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.profiles = this.ProfileService$.getProfiles();
    };
    SideBarComponent.prototype.onSaveNew = function () {
        var cities = this.WeatherService$.getWeatherItem().map(function (el) { return el.cityName; });
        this.ProfileService$.saveNewProfile(cities);
    };
    SideBarComponent.prototype.onLoadProfile = function (profile) {
        var _this = this;
        this.WeatherService$.clearWeatherItems();
        for (var i = 0; i < profile.cities.length; i++) {
            this.WeatherService$.searchWeatherData(profile.cities[i])
                /*.retry()*/
                .subscribe(function (data) {
                var weatherItem = new _weather_weatherInterface__WEBPACK_IMPORTED_MODULE_3__["WeatherItem"](data.name, data.weather[0].description, data.main.temp);
                _this.WeatherService$.addItem(weatherItem);
            });
        }
    };
    SideBarComponent.prototype.onDeleteProfile = function (e, profile) {
        console.log(e);
        e.stopPropagation();
        this.ProfileService$.deleteProfile(profile);
    };
    SideBarComponent.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["WeatherItemsService"] }
    ]; };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: "\n    <div class=\"sideContent\">\n  <h2>Saved Profiles</h2>\n        <div class=\"line\"></div>\n    <button class=\"save\" (click) = \"onSaveNew()\">Save list to Profile</button>\n        <div class=\"profiles\">\n    <article class=\"profile\" *ngFor=\"let profile of profiles\">\n    <div  (click) = \"onLoadProfile(profile)\">\n        <h4>{{profile.profileName}}</h4>\n        <p>{{profile.cities.join(', ')}} </p>\n    </div>\n      <button class=\"delete\" (click)=\"onDeleteProfile($event,profile)\">X</button>\n    </article>\n        </div>\n    </div>\n      <div class=\"profiles\">\n          <div class=\"buttonContent\">\n              <button class=\"displayProfiles\">Show Profiles</button>\n              <div class=\"hideContent\">\n                  <h2>Saved Profiles</h2>\n                  <div class=\"line\"></div>\n                  <button class=\"save\" (click) = \"onSaveNew()\">Save list to Profile</button>\n                  <div class=\"profiles\">\n                      <article class=\"profile\" *ngFor=\"let profile of profiles\">\n                          <div  (click) = \"onLoadProfile(profile)\">\n                              <h4>{{profile.profileName}}</h4>\n                              <p>{{profile.cities.join(', ')}} </p>\n                          </div>\n                          <button class=\"delete\" (click)=\"onDeleteProfile($event,profile)\">X</button>\n                      </article>\n                  </div>\n              </div>\n          </div>\n      </div>\n  ",
            providers: [_services_index__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["WeatherItemsService"]],
            styles: [__webpack_require__(/*! ./sidebar.css */ "./src/app/body/sidebar/sidebar.css")]
        })
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/body/sidebar/sidebar.css":
/*!******************************************!*\
  !*** ./src/app/body/sidebar/sidebar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sideContent{\n  font-style: italic;\n  max-width: 400px;\n  border-radius: 10px;\n  background: #fff;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.sideContent h2 {\n  padding: 10px 0 0 0;\n  font-size: 2em;\n  color: black;\n}\n\n.line{border: 1px solid lightgray;}\n\n.save{\n  margin-top: 15px;\n  font-style: italic;\n  outline: none;\n  font-size: 1.5em;\n  background: none;\n  cursor: pointer;\n  padding: 10px 30px;\n  border: 2px solid black;\n  border-radius: 5px;\n  color: black;\n}\n\n.save:hover{\n  transition: 400ms ease;\n  text-decoration: underline;\n  color: black;\n\n}\n\n.profiles{\n  padding-bottom: 5px;\n}\n\n.profile {\n  position: relative;\n  margin: 10px 5px;\n  cursor: pointer;\n  font-size: 1.5em;\n  border-radius: 5px;\n  border: 2px solid black;\n  color: black;\n  background: none;\n\n}\n\n.profile:hover {\n  transition: 400ms ease;\n  text-decoration: underline;\n}\n\n.profile h4 {margin: 10px 0;padding: 0;}\n\n.profile p {margin: 0;padding: 0;}\n\n.delete {\n  color: red;\n  border: 2px solid red;\n  position: absolute;\n  padding: 5px 10px;\n  background: none;\n  top: 2px;\n  right: 5px;\n  font-size: 18px;\n}\n\n.profile .delete:hover{\ntransition: 400ms ease;\n-webkit-transform: rotate(1turn);\n        transform: rotate(1turn);\n}\n\n@media only screen and (min-width : 480px) and (max-width: 1400px) {\n .sideContent{display: none;}\n}\n\n@media only screen and (min-width: 1401px) {\n  .displayProfiles{display: none;}\n}\n\n.displayProfiles{\n  border: none;\n  outline: none;\n  font-style: italic;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  background: none;\n  font-size: 1.5em;\n  color: aqua;\n  float: right;\n  position: absolute;\n  top: 0;\n  left: 1%;\n}\n\n.hideContent{\n  display: none;\n}\n\n.displayProfiles:focus ~ .hideContent,\n.displayProfiles:active ~ .hideContent,\n.hideContent:hover{\n  position: absolute;\n  top: 3%;\n  left: 0;\n  font-style: italic;\n  max-width: 400px;\n  border-radius: 10px;\n  border: 2px solid aqua;\n  background: #CCCCCC;\n  margin-top: 50px;\n  text-align: center;\n  display: block;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zaWRlYmFyL3NpZGViYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQSxNQUFNLDJCQUEyQixDQUFDOztBQUVsQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsWUFBWTs7QUFFZDs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFDQSxhQUFhLGNBQWMsQ0FBQyxVQUFVLENBQUM7O0FBQ3ZDLFlBQVksU0FBUyxDQUFDLFVBQVUsQ0FBQzs7QUFFakM7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixnQ0FBd0I7UUFBeEIsd0JBQXdCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYSxhQUFhLENBQUM7QUFDNUI7O0FBQ0E7RUFDRSxpQkFBaUIsYUFBYSxDQUFDO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBOzs7RUFHRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvc2lkZWJhci9zaWRlYmFyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlQ29udGVudHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlQ29udGVudCBoMiB7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubGluZXtib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7fVxuXG4uc2F2ZXtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2F2ZTpob3ZlcntcbiAgdHJhbnNpdGlvbjogNDAwbXMgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBibGFjaztcblxufVxuLnByb2ZpbGVze1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5cbn1cbi5wcm9maWxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucHJvZmlsZSBoNCB7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDt9XG4ucHJvZmlsZSBwIHttYXJnaW46IDA7cGFkZGluZzogMDt9XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRvcDogMnB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvZmlsZSAuZGVsZXRlOmhvdmVye1xudHJhbnNpdGlvbjogNDAwbXMgZWFzZTtcbnRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAuc2lkZUNvbnRlbnR7ZGlzcGxheTogbm9uZTt9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDFweCkge1xuICAuZGlzcGxheVByb2ZpbGVze2Rpc3BsYXk6IG5vbmU7fVxufVxuXG4uZGlzcGxheVByb2ZpbGVze1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IGFxdWE7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDElO1xufVxuXG4uaGlkZUNvbnRlbnR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZGlzcGxheVByb2ZpbGVzOmZvY3VzIH4gLmhpZGVDb250ZW50LFxuLmRpc3BsYXlQcm9maWxlczphY3RpdmUgfiAuaGlkZUNvbnRlbnQsXG4uaGlkZUNvbnRlbnQ6aG92ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzJTtcbiAgbGVmdDogMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhO1xuICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/body/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width : 480px) and (max-width: 767px) {\n    .container{max-width: 400px;margin: 0 auto;}\n}\n\n.container{\n    margin-top: 150px;\n}\n\n.content{\n    max-width: 600px;\n    margin: 0 auto;\n    border-radius: 10px;\n    background: #fff;\n    text-align: center;\n}\n\n.Title{\n    margin: 50px auto;\n    display: inline-block;\n    font-size: 2em;\n}\n\n.line{border: 1px solid lightgray;}\n\n.formControl{\n    outline: none;\n    font-size: 1.5em;\n    display: block;\n    width: 60%;\n    border: none;\n    margin: 20px auto;\n    border-radius: 20px;\n    background: lightgray;\n    padding: 15px 0 15px 10px;\n}\n\n.buttonContent{\n    padding: 5px 0;\n}\n\n.confirmButton{\n    cursor: pointer;\n    outline: none;\n    font-size: 1.5em;\n    display: block;\n    border: none;\n    margin: 20px auto;\n    border-radius: 20px;\n    padding: 15px 30px 15px 30px;\n    background: aqua;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFDQSxNQUFNLDJCQUEyQixDQUFDOztBQUVsQztJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRhaW5lcnttYXgtd2lkdGg6IDQwMHB4O21hcmdpbjogMCBhdXRvO31cbn1cblxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cbi5jb250ZW50e1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5UaXRsZXtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG4ubGluZXtib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7fVxuXG4uZm9ybUNvbnRyb2x7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDEwcHg7XG59XG4uYnV0dG9uQ29udGVudHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cbi5jb25maXJtQnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiBhcXVhO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/body/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(serviceService, formBuilder) {
        this.serviceService = serviceService;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            EmailAddress: '',
            Password: '',
        });
    }
    SignInComponent.prototype.callServerForSignIn = function (data) {
        console.log('data: ', data);
        this.serviceService.callServerForSignIn(data);
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.ctorParameters = function () { return [
        { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/sign-in/sign-in.component.html"),
            template: "<div class=\"container\">\n        <div class=\"content\">\n            <div class=\"titleContent\">\n            <span class=\"Title\">Authorization</span>\n            <div class=\"line\"></div>\n            </div>\n        <div class=\"formContent\">\n            <form action=\"\" class=\"Form\" [formGroup]=\"checkoutForm\">\n                <input type=\"email\" class=\"formControl\" placeholder=\"E-mail\" formControlName=\"EmailAddress\">\n                <input type=\"password\" class=\"formControl\" placeholder=\"Password\" formControlName=\"Password\">\n            </form>\n            <div class=\"buttonContent\">\n                <button class=\"confirmButton\" type=\"submit\" (click)=\"callServerForSignIn(checkoutForm.value)\">Confirm</button>\n            </div>\n        </div>\n        </div>\n    </div>",
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/body/sign-in/sign-in.component.css")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/body/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 150px;\n}\n.content{\n    max-width: 600px;\n    margin: 0 auto;\n    border-radius: 10px;\n    background: #fff;\n    text-align: center;\n}\n.Title{\n    margin: 50px auto;\n    display: inline-block;\n    font-size: 2em;\n}\n.line{border: 1px solid lightgray;}\n.formControl{\n    outline: none;\n    font-size: 1.5em;\n    display: block;\n    width: 60%;\n    border: none;\n    margin: 20px auto;\n    border-radius: 20px;\n    background: lightgray;\n    padding: 15px 0 15px 10px;\n}\n.buttonContent{\n    padding: 5px 0;\n}\n.confirmButton{\n    cursor: pointer;\n    outline: none;\n    font-size: 1.5em;\n    display: block;\n    border: none;\n    margin: 20px auto;\n    border-radius: 20px;\n    padding: 15px 30px 15px 30px;\n    background: aqua;\n}\n@media only screen and (min-width : 480px) and (max-width: 767px) {\n    .content{ max-width: 400px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0EsTUFBTSwyQkFBMkIsQ0FBQztBQUVsQztJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksVUFBVSxnQkFBZ0IsQ0FBQztBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuLmNvbnRlbnR7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlRpdGxle1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDJlbTtcbn1cbi5saW5le2JvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTt9XG5cbi5mb3JtQ29udHJvbHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMTVweCAwIDE1cHggMTBweDtcbn1cbi5idXR0b25Db250ZW50e1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuLmNvbmZpcm1CdXR0b257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGFxdWE7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGVudHsgbWF4LXdpZHRoOiA0MDBweDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/body/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceService, formBuilder) {
        this.serviceService = serviceService;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            nickname: '',
            EmailAddress: '',
            Password: '',
        });
    }
    SignUpComponent.prototype.callServerForSignUp = function (data) {
        // console.log('data: ', data);
        this.serviceService.callServerForSignUp(data);
    };
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.ctorParameters = function () { return [
        { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/sign-up/sign-up.component.html"),
            template: "<div class=\"container\">\n        <div class=\"content\">\n            <div class=\"titleContent\">\n                <span class=\"Title\">Registration</span>\n                <div class=\"line\"></div>\n            </div>\n            <div class=\"formContent\">\n                <form [formGroup]=\"checkoutForm\"  class=\"Form\">\n                    <input type=\"text\" class=\"formControl\"  formControlName=\"nickname\" placeholder=\"Nickname\">\n                    <input type=\"email\" class=\"formControl\"  formControlName=\"EmailAddress\" placeholder=\"E-mail\">\n                    <input type=\"password\" class=\"formControl\"  formControlName=\"Password\" placeholder=\"Password\">\n                </form>\n                <div class=\"buttonContent\">\n                    <button routerLink=\"/userPage\"\n                            class=\"confirmButton\" type=\"submit\" (click)=\"callServerForSignUp(checkoutForm.value)\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>",
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/body/sign-up/sign-up.component.css")]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/body/user-page/user-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/user-page/user-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 150px;\n}\n.content{\n    max-width: 600px;\n    margin: 0 auto;\n    border-radius: 10px;\n    background: #fff;\n    text-align: center;\n}\nh1{\n    font-size: 2em;\n    font-style: italic;\n}\n.logout{\n    margin-bottom: 30px;\n    text-decoration: none;\n    cursor: pointer;\n    padding: 10px 20px;\n    background: none;\n    font-size: 1.5em;\n    color: aqua;\n    border: 2px solid aqua;\n    border-radius: 5px;\n}\n.logout:hover{\n    transition: 400ms ease;\n    color: gold;\n    border: 2px solid gold;\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG4uY29udGVudHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMXtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5sb2dvdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IGFxdWE7XG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2dvdXQ6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogNDAwbXMgZWFzZTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/body/user-page/user-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/user-page/user-page.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPageComponent = /** @class */ (function () {
    function UserPageComponent() {
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! raw-loader!./user-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/user-page/user-page.component.html"),
            template: "<div class=\"container\">\n        <div class=\"content\">\n            <h1>Hello {{nickname}}</h1>\n            <button routerLink=\"/register\" routerLinkActive=\"active\" class=\"logout\">Log Out</button>\n        </div>\n    </div>",
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/body/user-page/user-page.component.css")]
        })
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/body/weather/weather-item/weather-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/body/weather/weather-item/weather-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: WeatherItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItemComponent", function() { return WeatherItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { WeatherItem } from './weatherInterface';
var WeatherItemComponent = /** @class */ (function () {
    function WeatherItemComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], WeatherItemComponent.prototype, "weatherItem", void 0);
    WeatherItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-item',
            template: "<article class=\"weather-element\">\n    <div class=\"col-1\"><h3>{{weatherItem.cityName}}</h3>\n    <p class=\"info\">{{ weatherItem.description }}</p></div>\n        <div class=\"col-2\">\n            <span class=\"temperature\">{{ weatherItem.temperature }}\u00B0C</span>\n        </div>\n    </article>    \n  ",
            styles: [__webpack_require__(/*! ./weather-item.css */ "./src/app/body/weather/weather-item/weather-item.css")]
        })
    ], WeatherItemComponent);
    return WeatherItemComponent;
}());



/***/ }),

/***/ "./src/app/body/weather/weather-item/weather-item.css":
/*!************************************************************!*\
  !*** ./src/app/body/weather/weather-item/weather-item.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-element {\n  background-color: #eeeeee;\n  box-shadow: 1px 1px 6px #CCC;\n  font-size: 1.5em;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.col-1 {\ndisplay: inline-block;\nwidth: 50%;\n}\n\n.col-1 h3 {\nmargin: 0 0 10px 0;\npadding: 0;\nfont-size: 22px;\n}\n\n.col-2 {\ndisplay: inline-block;\nwidth: 50%;\nvertical-align: top;\ntext-align: right;\n}\n\n.temperature {\nfont-size: 22px;\nfont-weight: bolder;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS93ZWF0aGVyL3dlYXRoZXItaXRlbS93ZWF0aGVyLWl0ZW0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsZUFBZTtBQUNmOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvd2VhdGhlci93ZWF0aGVyLWl0ZW0vd2VhdGhlci1pdGVtLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAjQ0NDO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY29sLTEge1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xud2lkdGg6IDUwJTtcbn1cbi5jb2wtMSBoMyB7XG5tYXJnaW46IDAgMCAxMHB4IDA7XG5wYWRkaW5nOiAwO1xuZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY29sLTIge1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xud2lkdGg6IDUwJTtcbnZlcnRpY2FsLWFsaWduOiB0b3A7XG50ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRlbXBlcmF0dXJlIHtcbmZvbnQtc2l6ZTogMjJweDtcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/weather/weather-list/weather-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/body/weather/weather-list/weather-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: WeatherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherListComponent", function() { return WeatherListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/services/weather-items.service */ "./src/app/body/sidebar/services/weather-items.service.ts");



// import { WeatherItem } from './weatherInterface';
var WeatherListComponent = /** @class */ (function () {
    function WeatherListComponent(weatherItemsService$) {
        this.weatherItemsService$ = weatherItemsService$;
        this.getWeatherItems();
    }
    WeatherListComponent.prototype.getWeatherItems = function () {
        this.weatheritems = this.weatherItemsService$.getWeatherItem();
    };
    WeatherListComponent.prototype.ngOnInit = function () {
        this.getWeatherItems();
    };
    WeatherListComponent.ctorParameters = function () { return [
        { type: _sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_2__["WeatherItemsService"] }
    ]; };
    WeatherListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-list',
            template: "\n    <section class=\"weather-list\">\n      <app-weather-item *ngFor= \"let weatheritem of weatheritems\" [item]=weatheritem > </app-weather-item>\n    </section>\n  ",
            providers: [_sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_2__["WeatherItemsService"]],
            styles: [__webpack_require__(/*! ./weather-list.css */ "./src/app/body/weather/weather-list/weather-list.css")]
        })
    ], WeatherListComponent);
    return WeatherListComponent;
}());



/***/ }),

/***/ "./src/app/body/weather/weather-list/weather-list.css":
/*!************************************************************!*\
  !*** ./src/app/body/weather/weather-list/weather-list.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-list {\n\n  margin: 20px auto;\n  max-width: 600px;\n}\n@media only screen and (min-width : 480px) and (max-width: 767px) {\n  .weather-list{max-width: 450px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS93ZWF0aGVyL3dlYXRoZXItbGlzdC93ZWF0aGVyLWxpc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWMsZ0JBQWdCLENBQUM7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3dlYXRoZXIvd2VhdGhlci1saXN0L3dlYXRoZXItbGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlci1saXN0IHtcblxuICBtYXJnaW46IDIwcHggYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndlYXRoZXItbGlzdHttYXgtd2lkdGg6IDQ1MHB4O31cbn0iXX0= */"

/***/ }),

/***/ "./src/app/body/weather/weather-search/weather-search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/body/weather/weather-search/weather-search.component.ts ***!
  \*************************************************************************/
/*! exports provided: WeatherSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherSearchComponent", function() { return WeatherSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/services/weather-items.service */ "./src/app/body/sidebar/services/weather-items.service.ts");
/* harmony import */ var _weatherInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weatherInterface */ "./src/app/body/weather/weatherInterface.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");





// import {WeatherItem} from './weatherInterface';






var WeatherSearchComponent = /** @class */ (function () {
    function WeatherSearchComponent(weatherItemsService$) {
        this.weatherItemsService$ = weatherItemsService$;
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.data = {};
        this.locationGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    WeatherSearchComponent.prototype.onSubmit = function (e, form) {
        var _this = this;
        this.weatherItemsService$.searchWeatherData(form.value.location).subscribe(function (data) {
            var weatherItem = new _weatherInterface__WEBPACK_IMPORTED_MODULE_4__["WeatherItem"](data.name, data.weather[0].description, data.main.temp);
            _this.weatherItemsService$.addItem(weatherItem);
        });
        form.reset();
        this.data !== '' ? this.data = {} : this.data;
    };
    WeatherSearchComponent.prototype.onSearchLocation = function (event, cityName) {
        if (cityName.length > 0) {
            this.searchStream.next(cityName);
        }
    };
    WeatherSearchComponent.prototype.clearWeatherData = function () {
        this.weatherItemsService$.clearWeatherItems();
    };
    WeatherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchStream
            .debounceTime(700)
            .distinctUntilChanged()
            .switchMap(function (input) { return _this.weatherItemsService$.searchWeatherData(input); })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
            return _this.data;
        });
    };
    WeatherSearchComponent.ctorParameters = function () { return [
        { type: _sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_3__["WeatherItemsService"] }
    ]; };
    WeatherSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-search',
            template: "\n    <section class=\"weather-search\">\n      <form class=\"weatherForm\" [formGroup]=\"locationGroup\" novalidate>\n        <input class=\"weatherInput\" #location formControlName=\"location\" placeholder=\"Enter City Name...\" type=\"text\" id=\"city\" name=\"city\"\n               (input)=\"onSearchLocation($event, location.value)\" [required]=\"true\" autocomplete=\"off\"/>\n          <div class=\"buttonsContent\">\n        <button class=\"weatherButton add\" type=\"submit\" (click)=\"onSubmit(e, locationGroup)\">Add City</button>\n        <button class=\"weatherButton del\" type=\"button\" (click)=\"clearWeatherData()\">Clear</button>\n          </div>\n      </form>\n    </section>\n  ",
            providers: [_sidebar_services_weather_items_service__WEBPACK_IMPORTED_MODULE_3__["WeatherItemsService"]],
            styles: [__webpack_require__(/*! ./weather-search.css */ "./src/app/body/weather/weather-search/weather-search.css")]
        })
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());



/***/ }),

/***/ "./src/app/body/weather/weather-search/weather-search.css":
/*!****************************************************************!*\
  !*** ./src/app/body/weather/weather-search/weather-search.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-search {text-align: center;}\n\n.weatherForm{\n  max-width: 600px;\n  min-height: 250px;\n  margin: 0 auto;\n  border-radius: 10px;\n  background: #fff;\n}\n\n.weatherInput{\n  font-style: italic;\n  outline: none;\n  font-size: 1.5em;\n  width: 80%;\n  border: none;\n  margin: 40px auto;\n  border-radius: 20px;\n  background: lightgray;\n  padding: 15px 0 15px 10px;\n}\n\n.weatherButton{\n  font-style: italic;\n  text-decoration: none;\n  outline: none;\n  font-size: 2em;\n  background: none;\n  cursor: pointer;\n  padding: 10px 30px;\n  margin: 20px 20px;\n  position: relative;\n  border-radius: 5px;\n  color: black;\n  border: 1px solid black;\n}\n\n.add:hover{\n  transition: 200ms ease;\n  text-decoration: underline;\n}\n\n.del:hover{\n  transition: 200ms ease;\n  text-decoration: underline;\n}\n\n@media only screen and (min-width : 480px) and (max-width: 767px) {\n .weatherForm{max-width: 450px;}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS93ZWF0aGVyL3dlYXRoZXItc2VhcmNoL3dlYXRoZXItc2VhcmNoLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsa0JBQWtCLENBQUM7O0FBRXBDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtDQUNDLGFBQWEsZ0JBQWdCLENBQUM7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3dlYXRoZXIvd2VhdGhlci1zZWFyY2gvd2VhdGhlci1zZWFyY2guY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXItc2VhcmNoIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG4ud2VhdGhlckZvcm17XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLndlYXRoZXJJbnB1dHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDEwcHg7XG59XG5cbi53ZWF0aGVyQnV0dG9ue1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW46IDIwcHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uYWRkOmhvdmVye1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5kZWw6aG92ZXJ7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gLndlYXRoZXJGb3Jte21heC13aWR0aDogNDUwcHg7fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/body/weather/weatherInterface.ts":
/*!**************************************************!*\
  !*** ./src/app/body/weather/weatherInterface.ts ***!
  \**************************************************/
/*! exports provided: WeatherItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItem", function() { return WeatherItem; });
var WeatherItem = /** @class */ (function () {
    function WeatherItem(cityName, description, temperature) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = temperature;
    }
    WeatherItem.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Number }
    ]; };
    return WeatherItem;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodyn{\n    display: inline-block;\n    width: 100%;\n    background-color: #1D1B26;\n    font-style: italic;\n}\n.sign{\n    text-decoration: none;\n    cursor: pointer;\n    padding: 10px 20px;\n    background: none;\n    font-size: 1.5em;\n    color: aqua;\n    float: right;\n}\n.sign:hover{\n    transition: 400ms ease;\n    color: gold;\n    text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5bntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMUIyNjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uc2lnbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IGFxdWE7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2lnbjpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBlYXNlO1xuICAgIGNvbG9yOiBnb2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/init-weather.ts":
/*!*********************************!*\
  !*** ./src/app/init-weather.ts ***!
  \*********************************/
/*! exports provided: Init, WEATHER_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return Init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER_ITEMS", function() { return WEATHER_ITEMS; });
var Init = /** @class */ (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('weather-items') === null || localStorage.getItem('weather-items') === undefined) {
            console.log('Weather items not found!!!');
        }
        else {
            console.log('Loading weatherItems..');
        }
    };
    return Init;
}());

var WEATHER_ITEMS = [];


/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceService = /** @class */ (function () {
    // user = {id: 1, name: 'Hello'};
    function ServiceService(http) {
        this.http = http;
    }
    ServiceService.prototype.getHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
    };
    ServiceService.prototype.callServerForSignIn = function (userData) {
        console.log('callServerForSignIn data: ', userData);
        var headers = this.getHeaders();
        this.http.post('http://127.0.0.1:3000/api/login', JSON.stringify(userData), {
            headers: headers
        })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ServiceService.prototype.callServerForSignUp = function (userData) {
        console.log('callServerForSignUp data: ', userData);
        var headers = this.getHeaders();
        this.http.post('http://127.0.0.1:3000/api/register', JSON.stringify(userData), {
            headers: headers
        })
            .subscribe(function (data) {
            console.log("data needs be here", data);
        });
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServiceService);
    return ServiceService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/developer/Desktop/WeatherApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map