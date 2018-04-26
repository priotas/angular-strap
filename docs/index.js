import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';

// 3rd Party
import uiRouter from '@uirouter/angularjs';
import angularHljs from 'angular-highlightjs';
import $ from 'jquery';
import hljs from 'highlight.js';

// Fontawesom Icons
import icons from './icons';

// Docs
import docCss from './styles.scss';
import angularStrap from '../src/angular-strap.js';
import ngStrapTemplates from '../src/angular-strap.tpl';
import alertDoc from 'alert/docs/alert';
import collapseDoc from 'collapse/docs/collapse';
import datepickerDoc from 'datepicker/docs/datepicker';
import dropdownDoc from 'dropdown/docs/dropdown';
import modalDoc from 'modal/docs/modal';
import popoverDoc from 'popover/docs/popover';
import selectDoc from 'select/docs/select';
import tabDoc from 'tab/docs/tab';
import tooltipDoc from 'tooltip/docs/tooltip';
import timepickerDoc from 'timepicker/docs/timepicker';

import routes from './routes';

angular
  .module('docs', [
    angularStrap,
    'hljs',
    uiRouter,
    angularAnimate,
    angularSanitize,
    alertDoc,
    collapseDoc,
    datepickerDoc,
    dropdownDoc,
    modalDoc,
    popoverDoc,
    selectDoc,
    tooltipDoc,
    timepickerDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
