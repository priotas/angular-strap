import angular from 'angular';
import carouselTpl from './carousel.tpl.html';
import slideTpl from './slide.tpl.html';
import MODULE_NAME from './carousel.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('carousel/carousel.tpl.html', carouselTpl);
  }
]);

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('carousel/slide.tpl.html', slideTpl);
  }
]);
