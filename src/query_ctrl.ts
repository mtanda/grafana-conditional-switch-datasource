import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class ConditionalSwitchQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

  constructor($scope, $injector, datasourceSrv) {
    super($scope, $injector);
    $scope.datasources = datasourceSrv.getAll();
  }
}
