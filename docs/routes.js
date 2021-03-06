export default function($stateProvider) {
  'ngInject';
  
  const alertState = {
    name: 'alerts',
    url: '/alerts',
    component: 'alertDoc'
  };

  const asideState = {
    name: 'asides',
    url: '/asides',
    component: 'asideDoc'
  };

  const buttonState = {
    name: 'buttons',
    url: '/buttons',
    component: 'buttonDoc'
  };

  const carouselState = {
    name: 'carousels',
    url: '/carousels',
    component: 'carouselDoc'
  };

  const collapseState = {
    name: 'collapses',
    url: '/collapses',
    component: 'collapseDoc'
  };

  const datepickerState = {
    name: 'datepickers',
    url: '/datepickers',
    component: 'datepickerDoc'
  };

  const dropdownState = {
    name: 'dropdowns',
    url: '/dropdowns',
    component: 'dropdownDoc'
  };

  const modalState = {
    name: 'modals',
    url: '/modals',
    component: 'modalDoc'
  };

  const navbarState = {
    name: 'navbars',
    url: '/navbars',
    component: 'navbarDoc'
  };

  const popoverState = {
    name: 'popovers',
    url: '/popovers',
    component: 'popoverDoc'
  };

  const scrollspyState = {
    name: 'scrollspy',
    url: '/scrollspy',
    component: 'scrollspyDoc'
  };

  const selectState = {
    name: 'selects',
    url: '/selects',
    component: 'selectDoc'
  };

  const tabState = {
    name: 'tabs',
    url: '/tabs',
    component: 'tabDoc'
  };

  const tooltipState = {
    name: 'tooltips',
    url: '/tooltips',
    component: 'tooltipDoc'
  };

  const timepickerState = {
    name: 'timepickers',
    url: '/timepickers',
    component: 'timepickerDoc'
  };


  const typeaheadState = {
    name: 'typeaheads',
    url: '/typeaheads',
    component: 'typeaheadDoc'
  };

  $stateProvider.state(alertState);
  $stateProvider.state(asideState);
  $stateProvider.state(buttonState);
  $stateProvider.state(carouselState);
  $stateProvider.state(collapseState);
  $stateProvider.state(datepickerState);
  $stateProvider.state(dropdownState);
  $stateProvider.state(modalState);
  $stateProvider.state(navbarState);
  $stateProvider.state(popoverState);
  $stateProvider.state(scrollspyState);
  $stateProvider.state(selectState);
  $stateProvider.state(tabState);
  $stateProvider.state(tooltipState);
  $stateProvider.state(timepickerState);
  $stateProvider.state(typeaheadState);
}
