import angular from 'angular';

import timepickerDoc from './timepicker.component';
import timepickerTpl from '../timepicker.tpl';

const MODULE_NAME = 'docs.timepicker';

angular.module(MODULE_NAME, []).component('timepickerDoc', timepickerDoc);

export default MODULE_NAME;
