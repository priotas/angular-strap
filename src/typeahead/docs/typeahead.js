import angular from 'angular';
import typeaheadDoc from './typeahead.component';
import typeaheadTpl from '../typeahead.tpl';
import typeaheadDocTpl from './typeahead.demo.tpl.html';

const MODULE_NAME = 'docs.typeahead';

angular
  .module(MODULE_NAME, [])
  .component('typeaheadDoc', typeaheadDoc)
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('typeahead/docs/typeahead.demo.tpl.html', typeaheadDocTpl);
    }
  ]);

export default MODULE_NAME;
