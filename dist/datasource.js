'use strict';

System.register(['lodash'], function (_export, _context) {
  "use strict";

  var _, _createClass, ConditionalSwitchDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('ConditionalSwitchDatasource', ConditionalSwitchDatasource = function () {
        function ConditionalSwitchDatasource(instanceSettings, $q, datasourceSrv, templateSrv) {
          _classCallCheck(this, ConditionalSwitchDatasource);

          this.instanceSettings = instanceSettings;
          this.$q = $q;
          this.datasourceSrv = datasourceSrv;
          this.templateSrv = templateSrv;
        }

        _createClass(ConditionalSwitchDatasource, [{
          key: 'query',
          value: function query(options) {
            var _this = this;

            var sets = _.groupBy(options.targets, 'datasource');
            var promises = _.map(sets, function (targets) {
              var dsName = targets[0].datasource;
              if (dsName === 'Conditional Switch') {
                return _this.$q.when({ data: [] });
              }

              return _this.datasourceSrv.get(dsName).then(function (ds) {
                var dsName = _this.templateSrv.replace('$ds_' + ds.type, options.scopedVars);
                return _this.datasourceSrv.get(dsName).then(function (ds) {
                  var opt = angular.copy(options);
                  return ds.query(opt);
                });
              });
            });

            return this.$q.all(promises).then(function (results) {
              return { data: _.flatten(_.map(results, 'data')) };
            });
          }
        }, {
          key: 'testDatasource',
          value: function testDatasource() {
            return this.$q.when({ status: "success", message: "Data source is working", title: "Success" });
          }
        }]);

        return ConditionalSwitchDatasource;
      }());

      _export('ConditionalSwitchDatasource', ConditionalSwitchDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
