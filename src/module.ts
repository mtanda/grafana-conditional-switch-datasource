import { ConditionalSwitchDatasource } from './datasource';
import { ConditionalSwitchQueryCtrl } from './query_ctrl';
class ConditionalSwitchQueryOptionsCtrl {
  static templateUrl = 'partials/query.options.html';
}

export {
  ConditionalSwitchDatasource as Datasource,
  ConditionalSwitchQueryCtrl as QueryCtrl,
  ConditionalSwitchQueryOptionsCtrl as QueryOptionsCtrl
};
