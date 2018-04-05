import angular from 'angular';
import MODULE_NAME from './angular-strap.module';

import alert from './alert/alert';
import aside from './aside/aside';
import button from './button/button';
import carousel from './carousel/carousel';
import collapse from './collapse/collapse';
import datepicker from './datepicker/datepicker';
import dropdown from './dropdown/dropdown';
import modal from './modal/modal';
import navbar from './navbar/navbar';
import popover from './popover/popover';
import scrollspy from './scrollspy/scrollspy';
import select from './select/select';
import tab from './tab/tab';
import timepicker from './timepicker/timepicker';
import tooltip from './tooltip/tooltip';
import typeahead from './typeahead/typeahead';

angular.module(MODULE_NAME, [
  alert,
  aside,
  button,
  carousel,
  collapse,
  datepicker,
  dropdown,
  modal,
  navbar,
  popover,
  scrollspy,
  select,
  tab,
  timepicker,
  tooltip,
  typeahead
]);


export default MODULE_NAME;