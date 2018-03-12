import angular from 'angular';
import angularAnimate from 'angular-animate';

// 3rd Party
import uiRouter from '@uirouter/angularjs';
import angularHljs from 'angular-highlightjs';
import $ from 'jquery';
import hljs from 'highlight.js';

// Fontawesom Icons
import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';
import faArrowsH from '@fortawesome/fontawesome-free-solid/faArrowsAltH';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import faExternalLink from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

fontawesome.library.add(
  faUser,
  faCircle,
  faGithub,
  faCalendar,
  faArrowsH,
  faAngleLeft,
  faAngleRight,
  faDownload,
  faGlobe,
  faExternalLink,
  faChevronRight
);

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
    tooltipDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
