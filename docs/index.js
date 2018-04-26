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
import asideDoc from 'aside/docs/aside';
import buttonDoc from 'button/docs/button';
import carouselDoc from 'carousel/docs/carousel';
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
import timepickerDoc from 'timepicker/docs/timepicker';
import typeaheadDoc from 'typeahead/docs/typeahead';

import routes from './routes';

angular
  .module('docs', [
    angularStrap,
    'hljs',
    uiRouter,
    angularAnimate,
    angularSanitize,
    alertDoc,
    asideDoc,
    buttonDoc,
    carouselDoc,
    collapseDoc,
    datepickerDoc,
    dropdownDoc,
    modalDoc,
    navbarDoc,
    popoverDoc,
    scrollspyDoc,
    selectDoc,
    tabDoc,
    tooltipDoc,
    timepickerDoc,
    typeaheadDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
