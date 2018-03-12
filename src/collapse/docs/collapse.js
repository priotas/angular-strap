import angular from 'angular';
import collapseDoc from './collapse.component';

const MODULE_NAME = 'docs.collapse';

angular.module(MODULE_NAME, []).component('collapseDoc', collapseDoc);

export default MODULE_NAME;
