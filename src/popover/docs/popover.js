import angular from 'angular';
import popoverDoc from './popover.component';
import popoverTpl from '../popover.tpl';
import popoverDocTpl from './popover.demo.tpl.html';
import popoverContentDocTpl from './popover-content.demo.tpl.html';

const MODULE_NAME = 'docs.popover';

angular
  .module(MODULE_NAME, [])
  .component('popoverDoc', popoverDoc)
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('popover/docs/popover.demo.tpl.html', popoverDocTpl);
      $templateCache.put('popover/docs/popover-content.demo.tpl.html', popoverContentDocTpl);
    }
  ])
  .config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
      html: true
    });
  });

export default MODULE_NAME;
