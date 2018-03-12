import angular from 'angular';
import selectDoc from './select.component';
import selectTpl from '../select.tpl';

const MODULE_NAME = 'docs.select';

angular
  .module(MODULE_NAME, [])
  .component('selectDoc', selectDoc);

export default MODULE_NAME;
