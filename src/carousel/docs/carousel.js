import angular from 'angular';
import carouselDoc from './carousel.component';

const MODULE_NAME = 'docs.carousel';

angular.module(MODULE_NAME, []).component('carouselDoc', carouselDoc);

export default MODULE_NAME;
