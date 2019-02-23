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

/***/ "./src/app/+state/item-list.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/+state/item-list.actions.ts ***!
  \*********************************************/
/*! exports provided: ItemListActionTypes, LoadItemList, ItemListLoadError, ItemListLoaded, AddItem, AddItemSuccess, AddItemError, UpdateItem, UpdateItemSuccess, UpdateItemError, DeleteItem, DeleteItemSuccess, DeleteItemError, fromItemListActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListActionTypes", function() { return ItemListActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItemList", function() { return LoadItemList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListLoadError", function() { return ItemListLoadError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListLoaded", function() { return ItemListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItem", function() { return AddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemSuccess", function() { return AddItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemError", function() { return AddItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItem", function() { return UpdateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemSuccess", function() { return UpdateItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemError", function() { return UpdateItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItem", function() { return DeleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemSuccess", function() { return DeleteItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemError", function() { return DeleteItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromItemListActions", function() { return fromItemListActions; });
var ItemListActionTypes;
(function (ItemListActionTypes) {
    ItemListActionTypes["LoadItemList"] = "[ItemList] Load ItemList";
    ItemListActionTypes["ItemListLoaded"] = "[ItemList] ItemList Loaded";
    ItemListActionTypes["ItemListLoadError"] = "[ItemList] ItemList Load Error";
    ItemListActionTypes["AddItem"] = "[ItemList] Add Item";
    ItemListActionTypes["AddItemSuccess"] = "[ItemList] Item Added";
    ItemListActionTypes["AddItemError"] = "[ItemList] Add Item Error";
    ItemListActionTypes["UpdateItem"] = "[ItemList] Update Item";
    ItemListActionTypes["UpdateItemSuccess"] = "[ItemList] Item Updated";
    ItemListActionTypes["UpdateItemError"] = "[ItemList] Update Item Error";
    ItemListActionTypes["DeleteItem"] = "[ItemList] Remove Item";
    ItemListActionTypes["DeleteItemSuccess"] = "[ItemList] Item Removed";
    ItemListActionTypes["DeleteItemError"] = "[ItemList] Remove Item Error";
})(ItemListActionTypes || (ItemListActionTypes = {}));
var LoadItemList = /** @class */ (function () {
    function LoadItemList() {
        this.type = ItemListActionTypes.LoadItemList;
    }
    return LoadItemList;
}());

var ItemListLoadError = /** @class */ (function () {
    function ItemListLoadError(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.ItemListLoadError;
    }
    return ItemListLoadError;
}());

var ItemListLoaded = /** @class */ (function () {
    function ItemListLoaded(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.ItemListLoaded;
    }
    return ItemListLoaded;
}());

var AddItem = /** @class */ (function () {
    function AddItem(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.AddItem;
    }
    return AddItem;
}());

var AddItemSuccess = /** @class */ (function () {
    function AddItemSuccess(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.AddItemSuccess;
    }
    return AddItemSuccess;
}());

var AddItemError = /** @class */ (function () {
    function AddItemError(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.AddItemError;
    }
    return AddItemError;
}());

var UpdateItem = /** @class */ (function () {
    function UpdateItem(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.UpdateItem;
    }
    return UpdateItem;
}());

var UpdateItemSuccess = /** @class */ (function () {
    function UpdateItemSuccess(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.UpdateItemSuccess;
    }
    return UpdateItemSuccess;
}());

var UpdateItemError = /** @class */ (function () {
    function UpdateItemError(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.UpdateItemError;
    }
    return UpdateItemError;
}());

var DeleteItem = /** @class */ (function () {
    function DeleteItem(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.DeleteItem;
    }
    return DeleteItem;
}());

var DeleteItemSuccess = /** @class */ (function () {
    function DeleteItemSuccess(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.DeleteItemSuccess;
    }
    return DeleteItemSuccess;
}());

var DeleteItemError = /** @class */ (function () {
    function DeleteItemError(payload) {
        this.payload = payload;
        this.type = ItemListActionTypes.DeleteItemError;
    }
    return DeleteItemError;
}());

var fromItemListActions = {
    LoadItemList: LoadItemList,
    ItemListLoaded: ItemListLoaded,
    ItemListLoadError: ItemListLoadError,
    AddItem: AddItem,
    AddItemSuccess: AddItemSuccess,
    AddItemError: AddItemError,
    UpdateItem: UpdateItem,
    UpdateItemSuccess: UpdateItemSuccess,
    UpdateItemError: UpdateItemError,
    DeleteItem: DeleteItem,
    DeleteItemSuccess: DeleteItemSuccess,
    DeleteItemError: DeleteItemError
};


/***/ }),

/***/ "./src/app/+state/item-list.effects.ts":
/*!*********************************************!*\
  !*** ./src/app/+state/item-list.effects.ts ***!
  \*********************************************/
/*! exports provided: ItemListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListEffects", function() { return ItemListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _nrwl_nx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var _item_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-list.actions */ "./src/app/+state/item-list.actions.ts");





var ItemListEffects = /** @class */ (function () {
    function ItemListEffects(actions$, dataPersistence) {
        this.actions$ = actions$;
        this.dataPersistence = dataPersistence;
        this.loadItemList$ = this.dataPersistence.pessimisticUpdate(_item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListActionTypes"].LoadItemList, {
            run: function (action, state) {
                var storage = localStorage.getItem('provenir-coffee');
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListLoaded"](JSON.parse(storage));
            },
            onError: function (action, error) {
                // snackbar(error);
                console.error('Error', error);
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListLoadError"](error);
            }
        });
        this.addItem$ = this.dataPersistence.pessimisticUpdate(_item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListActionTypes"].AddItem, {
            run: function (action, state) {
                var storage = JSON.parse(localStorage.getItem('provenir-coffee'));
                var update = storage.concat([action.payload]).sort(function (a, b) { return a.id - b.id; });
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddItemSuccess"](update);
            },
            onError: function (action, error) {
                // snackbar(error);
                console.error('Error', error);
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddItemError"](error);
            }
        });
        this.updateItem$ = this.dataPersistence.pessimisticUpdate(_item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListActionTypes"].UpdateItem, {
            run: function (action, state) {
                var storage = JSON.parse(localStorage.getItem('provenir-coffee'));
                var update = storage.map(function (item) { return item.id === action.payload.id ? action.payload : item; });
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateItemSuccess"](update);
            },
            onError: function (action, error) {
                // snackbar(error);
                console.error('Error', error);
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateItemError"](error);
            }
        });
        this.deleteItem$ = this.dataPersistence.pessimisticUpdate(_item_list_actions__WEBPACK_IMPORTED_MODULE_4__["ItemListActionTypes"].DeleteItem, {
            run: function (action, state) {
                var storage = JSON.parse(localStorage.getItem('provenir-coffee'));
                var update = storage.filter(function (item) { return item.id !== action.payload.id; });
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteItemSuccess"](update);
            },
            onError: function (action, error) {
                // snackbar(error);
                console.error('Error', error);
                return new _item_list_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteItemError"](error);
            }
        });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemListEffects.prototype, "loadItemList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemListEffects.prototype, "addItem$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemListEffects.prototype, "updateItem$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemListEffects.prototype, "deleteItem$", void 0);
    ItemListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _nrwl_nx__WEBPACK_IMPORTED_MODULE_3__["DataPersistence"]])
    ], ItemListEffects);
    return ItemListEffects;
}());



/***/ }),

/***/ "./src/app/+state/item-list.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/+state/item-list.reducer.ts ***!
  \*********************************************/
/*! exports provided: ITEMLIST_FEATURE_KEY, initialState, itemListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMLIST_FEATURE_KEY", function() { return ITEMLIST_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemListReducer", function() { return itemListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _item_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list.actions */ "./src/app/+state/item-list.actions.ts");


var ITEMLIST_FEATURE_KEY = 'itemList';
var initialState = {
    list: [],
    loaded: false
};
function itemListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _item_list_actions__WEBPACK_IMPORTED_MODULE_1__["ItemListActionTypes"].AddItemSuccess:
        case _item_list_actions__WEBPACK_IMPORTED_MODULE_1__["ItemListActionTypes"].UpdateItemSuccess:
        case _item_list_actions__WEBPACK_IMPORTED_MODULE_1__["ItemListActionTypes"].DeleteItemSuccess:
        case _item_list_actions__WEBPACK_IMPORTED_MODULE_1__["ItemListActionTypes"].ItemListLoaded: {
            // safer to update state each time since
            // LocalStorage can be easily manipulated
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: action.payload, loaded: true });
            break;
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/+state/item-list.selectors.ts":
/*!***********************************************!*\
  !*** ./src/app/+state/item-list.selectors.ts ***!
  \***********************************************/
/*! exports provided: itemListQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemListQuery", function() { return itemListQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _item_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list.reducer */ "./src/app/+state/item-list.reducer.ts");


// Lookup the 'ItemList' feature state managed by NgRx
var getItemListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_item_list_reducer__WEBPACK_IMPORTED_MODULE_1__["ITEMLIST_FEATURE_KEY"]);
var getLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemListState, function (state) { return state.loaded; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemListState, function (state) { return state.error; });
var getAllItemList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemListState, getLoaded, function (state, isLoaded) {
    return isLoaded ? state.list : [];
});
var getSelectedId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemListState, function (state) { return state.selectedId; });
var getSelectedItemList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllItemList, getSelectedId, function (itemList, id) {
    var result = itemList.find(function (it) { return it['id'] === id; });
    return result ? Object.assign({}, result) : undefined;
});
var itemListQuery = {
    getLoaded: getLoaded,
    getError: getError,
    getAllItemList: getAllItemList,
    getSelectedItemList: getSelectedItemList
};


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed #layout>\n    <mdl-layout-header>\n        <mdl-layout-header-row>\n            <mdl-layout-title>Provenir-Coffee</mdl-layout-title>\n            <mdl-layout-spacer></mdl-layout-spacer>\n            <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n                <ng-container *ngTemplateOutlet=\"links\"></ng-container>\n            </nav>\n        </mdl-layout-header-row>\n    </mdl-layout-header>\n    <mdl-layout-drawer *ngIf=\"isLoggedIn\">\n        <nav class=\"mdl-navigation\">\n            <ng-container *ngTemplateOutlet=\"links\"></ng-container>\n        </nav>\n    </mdl-layout-drawer>\n    <mdl-layout-content>\n        <router-outlet></router-outlet>\n    </mdl-layout-content>\n</mdl-layout>\n<ng-template #links>\n    <a class=\"mdl-navigation__link\" routerLink=\"/login\" (click)=\"layout.closeDrawer()\">Change User</a>\n    <a class=\"mdl-navigation__link\" routerLink=\"/coffee\" (click)=\"layout.closeDrawer()\">Item List</a>\n    <a class=\"mdl-navigation__link\" (click)=\"logout(); layout.closeDrawer()\">Log Out</a>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NvZmZlZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = 'coffee';
        this.isLoggedIn = this.loginService.isLoggedIn();
    }
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'provenir-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nrwl_nx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _item_list_item_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-list/item-list.module */ "./src/app/item-list/item-list.module.ts");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-mdl/core */ "../../node_modules/@angular-mdl/core/components/index.js");
/* harmony import */ var _angular_mdl_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-mdl/select */ "../../node_modules/@angular-mdl/select/index.js");
/* harmony import */ var _login_login_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _item_list_item_list_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-list/item-list-routing.module */ "./src/app/item-list/item-list-routing.module.ts");
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.guard */ "./src/app/login/login.guard.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_item_list_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./+state/item-list.reducer */ "./src/app/+state/item-list.reducer.ts");
/* harmony import */ var _state_item_list_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./+state/item-list.effects */ "./src/app/+state/item-list.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngrx-store-freeze */ "../../node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_20__);





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_mdl_core__WEBPACK_IMPORTED_MODULE_8__["MdlModule"],
                _angular_mdl_select__WEBPACK_IMPORTED_MODULE_9__["MdlSelectModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _item_list_item_list_module__WEBPACK_IMPORTED_MODULE_7__["ItemListModule"],
                _nrwl_nx__WEBPACK_IMPORTED_MODULE_4__["NxModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'login', children: _login_login_routing_module__WEBPACK_IMPORTED_MODULE_10__["loginRoutes"] },
                    {
                        path: 'coffee',
                        children: _item_list_item_list_routing_module__WEBPACK_IMPORTED_MODULE_11__["itemListRoutes"],
                        canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_12__["LoginGuard"]]
                    }
                ], { initialNavigation: 'enabled' }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ itemList: _state_item_list_reducer__WEBPACK_IMPORTED_MODULE_15__["itemListReducer"] }, {
                    initialState: { itemList: _state_item_list_reducer__WEBPACK_IMPORTED_MODULE_15__["initialState"] },
                    metaReducers: !_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_20__["storeFreeze"]] : []
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_state_item_list_effects__WEBPACK_IMPORTED_MODULE_16__["ItemListEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__["StoreRouterConnectingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/item-list/item-list-form/item-list-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/item-list/item-list-form/item-list-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"itemForm\">\r\n    <h3 class=\"mdl-dialog__title\">Item Details</h3>\r\n    <div class=\"mdl-dialog__content\">\r\n        <mdl-textfield type=\"number\" label=\"ID\" formControlName=\"id\" floating-label></mdl-textfield>\r\n        <mdl-select formControlName=\"icon\" label=\"Icon\" style=\"width: 100%;\" floating-label>\r\n            <mdl-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                <mdl-icon>{{ icon }}</mdl-icon>\r\n                <!-- <span>{{ icon }}</span> -->\r\n            </mdl-option>\r\n        </mdl-select>\r\n        <mdl-textfield type=\"text\" label=\"Name\" formControlName=\"name\" floating-label></mdl-textfield>\r\n        <mdl-textfield type=\"text\" label=\"Description\" rows=\"1\" maxrows=\"2\" formControlName=\"description\" floating-label></mdl-textfield>\r\n        <mdl-select #cupSelect formControlName=\"cup\" label=\"Cup\" autocomplete=\"true\" style=\"width: 100%;\" floating-label>\r\n            <mdl-option *ngFor=\"let c of cups\" [value]=\"c\">{{ c }}</mdl-option>\r\n        </mdl-select>\r\n        <mdl-select #flavorSelect formControlName=\"flavor\" label=\"Flavor\" autocomplete=\"true\" style=\"width: 100%;\" floating-label>\r\n            <mdl-option *ngFor=\"let f of flavors\" [value]=\"f\">{{ f }}</mdl-option>\r\n        </mdl-select>\r\n        <mdl-select #toppingSelect formControlName=\"topping\" label=\"Topping\" autocomplete=\"true\" style=\"width: 100%;\" floating-label>\r\n            <mdl-option *ngFor=\"let t of toppings\" [value]=\"t\">{{ t }}</mdl-option>\r\n        </mdl-select>\r\n    </div>\r\n    <div class=\"mdl-dialog__actions\">\r\n        <button mdl-button\r\n            mdl-ripple\r\n            type=\"button\"\r\n            (click)=\"save()\"\r\n            [disabled]=\"!itemForm.valid\"\r\n            mdl-button-type=\"raised\"\r\n            mdl-colored=\"primary\">\r\n                Save\r\n        </button>\r\n        <button mdl-button\r\n            mdl-ripple\r\n            type=\"button\"\r\n            (click)=\"cancel()\"\r\n            mdl-button-type=\"raised\">\r\n                Cancel\r\n        </button>\r\n        <button mdl-button\r\n            mdl-ripple\r\n            type=\"button\"\r\n            *ngIf=\"!isNew\"\r\n            (click)=\"delete()\"\r\n            mdl-button-type=\"raised\"\r\n            mdl-colored=\"accent\">\r\n                Delete\r\n        </button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/item-list/item-list-form/item-list-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/item-list/item-list-form/item-list-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-dialog__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .mdl-dialog__content * {\n    flex: 1 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY29mZmVlL3NyYy9hcHAvaXRlbS1saXN0L2l0ZW0tbGlzdC1mb3JtL0M6XFxVc2Vyc1xcQW5kcmV3XFxEb2N1bWVudHNcXEdpdEh1YlxccHJvdmVuaXIvYXBwc1xcY29mZmVlXFxzcmNcXGFwcFxcaXRlbS1saXN0XFxpdGVtLWxpc3QtZm9ybVxcaXRlbS1saXN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQixFQUd0QjtFQU5EO0lBS1EsVUFBUyxFQUFJIiwiZmlsZSI6ImFwcHMvY29mZmVlL3NyYy9hcHAvaXRlbS1saXN0L2l0ZW0tbGlzdC1mb3JtL2l0ZW0tbGlzdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kbC1kaWFsb2dfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICogeyBmbGV4OiAxIDE7IH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/item-list/item-list-form/item-list-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/item-list/item-list-form/item-list-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListFormComponent", function() { return ItemListFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdl/core */ "../../node_modules/@angular-mdl/core/components/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../+state/item-list.actions */ "./src/app/+state/item-list.actions.ts");






var ItemListFormComponent = /** @class */ (function () {
    function ItemListFormComponent(dialog, data, store) {
        this.dialog = dialog;
        this.store = store;
        this.icons = ['local_cafe', 'hot_tub', 'cake', 'whatshot', 'star_border', 'ac_unit'];
        this.cups = ['regular', 'vacuum insulated', "world's best dog", 'ice cream cone', 'beer mug'];
        this.flavors = ['regular', 'french vanilla', 'columbian', 'strawberry', 'rum'];
        this.toppings = ['none', 'whipped cream', 'salty foam', 'sprinkles'];
        this.isNew = data ? false : true;
        this.itemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.id : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.icon : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.description : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            cup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.cup : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            flavor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.flavor : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            topping: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data ? data.topping : ''),
        });
    }
    ItemListFormComponent.prototype.ngOnInit = function () {
    };
    ItemListFormComponent.prototype.save = function () {
        var item = this.itemForm.value;
        if (this.isNew) {
            this.store.dispatch(new _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__["fromItemListActions"].AddItem(item));
        }
        else {
            this.store.dispatch(new _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__["fromItemListActions"].UpdateItem(item));
        }
        this.dialog.hide();
    };
    ItemListFormComponent.prototype.delete = function () {
        var item = this.itemForm.value;
        if (item.id) {
            this.store.dispatch(new _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__["fromItemListActions"].DeleteItem(item));
        }
        this.dialog.hide();
    };
    ItemListFormComponent.prototype.cancel = function () {
        this.dialog.hide();
    };
    ItemListFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'provenir-item-list-form',
            template: __webpack_require__(/*! ./item-list-form.component.html */ "./src/app/item-list/item-list-form/item-list-form.component.html"),
            styles: [__webpack_require__(/*! ./item-list-form.component.scss */ "./src/app/item-list/item-list-form/item-list-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('data')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_mdl_core__WEBPACK_IMPORTED_MODULE_2__["MdlDialogReference"], Object, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ItemListFormComponent);
    return ItemListFormComponent;
}());



/***/ }),

/***/ "./src/app/item-list/item-list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/item-list/item-list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: itemListRoutes, ItemListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemListRoutes", function() { return itemListRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListRoutingModule", function() { return ItemListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list.component */ "./src/app/item-list/item-list.component.ts");




var itemListRoutes = [
    { path: '', component: _item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"] }
];
var ItemListRoutingModule = /** @class */ (function () {
    function ItemListRoutingModule() {
    }
    ItemListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(itemListRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItemListRoutingModule);
    return ItemListRoutingModule;
}());



/***/ }),

/***/ "./src/app/item-list/item-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/item-list/item-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdl-list>\n    <mdl-list-item\n        *ngFor=\"let item of itemList$ | async\"\n        (click)=\"show(item, $event)\"\n        lines=\"2\">\n        <mdl-list-item-primary-content>\n            <mdl-icon mdl-list-item-icon>{{ item.icon }}</mdl-icon>\n            <span>{{ item.name }}</span>\n            <mdl-list-item-sub-title>{{ item.description }}</mdl-list-item-sub-title>\n        </mdl-list-item-primary-content>\n        <mdl-list-item-secondary-content>\n            <!-- <mdl-icon (click)=\"show(item, $event)\">edit</mdl-icon> -->\n            <!-- <mdl-icon (click)=\"delete(item, $event)\">delete</mdl-icon> -->\n        </mdl-list-item-secondary-content>\n    </mdl-list-item>\n</mdl-list>\n<mdl-button\n    class=\"fab\"\n    mdl-button-type=\"fab\"\n    (click)=\"show(null, $event)\"\n    mdl-colored=\"primary\"\n    mdl-ripple>\n        <mdl-icon>add</mdl-icon>\n</mdl-button>    "

/***/ }),

/***/ "./src/app/item-list/item-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/item-list/item-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdl-list-item:hover {\n  background: lightgray; }\n\n.fab {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem; }\n\nmdl-list-item-sub-title {\n  overflow-x: auto;\n  text-overflow: ellipsis; }\n\n.mdl-dialog__actions {\n  padding-left: 8px;\n  flex-wrap: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY29mZmVlL3NyYy9hcHAvaXRlbS1saXN0L0M6XFxVc2Vyc1xcQW5kcmV3XFxEb2N1bWVudHNcXEdpdEh1YlxccHJvdmVuaXIvYXBwc1xcY29mZmVlXFxzcmNcXGFwcFxcaXRlbS1saXN0XFxpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNwQiIsImZpbGUiOiJhcHBzL2NvZmZlZS9zcmMvYXBwL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZGwtbGlzdC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmZhYiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxufVxyXG5cclxubWRsLWxpc3QtaXRlbS1zdWItdGl0bGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubWRsLWRpYWxvZ19fYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/item-list/item-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-list/item-list.component.ts ***!
  \**************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdl/core */ "../../node_modules/@angular-mdl/core/components/index.js");
/* harmony import */ var _item_list_form_item_list_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list-form/item-list-form.component */ "./src/app/item-list/item-list-form/item-list-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../+state/item-list.actions */ "./src/app/+state/item-list.actions.ts");
/* harmony import */ var _state_item_list_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../+state/item-list.selectors */ "./src/app/+state/item-list.selectors.ts");
/* harmony import */ var _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/cup-of-coffee */ "./src/app/models/cup-of-coffee.ts");








var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(modal, store) {
        this.modal = modal;
        this.store = store;
        this.itemList$ = this.store.select(_state_item_list_selectors__WEBPACK_IMPORTED_MODULE_6__["itemListQuery"].getAllItemList);
    }
    ItemListComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('provenir-coffee')) {
            var initialData = [
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](1, 'local_cafe', 'Regular Coffee', 'coffee that is regular', 'regular', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](2, 'whatshot', 'Fancy Coffee', 'like regular coffee but for fancy people', 'vacuum insulated', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](3, 'star_border', 'Favorite Coffee', 'coffee for people that like sweet drinks', 'regular', 'french vanilla', 'salty foam'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](4, 'ac_unit', 'Ice Cream', 'I thought this was supposed to be coffee', 'ice cream cone', 'strawberry', 'sprinkles'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](5, 'hot_tub', 'uhhh', 'coffee but not for normal people', "world's best dog", 'rum', 'sprinkles'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](6, 'local_cafe', 'Filler Coffee 1', "it's free real estate", 'regular', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](7, 'local_cafe', 'Filler Coffee 2', "it's free real estate", 'regular', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](8, 'local_cafe', 'Filler Coffee 3', "it's free real estate", 'regular', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](9, 'local_cafe', 'Filler Coffee 4', "it's free real estate", 'regular', 'regular', 'none'),
                new _models_cup_of_coffee__WEBPACK_IMPORTED_MODULE_7__["CupOfCoffee"](99, 'cake', 'The Last Coffee', 'this coffee is at the bottom of the list and probably covered by the button', 'regular', 'regular', 'sprinkles'),
            ];
            console.log(initialData);
            localStorage.setItem('provenir-coffee', JSON.stringify(initialData));
        }
        this.store.dispatch(new _state_item_list_actions__WEBPACK_IMPORTED_MODULE_5__["fromItemListActions"].LoadItemList);
    };
    ItemListComponent.prototype.show = function (data, mouseEvent) {
        var config = {
            clickOutsideToClose: true,
            styles: {
                'min-width': '300px',
                'max-width': '80%',
                'max-height': '80%',
                'overflow-y': 'scroll',
            },
            isModal: true,
            openFrom: mouseEvent,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        };
        this.modal.showCustomDialog(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ component: _item_list_form_item_list_form_component__WEBPACK_IMPORTED_MODULE_3__["ItemListFormComponent"], providers: [{ provide: 'data', useValue: data }] }, config));
    };
    ItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'provenir-item-list',
            template: __webpack_require__(/*! ./item-list.component.html */ "./src/app/item-list/item-list.component.html"),
            styles: [__webpack_require__(/*! ./item-list.component.scss */ "./src/app/item-list/item-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_mdl_core__WEBPACK_IMPORTED_MODULE_2__["MdlDialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/item-list/item-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/item-list/item-list.module.ts ***!
  \***********************************************/
/*! exports provided: ItemListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListModule", function() { return ItemListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _item_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list-routing.module */ "./src/app/item-list/item-list-routing.module.ts");
/* harmony import */ var _item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-list.component */ "./src/app/item-list/item-list.component.ts");
/* harmony import */ var _item_list_form_item_list_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-list-form/item-list-form.component */ "./src/app/item-list/item-list-form/item-list-form.component.ts");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdl/core */ "../../node_modules/@angular-mdl/core/components/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_mdl_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-mdl/select */ "../../node_modules/@angular-mdl/select/index.js");









var ItemListModule = /** @class */ (function () {
    function ItemListModule() {
    }
    ItemListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_mdl_core__WEBPACK_IMPORTED_MODULE_6__["MdlModule"],
                _angular_mdl_select__WEBPACK_IMPORTED_MODULE_8__["MdlSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _item_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemListRoutingModule"]
            ],
            declarations: [
                _item_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemListComponent"],
                _item_list_form_item_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ItemListFormComponent"]
            ],
            entryComponents: [_item_list_form_item_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ItemListFormComponent"]],
        })
    ], ItemListModule);
    return ItemListModule;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: loginRoutes, LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoutes", function() { return loginRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




var loginRoutes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-centered\">\n    <form [formGroup]=\"loginForm\" class=\"flex-list\">\n        <mdl-textfield\n            label=\"Username\"\n            name=\"username\"\n            type=\"text\"\n            formControlName=\"username\"\n            floating-label\n            pattern=\"^[a-zA-Z0-9._]+$\"\n            error-msg=\"Please use valid characters\">\n        </mdl-textfield>\n        <mdl-textfield\n            label=\"Password\"\n            name=\"password\"\n            type=\"password\"\n            formControlName=\"password\"\n            floating-label>\n        </mdl-textfield>\n        <p>\n            The password is the same as the username\n        </p>\n        <button\n            mdl-button\n            type=\"button\"\n            (click)=\"login()\"\n            [disabled]=\"!loginForm.valid\"\n            mdl-button-type=\"raised\"\n            mdl-ripple\n            mdl-colored=\"primary\">\n                Submit\n        </button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-centered {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%; }\n\n.flex-list {\n  display: flex;\n  flex-direction: column; }\n\n.flex-list > * {\n  flex: 1 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvY29mZmVlL3NyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBbmRyZXdcXERvY3VtZW50c1xcR2l0SHViXFxwcm92ZW5pci9hcHBzXFxjb2ZmZWVcXHNyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osWUFBVyxFQUNkOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFVBQVMsRUFDWiIsImZpbGUiOiJhcHBzL2NvZmZlZS9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC1saXN0ID4gKiB7XHJcbiAgICBmbGV4OiAxIDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    LoginComponent.prototype.login = function () {
        sessionStorage.setItem('username', this.loginForm.value.username);
        sessionStorage.setItem('password', this.loginForm.value.password);
        this.router.navigate(['/coffee']);
    };
    LoginComponent.prototype.logout = function () {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'provenir-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        console.log(sessionStorage);
        if (this.loginService.isLoggedIn()) {
            return true;
        }
        else {
            console.warn('Not logged in');
            this.router.navigate(['login']);
            return false;
        }
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdl/core */ "../../node_modules/@angular-mdl/core/components/index.js");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_mdl_core__WEBPACK_IMPORTED_MODULE_6__["MdlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.isLoggedIn = function () {
        var credentials = {
            username: sessionStorage.getItem('username'),
            password: sessionStorage.getItem('password')
        };
        return this.validateCredentials(credentials);
    };
    LoginService.prototype.logout = function () {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
    };
    LoginService.prototype.validateCredentials = function (credentials) {
        return credentials.username && credentials.password && credentials.username === credentials.password;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/models/cup-of-coffee.ts":
/*!*****************************************!*\
  !*** ./src/app/models/cup-of-coffee.ts ***!
  \*****************************************/
/*! exports provided: CupOfCoffee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupOfCoffee", function() { return CupOfCoffee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/app/models/item.ts");


var CupOfCoffee = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CupOfCoffee, _super);
    function CupOfCoffee(id, icon, name, description, cup, flavor, topping) {
        var _this = _super.call(this, id, icon, name, description) || this;
        _this.cup = cup;
        _this.flavor = flavor;
        _this.topping = topping;
        return _this;
    }
    return CupOfCoffee;
}(_item__WEBPACK_IMPORTED_MODULE_1__["Item"]));



/***/ }),

/***/ "./src/app/models/item.ts":
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(id, icon, name, description) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.description = description;
    }
    return Item;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andrew\Documents\GitHub\provenir\apps\coffee\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map