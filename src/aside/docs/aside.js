import angular from 'angular';
import asideDoc from './aside.component';
import asideTpl from 'aside/aside.tpl';
import asideDocTpl from './aside.demo.tpl.html';

const MODULE_NAME = 'docs.aside';

angular
  .module(MODULE_NAME, [])
  .config(function($asideProvider) {
    angular.extend($asideProvider.defaults, {
      container: 'body',
      html: true
    });
  })
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('aside/docs/aside.demo.tpl.html', asideDocTpl);
    }
  ])
  .component('asideDoc', asideDoc);

export default MODULE_NAME;
