import angular from 'angular';
import navbarDoc from './navbar.component';

const MODULE_NAME = 'docs.navbar';

angular.module(MODULE_NAME, []).component('navbarDoc', navbarDoc);

export default MODULE_NAME;
