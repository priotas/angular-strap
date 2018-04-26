import angular from 'angular';
import MODULE_NAME from './angular-strap.module';

import alert from './alert/alert';
import collapse from './collapse/collapse';
import datepicker from './datepicker/datepicker';
import dropdown from './dropdown/dropdown';
import modal from './modal/modal';
import popover from './popover/popover';
import select from './select/select';
import timepicker from './timepicker/timepicker';
import tooltip from './tooltip/tooltip';

angular.module(MODULE_NAME, [
  alert,
  carousel,
  collapse,
  datepicker,
  dropdown,
  modal,
  popover,
  select,
  tab,
  timepicker,
  tooltip
]);


export default MODULE_NAME;
