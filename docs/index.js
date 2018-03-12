import angular from 'angular';
import angularAnimate from 'angular-animate';

// 3rd Party
import uiRouter from '@uirouter/angularjs';
import angularHljs from 'angular-highlightjs';
import $ from 'jquery';
import hljs from 'highlight.js';

// Fontawesom Icons
import icons from './icons';

// Docs
import docCss from './styles.scss';
import ngStrap from '../src/index';
import ngStrapTemplates from '../src/templates';
import alertDoc from 'alert/docs/alert';
import asideDoc from 'aside/docs/aside';
import buttonDoc from 'button/docs/button';
import collapseDoc from 'collapse/docs/collapse';
import datepickerDoc from 'datepicker/docs/datepicker';
import dropdownDoc from 'dropdown/docs/dropdown';
import modalDoc from 'modal/docs/modal';
import navbarDoc from 'navbar/docs/navbar';
import popoverDoc from 'popover/docs/popover';
import scrollspyDoc from 'scrollspy/docs/scrollspy';
import selectDoc from 'select/docs/select';
import tabDoc from 'tab/docs/tab';
import tooltipDoc from 'tooltip/docs/tooltip';

import routes from './routes';

angular
  .module('docs', [
    'mgcrea.ngStrap',
    'hljs',
    uiRouter,
    angularAnimate,
    alertDoc,
    asideDoc,
    buttonDoc,
    collapseDoc,
    datepickerDoc,
    dropdownDoc,
    modalDoc,
    navbarDoc,
    popoverDoc,
    scrollspyDoc,
    selectDoc,
    tabDoc,
    tooltipDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
