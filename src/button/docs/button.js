import angular from 'angular';
import buttonDoc from './button.component';

const MODULE_NAME = 'docs.button';

angular.module(MODULE_NAME, []).component('buttonDoc', buttonDoc);

export default MODULE_NAME;
