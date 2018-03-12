import angular from 'angular';
import scrollspyDoc from './scrollspy.component';

const MODULE_NAME = 'docs.scrollspy';

angular.module(MODULE_NAME, []).component('scrollspyDoc', scrollspyDoc);

export default MODULE_NAME;
