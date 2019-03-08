define(["angular","app/plugins/sdk","lodash"], function(__WEBPACK_EXTERNAL_MODULE_angular__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionalSwitchDatasource = undefined;

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _angular = __webpack_require__(/*! angular */ "angular");

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalSwitchDatasource =
/** @class */
function () {
  function ConditionalSwitchDatasource(instanceSettings, $q, datasourceSrv, templateSrv) {
    this.instanceSettings = instanceSettings;
    this.$q = $q;
    this.datasourceSrv = datasourceSrv;
    this.templateSrv = templateSrv;
  }

  ConditionalSwitchDatasource.prototype.query = function (options) {
    var _this = this;

    var sets = _lodash2.default.groupBy(options.targets, 'datasource');

    var promises = _lodash2.default.map(sets, function (targets) {
      var dsName = targets[0].datasource;

      if (dsName === 'Conditional Switch') {
        return _this.$q.when({
          data: []
        });
      }

      return _this.datasourceSrv.get(dsName).then(function (ds) {
        var dsName = _this.templateSrv.replace('$ds_' + ds.type, options.scopedVars);

        return _this.datasourceSrv.get(dsName).then(function (ds) {
          var opt = _angular2.default.copy(options);

          return ds.query(opt);
        });
      });
    });

    return this.$q.all(promises).then(function (results) {
      return {
        data: _lodash2.default.flatten(_lodash2.default.map(results, 'data'))
      };
    });
  };

  ConditionalSwitchDatasource.prototype.testDatasource = function () {
    return this.$q.when({
      status: "success",
      message: "Data source is working",
      title: "Success"
    });
  };

  return ConditionalSwitchDatasource;
}();

exports.ConditionalSwitchDatasource = ConditionalSwitchDatasource;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptionsCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = __webpack_require__(/*! ./datasource */ "./datasource.ts");

var _query_ctrl = __webpack_require__(/*! ./query_ctrl */ "./query_ctrl.ts");

var ConditionalSwitchQueryOptionsCtrl =
/** @class */
function () {
  function ConditionalSwitchQueryOptionsCtrl() {}

  ConditionalSwitchQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
  return ConditionalSwitchQueryOptionsCtrl;
}();

exports.Datasource = _datasource.ConditionalSwitchDatasource;
exports.QueryCtrl = _query_ctrl.ConditionalSwitchQueryCtrl;
exports.QueryOptionsCtrl = ConditionalSwitchQueryOptionsCtrl;

/***/ }),

/***/ "./query_ctrl.ts":
/*!***********************!*\
  !*** ./query_ctrl.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionalSwitchQueryCtrl = undefined;

var _sdk = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");

var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ConditionalSwitchQueryCtrl =
/** @class */
function (_super) {
  __extends(ConditionalSwitchQueryCtrl, _super);

  function ConditionalSwitchQueryCtrl($scope, $injector, datasourceSrv) {
    var _this = _super.call(this, $scope, $injector) || this;

    $scope.datasources = datasourceSrv.getAll();
    return _this;
  }

  ConditionalSwitchQueryCtrl.templateUrl = 'partials/query.editor.html';
  return ConditionalSwitchQueryCtrl;
}(_sdk.QueryCtrl);

exports.ConditionalSwitchQueryCtrl = ConditionalSwitchQueryCtrl;

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map