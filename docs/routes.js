export default function($stateProvider) {
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


  const modalState = {
    name: 'modals',
    url: '/modals',
    component: 'modalDoc'
  };

  const tooltipState = {
    name: 'tooltips',
    url: '/tooltips',
    component: 'tooltipDoc'
  };

  $stateProvider.state(alertState);
  $stateProvider.state(asideState);
  $stateProvider.state(buttonState);
  $stateProvider.state(collapseState);
  $stateProvider.state(datepickerState);
  $stateProvider.state(modalState);
  $stateProvider.state(tooltipState);
}
