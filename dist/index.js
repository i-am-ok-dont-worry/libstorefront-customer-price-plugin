(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceDao = exports.CustomerPriceService = exports.CustomerPricePlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "CustomerPricePlugin", { enumerable: true, get: function () { return index_1.CustomerPricePlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "CustomerPriceService", { enumerable: true, get: function () { return index_2.CustomerPriceService; } });
var index_3 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "CustomerPriceDao", { enumerable: true, get: function () { return index_3.CustomerPriceDao; } });
__exportStar(__webpack_require__(/*! ./src/types */ "./src/types/index.ts"), exports);


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceDao = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var CustomerPriceDao = /** @class */ (function () {
    function CustomerPriceDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    CustomerPriceDao.prototype.getCustomerPrices = function (customerId, userToken) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/customer-price/' + customerId + '?token=' + userToken),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    CustomerPriceDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], CustomerPriceDao);
    return CustomerPriceDao;
}());
exports.CustomerPriceDao = CustomerPriceDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPricePlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var customer_price_reducers_1 = __webpack_require__(/*! ./store/customer-price.reducers */ "./src/store/customer-price.reducers.ts");
var customer_price_default_1 = __webpack_require__(/*! ./store/customer-price.default */ "./src/store/customer-price.default.ts");
var customer_price_selectors_1 = __webpack_require__(/*! ./store/customer-price.selectors */ "./src/store/customer-price.selectors.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/**
 * Plugin provides support for fetching individual customer prices and
 * manipulate product data to extend product with customer prices.
 *
 * Plugin uses AfterProductFetched hook to mutate product object after it
 * was fetched from ES.
 */
exports.CustomerPricePlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.CustomerPriceDao).to(dao_1.CustomerPriceDao);
    libstorefront.getIOCContainer().bind(service_1.CustomerPriceService).to(service_1.CustomerPriceService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('customerPrices', customer_price_reducers_1.customerPriceReducer, customer_price_default_1.CustomerPriceDefaultState));
    });
    libstorefront.listenTo(libstorefront_1.HookType.UserAuthorized, function (customer) {
        libstorefront.getIOCContainer().get(service_1.CustomerPriceService).getCustomerPrices(customer.id);
    });
    libstorefront.listenTo(libstorefront_1.HookType.AfterProductFetched, function (product) { return __awaiter(void 0, void 0, void 0, function () {
        var customer_price;
        return __generator(this, function (_a) {
            customer_price = customer_price_selectors_1.CustomerPriceSelectors.getCustomerPriceForProduct(product)(libstorefront.getState());
            if (customer_price) {
                Object.assign(product, { customer_price: customer_price });
                if (product.configurable_children) {
                    product.configurable_children = product.configurable_children.map(function (cc) { return (__assign(__assign({}, cc), { customer_price: customer_price })); });
                }
            }
            Object.assign(product, { priceObserver: utils_1.observeCustomerPrice });
            return [2 /*return*/, product];
        });
    }); });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var customer_price_thunks_1 = __webpack_require__(/*! ../store/customer-price.thunks */ "./src/store/customer-price.thunks.ts");
var CustomerPriceService = /** @class */ (function () {
    function CustomerPriceService(store) {
        this.store = store;
    }
    CustomerPriceService.prototype.getCustomerPrices = function (customerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.store.dispatch(customer_price_thunks_1.CustomerPriceThunks.loadCustomerPrices(customerId))];
            });
        });
    };
    CustomerPriceService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], CustomerPriceService);
    return CustomerPriceService;
}());
exports.CustomerPriceService = CustomerPriceService;


/***/ }),

/***/ "./src/store/customer-price.actions.ts":
/*!*********************************************!*\
  !*** ./src/store/customer-price.actions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceActions = void 0;
var CustomerPriceActions;
(function (CustomerPriceActions) {
    CustomerPriceActions.SN_CUSTOMER_PRICE = 'customer_prices';
    CustomerPriceActions.SET_CUSTOMER_PRICES = CustomerPriceActions.SN_CUSTOMER_PRICE + '/SET_CUSTOMER_PRICES';
    CustomerPriceActions.setCustomerPrices = function (customerPrices) { return ({
        type: CustomerPriceActions.SET_CUSTOMER_PRICES,
        payload: customerPrices
    }); };
    CustomerPriceActions.SET_CUSTOMER_PRICES_LOADED = CustomerPriceActions.SN_CUSTOMER_PRICE + '/LOADED';
    CustomerPriceActions.setLoaded = function (loaded) { return ({
        type: CustomerPriceActions.SET_CUSTOMER_PRICES_LOADED,
        payload: loaded
    }); };
})(CustomerPriceActions = exports.CustomerPriceActions || (exports.CustomerPriceActions = {}));


/***/ }),

/***/ "./src/store/customer-price.default.ts":
/*!*********************************************!*\
  !*** ./src/store/customer-price.default.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceDefaultState = void 0;
exports.CustomerPriceDefaultState = {
    items: [],
    loaded: false
};


/***/ }),

/***/ "./src/store/customer-price.reducers.ts":
/*!**********************************************!*\
  !*** ./src/store/customer-price.reducers.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerPriceReducer = void 0;
var customer_price_default_1 = __webpack_require__(/*! ./customer-price.default */ "./src/store/customer-price.default.ts");
var customer_price_actions_1 = __webpack_require__(/*! ./customer-price.actions */ "./src/store/customer-price.actions.ts");
var customerPriceReducer = function (state, action) {
    if (state === void 0) { state = customer_price_default_1.CustomerPriceDefaultState; }
    switch (action.type) {
        case customer_price_actions_1.CustomerPriceActions.SET_CUSTOMER_PRICES: {
            return __assign(__assign({}, state), { items: action.payload || [] });
        }
        case customer_price_actions_1.CustomerPriceActions.SET_CUSTOMER_PRICES_LOADED: {
            return __assign(__assign({}, state), { loaded: action.payload });
        }
        default: return state || customer_price_default_1.CustomerPriceDefaultState;
    }
};
exports.customerPriceReducer = customerPriceReducer;


/***/ }),

/***/ "./src/store/customer-price.selectors.ts":
/*!***********************************************!*\
  !*** ./src/store/customer-price.selectors.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceSelectors = void 0;
var reselect_1 = __webpack_require__(/*! reselect */ "reselect");
var CustomerPriceSelectors;
(function (CustomerPriceSelectors) {
    CustomerPriceSelectors.getCustomerPriceForProduct = function (product) { return reselect_1.createSelector([function (state) { return state.customerPrices; }], function (cp) {
        return cp.items.find(function (_a) {
            var product_id = _a.product_id;
            var isEqual = String(product_id) === String(product.id) || String(product_id) === String(product.parentId);
            return isEqual;
        });
    }); };
})(CustomerPriceSelectors = exports.CustomerPriceSelectors || (exports.CustomerPriceSelectors = {}));


/***/ }),

/***/ "./src/store/customer-price.thunks.ts":
/*!********************************************!*\
  !*** ./src/store/customer-price.thunks.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPriceThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var customer_price_actions_1 = __webpack_require__(/*! ./customer-price.actions */ "./src/store/customer-price.actions.ts");
var CustomerPriceThunks;
(function (CustomerPriceThunks) {
    var _this = this;
    CustomerPriceThunks.loadCustomerPrices = function (customerId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var userToken, response, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(customer_price_actions_1.CustomerPriceActions.setLoaded(false))];
                case 1:
                    _a.sent();
                    userToken = getState().user.token;
                    if (!userToken) {
                        libstorefront_1.Logger.info("Cannot fetch customer prices. User token is missing or invalid");
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.CustomerPriceDao).getCustomerPrices(customerId, userToken)];
                case 2:
                    response = _a.sent();
                    if (!response) return [3 /*break*/, 5];
                    items = response.result;
                    return [4 /*yield*/, dispatch(customer_price_actions_1.CustomerPriceActions.setCustomerPrices(items))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, dispatch(customer_price_actions_1.CustomerPriceActions.setLoaded(true))];
                case 4:
                    _a.sent();
                    return [2 /*return*/, items];
                case 5: return [4 /*yield*/, dispatch(customer_price_actions_1.CustomerPriceActions.setLoaded(true))];
                case 6:
                    _a.sent();
                    return [2 /*return*/, []];
            }
        });
    }); }; };
})(CustomerPriceThunks = exports.CustomerPriceThunks || (exports.CustomerPriceThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observeCustomerPrice = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var observeCustomerPrice = function (callback) {
    var interval = setInterval(function () {
        var customerPrices = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().customerPrices;
        if (customerPrices.loaded) {
            callback(customerPrices.items);
            clearInterval(interval);
            return;
        }
    }, 100);
};
exports.observeCustomerPrice = observeCustomerPrice;


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map