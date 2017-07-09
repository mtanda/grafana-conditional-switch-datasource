'use strict';

System.register(['app/plugins/sdk', 'lodash'], function (_export, _context) {
  "use strict";

  var QueryCtrl, _, ConditionalSwitchQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      _export('ConditionalSwitchQueryCtrl', ConditionalSwitchQueryCtrl = function (_QueryCtrl) {
        _inherits(ConditionalSwitchQueryCtrl, _QueryCtrl);

        function ConditionalSwitchQueryCtrl($scope, $injector, datasourceSrv) {
          _classCallCheck(this, ConditionalSwitchQueryCtrl);

          var _this = _possibleConstructorReturn(this, (ConditionalSwitchQueryCtrl.__proto__ || Object.getPrototypeOf(ConditionalSwitchQueryCtrl)).call(this, $scope, $injector));

          $scope.datasources = datasourceSrv.getAll();
          return _this;
        }

        return ConditionalSwitchQueryCtrl;
      }(QueryCtrl));

      ConditionalSwitchQueryCtrl.templateUrl = 'partials/query.editor.html';

      _export('ConditionalSwitchQueryCtrl', ConditionalSwitchQueryCtrl);
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
