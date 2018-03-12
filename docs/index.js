import angular from 'angular';
import angularAnimate from 'angular-animate';

// 3rd Party
import uiRouter from '@uirouter/angularjs';
import angularHljs from 'angular-highlightjs';
import $ from 'jquery';
import hljs from 'highlight.js';

// Fontawesom Icons
import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';
import faArrowsH from '@fortawesome/fontawesome-free-solid/faArrowsAltH';
import faAngleLeft from   '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from   '@fortawesome/fontawesome-free-solid/faAngleRight';

fontawesome.library.add(faUser, faCircle, faGithub, faCalendar, faArrowsH, faAngleLeft, faAngleRight)

// Docs
import docCss from './styles.scss';
import ngStrap from '../src/index';
import ngStrapTemplates from '../src/templates';
import alertDoc from 'alert/docs/alert';
import asideDoc from 'aside/docs/aside';
import buttonDoc from 'button/docs/button';
import collapseDoc from 'collapse/docs/collapse';
import datepickerDoc from 'datepicker/docs/datepicker';
import modalDoc from 'modal/docs/modal';
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
    modalDoc,
    tooltipDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
