import {QueryCtrl} from 'app/plugins/sdk';

import _ from 'lodash';

class ConditionalSwitchQueryCtrl extends QueryCtrl {
  constructor($scope, $injector, datasourceSrv) {
    super($scope, $injector);
    $scope.datasources = datasourceSrv.getAll();
  }
}

ConditionalSwitchQueryCtrl.templateUrl = 'partials/query.editor.html';
export {ConditionalSwitchQueryCtrl};
