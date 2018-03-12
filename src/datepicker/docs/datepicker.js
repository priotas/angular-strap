import angular from 'angular';
import datepickerDoc from './datepicker.component';
import datepickerTpl from '../datepicker.tpl';

const MODULE_NAME = 'docs.datepicker';

angular
  .module(MODULE_NAME, [])
  .component('datepickerDoc', datepickerDoc)
  .config(function($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
      dateFormat: 'dd/MM/yyyy',
      startWeek: 1
    });
  });

export default MODULE_NAME;
