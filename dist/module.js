'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var ConditionalSwitchDatasource, ConditionalSwitchQueryCtrl, ConditionalSwitchQueryOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      ConditionalSwitchDatasource = _datasource.ConditionalSwitchDatasource;
    }, function (_query_ctrl) {
      ConditionalSwitchQueryCtrl = _query_ctrl.ConditionalSwitchQueryCtrl;
    }],
    execute: function () {
      _export('QueryOptionsCtrl', ConditionalSwitchQueryOptionsCtrl = function ConditionalSwitchQueryOptionsCtrl() {
        _classCallCheck(this, ConditionalSwitchQueryOptionsCtrl);
      });

      ConditionalSwitchQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', ConditionalSwitchDatasource);

      _export('QueryCtrl', ConditionalSwitchQueryCtrl);

      _export('QueryOptionsCtrl', ConditionalSwitchQueryOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
