import angular from 'angular';
import tabDoc from './tab.component';
import tabTpl from '../tab.tpl';

const MODULE_NAME = 'docs.tab';

angular.module(MODULE_NAME, []).component('tabDoc', tabDoc);

export default MODULE_NAME;
