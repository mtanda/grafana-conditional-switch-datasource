import _ from 'lodash';

export class ConditionalSwitchDatasource {
  constructor(instanceSettings, $q, datasourceSrv, templateSrv) {
    this.instanceSettings = instanceSettings;
    this.$q = $q;
    this.datasourceSrv = datasourceSrv;
    this.templateSrv = templateSrv;
  }

  query(options) {
    var sets = _.groupBy(options.targets, 'datasource');
    var promises = _.map(sets, targets => {
      let dsName = targets[0].datasource;
      if (dsName === 'Conditional Switch') {
        return this.$q.when({ data: [] });
      }

      return this.datasourceSrv.get(dsName).then(ds => {
        let dsName = this.templateSrv.replace('$ds_'+ ds.type, options.scopedVars);
        return this.datasourceSrv.get(dsName).then(ds => {
          let opt = angular.copy(options);
          return ds.query(opt);
        });
      });
    });

    return this.$q.all(promises).then(results => {
      return { data: _.flatten(_.map(results, 'data')) };
    });
  }

  testDatasource() {
    return this.q.when({ status: "success", message: "Data source is working", title: "Success" });
  }
}
