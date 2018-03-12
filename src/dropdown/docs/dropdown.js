import angular from 'angular';
import dropdownDoc from './dropdown.component';
import dropdownTpl from '../dropdown.tpl';
const MODULE_NAME = 'docs.dropdown';

angular
  .module(MODULE_NAME, [])
  .config(function($dropdownProvider) {
    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
  .component('dropdownDoc', dropdownDoc);

export default MODULE_NAME;
