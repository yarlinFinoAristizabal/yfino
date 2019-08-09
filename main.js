(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\n    <div style=\"width: 5%; background: #2f323e\">\n        <div style=\"width: 100%\" id=\"sidebarClose\">\n            <i style=\"margin: 5px 0 0 5px; color: #edf1f5\" class=\"fas fa-align-left fa-2x\" (click)=\"openSideBar()\"> </i>\n        </div>\n        <div *ngIf=\"sidebar\" style=\"width: 250px; height: 100%; z-index: 5; position: fixed; background: #2f323e; bottom: 0\" id=\"sidebarOpen\">\n            <div style=\"margin: 10px; margin-bottom: 10ex; display: flex;\">\n                <img src=\"./assets/images/logoQuipux.svg\" alt=\"\">\n                <i style=\"margin-left: 15px;color: #edf1f5\" class=\"fas fa-times\" (click)=\"closeSideBar()\"></i>\n            </div>\n            <app-menu></app-menu>\n        </div>\n    </div>\n    <div class=\"nav-bar\">\n        <div>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item disabled\"><i class=\"fas fa-home\"></i></li>\n                    <li class=\"breadcrumb-item disabled\"><a>EMPRESAS</a></li>\n                    <li class=\"breadcrumb-item active\"><a href=\"/#/home\">NOMBRE EMPRESAS</a></li>\n                    <li class=\"breadcrumb-item disabled\"><a href=\"/#/articulo\">ARTÍCULO</a></li>\n                    <i class=\"fas fa-user-circle fa-lg\" style=\"margin-left: 80%;\"></i>\n                    <li style=\"margin-left:5px \"> Yarlin Ximena Fino</li> <i class=\"fas fa-chevron-down fa-xs\" style=\"margin-left: 10px; margin-top: 5px;\"></i>\n                </ol>\n            </nav>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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
/* harmony import */ var _service_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/servicio.service */ "./src/app/service/servicio.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
        this.info = [];
        this.sidebar = false;
        console.log("constructor");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.info = this._service.getInfo();
        this.sidebar = this._service.getSidebar();
    };
    AppComponent.prototype.openSideBar = function () {
        this.sidebar = true;
    };
    AppComponent.prototype.closeSideBar = function () {
        this.sidebar = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/servicio.service */ "./src/app/service/servicio.service.ts");
/* harmony import */ var _components_infocontacto_infocontacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/infocontacto/infocontacto.component */ "./src/app/components/infocontacto/infocontacto.component.ts");
/* harmony import */ var _components_infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/infoempresa/infoempresa.component */ "./src/app/components/infoempresa/infoempresa.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/articulo/articulo.component */ "./src/app/components/articulo/articulo.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contenido_contenido_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contenido/contenido.component */ "./src/app/components/contenido/contenido.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_infocontacto_infocontacto_component__WEBPACK_IMPORTED_MODULE_6__["InfocontactoComponent"],
                _components_infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_7__["InfoempresaComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _components_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_9__["ArticuloComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_contenido_contenido_component__WEBPACK_IMPORTED_MODULE_11__["ContenidoComponent"]
            ],
            imports: [
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [
                _service_servicio_service__WEBPACK_IMPORTED_MODULE_5__["ServicioService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/infoempresa/infoempresa.component */ "./src/app/components/infoempresa/infoempresa.component.ts");
/* harmony import */ var _components_infocontacto_infocontacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/infocontacto/infocontacto.component */ "./src/app/components/infocontacto/infocontacto.component.ts");
/* harmony import */ var _components_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/articulo/articulo.component */ "./src/app/components/articulo/articulo.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");







var APP_ROUTES = [
    //Manejo de rutas para navegación
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'appMenu', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] },
    { path: 'appInfoEmpresa', component: _components_infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_3__["InfoempresaComponent"] },
    { path: 'appInfoContacto', component: _components_infocontacto_infocontacto_component__WEBPACK_IMPORTED_MODULE_4__["InfocontactoComponent"] },
    { path: 'articulo', component: _components_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_5__["ArticuloComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/articulo/articulo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/articulo/articulo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container-article\">\n    <div style=\"width: 50%; margin: 3ex; background-color: #FFF\" class=\"container-article\">\n        <div style=\"margin-left: 5%\">\n            <h3 class=\"title\">INFORMACIÓN DEL CONTACTO</h3><br>\n            <li>\n                <ul style=\"font-weight: bold\">Dirección<br></ul>\n                <ul>{{info[1].direccion_contacto}}</ul><br>\n                <ul>{{info[1].ciudad_contacto}}</ul><br>\n                <ul style=\"font-weight: bold\">Correo electrónico<br></ul>\n                <ul>{{info[1].correo_electronico}}</ul><br>\n                <ul style=\"font-weight: bold\">Sitio Web<br></ul>\n                <ul><a href=\"#\">{{info[1].sitio_web_contacto}}</a></ul><br>\n                <ul style=\"font-weight: bold\">Red Social<br></ul>\n                <ul><a href=\"https://www.instagram.com/yxfa25/\">{{info[1].red_social}}</a></ul><br>\n                <ul style=\"font-weight: bold\">Dirección de correspondencia de contacto<br></ul>\n                <ul>{{info[1].direccion_correspondencia}}</ul>\n                <ul>{{info[1].ciudad_correspondencia}}</ul>\n                <ul style=\"font-weight: bold\">Número de teléfono<br></ul>\n                <ul>Fijo<br></ul>\n                <ul>{{info[1].telefono_correspondencia_fijo}}</ul>\n                <ul>Celular<br></ul>\n                <ul>{{info[1].telefono_correspondencia_celular}}</ul>\n            </li>\n        </div>\n    </div>\n    <!--SLIDE-->\n    <div style=\"width: 50%\">\n        <div style=\"height: 50%; width: 95%; margin: 3ex 3ex 0 0\">\n            <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\">\n                        <img src=\"./assets/images/2.jpg\" class=\"d-block w-100 h-100\" alt=\"...\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img src=\"./assets/images/3.jpg\" class=\"d-block w-100 h-100\" alt=\"...\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img src=\"./assets/images/1.jpg\" class=\"d-block w-100 h-100\" alt=\"...\">\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n        <div style=\"width: 100%\">\n            <!--Componente del contenido-->\n            <app-contenido></app-contenido>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/articulo/articulo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/articulo/articulo.component.ts ***!
  \***********************************************************/
/*! exports provided: ArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloComponent", function() { return ArticuloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/servicio.service */ "./src/app/service/servicio.service.ts");



var ArticuloComponent = /** @class */ (function () {
    function ArticuloComponent(_service) {
        this._service = _service;
        this.info = [];
        this.sidebar = false;
        console.log("Listo"); //Funciona el servicio
    }
    ArticuloComponent.prototype.ngOnInit = function () {
        this.info = this._service.getInfo();
        this.sidebar = this._service.getSidebar();
    };
    ArticuloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articulo',
            template: __webpack_require__(/*! ./articulo.component.html */ "./src/app/components/articulo/articulo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], ArticuloComponent);
    return ArticuloComponent;
}());



/***/ }),

/***/ "./src/app/components/contenido/contenido.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contenido/contenido.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-article\">\n    <p>\n        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,\n        you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary\n        of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/components/contenido/contenido.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contenido/contenido.component.ts ***!
  \*************************************************************/
/*! exports provided: ContenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenidoComponent", function() { return ContenidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContenidoComponent = /** @class */ (function () {
    function ContenidoComponent() {
    }
    ContenidoComponent.prototype.ngOnInit = function () {
    };
    ContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contenido',
            template: __webpack_require__(/*! ./contenido.component.html */ "./src/app/components/contenido/contenido.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContenidoComponent);
    return ContenidoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-home\">\n    <div style=\"width: 100%\">\n        <app-infoempresa></app-infoempresa>\n        <app-infocontacto></app-infocontacto>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/infocontacto/infocontacto.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/infocontacto/infocontacto.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-contact\">\n    <div style=\"display: block\">\n        <div style=\"height: 5ex\">\n            <h3 class=\"title\">INFORMACIÓN DE CONTACTO</h3><br>\n        </div>\n        <div style=\"display: flex\">\n            <div class=\"second-container\">\n                <li>\n                    <ul style=\"font-weight: bold\">Dirección <br></ul>\n                    <ul>{{info[1].direccion_contacto}}</ul>\n                    <ul>{{info[1].ciudad_contacto}}</ul><br>\n                    <ul style=\"font-weight: bold\">Correo electrónico<br></ul>\n                    <ul>{{info[1].correo_electronico}}</ul><br>\n                    <ul style=\"font-weight: bold\">Sitio Web<br></ul>\n                    <ul><a href=\"#\">{{info[1].sitio_web_contacto}}</a></ul><br>\n                    <ul style=\"font-weight: bold\">Red social<br></ul>\n                    <ul><a href=\"#\">{{info[1].red_social}}</a></ul><br>\n                </li>\n            </div>\n            <div class=\"third-container\">\n                <li>\n                    <ul style=\"font-weight: bold\">Dirección de correspondencia de correo<br></ul>\n                    <ul>{{info[1].direccion_contacto_correspondencia}}</ul>\n                    <ul>{{info[1].ciudad_contacto_correspondencia}}</ul><br>\n                    <ul style=\"font-weight: bold\">Número de teléfonos<br></ul>\n                    <ul>Fijo<br></ul>\n                    <ul>{{info[1].telefono_correspondencia_fijo}}</ul><br>\n                    <ul>Celular<br></ul>\n                    <ul>{{info[1].telefono_correspondencia_celular}}</ul><br>\n                </li>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/infocontacto/infocontacto.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/infocontacto/infocontacto.component.ts ***!
  \*******************************************************************/
/*! exports provided: InfocontactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfocontactoComponent", function() { return InfocontactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/servicio.service */ "./src/app/service/servicio.service.ts");



var InfocontactoComponent = /** @class */ (function () {
    function InfocontactoComponent(_service) {
        this._service = _service;
        this.info = [];
        console.log("Listo"); //Servicio funciona
    }
    InfocontactoComponent.prototype.ngOnInit = function () {
        this.info = this._service.getInfo();
    };
    InfocontactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infocontacto',
            template: __webpack_require__(/*! ./infocontacto.component.html */ "./src/app/components/infocontacto/infocontacto.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], InfocontactoComponent);
    return InfocontactoComponent;
}());



/***/ }),

/***/ "./src/app/components/infoempresa/infoempresa.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/infoempresa/infoempresa.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-container\">\n    <div style=\"margin: auto\">\n        <h3 class=\"title\">INFORMACIÓN DE LA EMPRESA</h3><br>\n        <li>\n            <ul style=\"font-weight: bold\">Nombre<br></ul>\n            <ul>{{info[0].nombre}}</ul><br>\n            <ul style=\"font-weight: bold\">Fecha de creación<br></ul>\n            <ul>{{info[0].fecha_creacion}}</ul><br>\n            <ul style=\"font-weight: bold\">Dirección<br></ul>\n            <ul>{{info[0].direccion}}</ul>\n            <ul>{{info[0].direccion2}}</ul>\n            <ul>{{info[0].piso}}</ul>\n            <ul>{{info[0].ciudad}}</ul><br>\n            <ul style=\"font-weight: bold\">Número de teléfono<br></ul>\n            <ul>Fijo<br></ul>\n            <ul>{{info[0].numero_fijo}}</ul><br>\n            <ul>Fax<br></ul>\n            <ul>{{info[0].numero_fax}}</ul><br>\n            <ul style=\"font-weight: bold\">Sitio Web<br></ul>\n            <ul><a href=\"https://www.quipux.com/web/\">{{info[0].sitio_web}}</a></ul><br>\n        </li>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/infoempresa/infoempresa.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/infoempresa/infoempresa.component.ts ***!
  \*****************************************************************/
/*! exports provided: InfoempresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoempresaComponent", function() { return InfoempresaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/servicio.service */ "./src/app/service/servicio.service.ts");



var InfoempresaComponent = /** @class */ (function () {
    function InfoempresaComponent(_service) {
        this._service = _service;
        this.info = [];
        console.log("Listo"); //Servicio Listo
    }
    InfoempresaComponent.prototype.ngOnInit = function () {
        this.info = this._service.getInfo();
    };
    InfoempresaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infoempresa',
            template: __webpack_require__(/*! ./infoempresa.component.html */ "./src/app/components/infoempresa/infoempresa.component.html"),
            providers: [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], InfoempresaComponent);
    return InfoempresaComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion sidebarBack sidebarOptions\" id=\"accordionExample\">\n    <div class=\"sidebarBack\">\n        <div class=\"sidebarBack sidebarHeight\" id=\"headingOne\">\n            <h2 class=\"\">\n                <i class=\"fas fa-briefcase fa-xs\" style=\"color:#edf1f5\"></i><button style=\"color: #edf1f5; text-decoration: none\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">EMPRESA</button>\n            </h2>\n        </div>\n\n        <div id=\"collapseOne\" class=\"collapse sidebarHeight\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <a href=\"/#/home\" style=\"color: #edf1f5; margin-left: 2ex; text-decoration: none\"> Empresa</a>\n        </div>\n    </div>\n    <div class=\"sidebarBack\">\n        <div class=\"sidebarBack sidebarHeight\" id=\"headingTwo\">\n            <h2 class=\"mb-0\">\n                <i class=\"far fa-newspaper fa-xs\" style=\"color:#edf1f5\"></i><button style=\"color: #edf1f5;text-decoration: none\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">ARTÍCULO</button>\n            </h2>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse sidebarHeight\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <a href=\"/#/articulo\" style=\"color: #edf1f5; margin-left: 2ex;  text-decoration: none\">Artículo</a>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--<div class=\"container-fluid\">\n    <div class=\"row d-flex d-md-block flex-nowrap wrapper\">\n        <div class=\"col-md-3 float-left col-1 pl-0 pr-0 collapse width \" id=\"sidebar\">\n            <div class=\"list-group border-0 card text-center text-md-left\">\n                <a href=\"#menu1\" class=\"list-group-item d-inline-block collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\"><i class=\"fa fa-dashboard\"></i> <span class=\"d-none d-md-inline\">Item 1</span> </a>\n                <div class=\"collapse\" id=\"menu1\">\n                    <a href=\"#menu1sub1\" class=\"list-group-item\" data-toggle=\"collapse\" aria-expanded=\"false\">Subitem 1 </a>\n                    <div class=\"collapse\" id=\"menu1sub1\">\n                        <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1\">Subitem 1 a</a>\n                        <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1\">Subitem 2 b</a>\n                        <a href=\"#menu1sub1sub1\" class=\"list-group-item\" data-toggle=\"collapse\" aria-expanded=\"false\">Subitem 3 c </a>\n                        <div class=\"collapse\" id=\"menu1sub1sub1\">\n                            <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1sub1\">Subitem 3 c.1</a>\n                            <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1sub1\">Subitem 3 c.2</a>\n                        </div>\n                        <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1\">Subitem 4 d</a>\n                        <a href=\"#menu1sub1sub2\" class=\"list-group-item\" data-toggle=\"collapse\" aria-expanded=\"false\">Subitem 5 e </a>\n                        <div class=\"collapse\" id=\"menu1sub1sub2\">\n                            <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1sub2\">Subitem 5 e.1</a>\n                            <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1sub1sub2\">Subitem 5 e.2</a>\n                        </div>\n                    </div>\n                    <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1\">Subitem 2</a>\n                    <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1\">Subitem 3</a>\n                </div>\n\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-heart\"></i> <span class=\"d-none d-md-inline\">Item 2</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-list\"></i> <span class=\"d-none d-md-inline\">Item 3</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-clock-o\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-th\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-gear\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-calendar\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"d-none d-md-inline\">Link</span></a>\n            </div>\n        </div>\n    </div>\n</div>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\" integrity=\"sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js\" integrity=\"sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ\" crossorigin=\"anonymous\"></script>\n-->"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/servicio.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/servicio.service.ts ***!
  \*********************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicioService = /** @class */ (function () {
    function ServicioService() {
        //Servicio para el manejo de datos
        this.sidebar = false;
        this.info = [
            {
                nombre: 'Quipux S.A',
                fecha_creacion: '1995/05/16',
                direccion: 'Carrera 43 A No. 3 Sur-130',
                direccion2: 'Ed. Milla de Oro Torre 1',
                piso: 'Piso 12',
                ciudad: 'Medellin Colombia',
                numero_fijo: '+ 57 (4) 313-70-00',
                numero_fax: '+ 57 (4) 313-44-77',
                sitio_web: 'www.quipux.com/site'
            },
            {
                direccion_contacto: 'Cra 52 # 91 - 66',
                ciudad_contacto: 'Medellin Colombia',
                correo_electronico: 'yarlinfino@gmail.com',
                sitio_web_contacto: 'www.yarlinfino.com',
                red_social: 'www.instagram.com/yxfa25',
                direccion_correspondencia: 'Cra 39 # 36 Sur - 56',
                ciudad_correspondencia: 'Envigado Antioquia',
                telefono_correspondencia_fijo: '(4) 265-77-57',
                telefono_correspondencia_celular: '(312) 792 11 22'
            },
        ];
    }
    ServicioService.prototype.getInfo = function () {
        return this.info;
    };
    ServicioService.prototype.getSidebar = function () {
        return this.sidebar;
    };
    ServicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicioService);
    return ServicioService;
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

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\pruebaQuipux\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map