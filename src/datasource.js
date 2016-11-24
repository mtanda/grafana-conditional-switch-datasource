import _ from 'lodash';

export class ConditionalSwitchDatasource {
  constructor(instanceSettings, $q, datasourceSrv) {
    this.instanceSettings = instanceSettings;
    this.$q = $q;
    this.datasourceSrv = datasourceSrv;
  }

  query(options) {
    console.log(options);
  }
}
