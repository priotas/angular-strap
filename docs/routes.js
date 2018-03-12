export default function($stateProvider) {
  const alertState = {
    name: 'alerts',
    url: '/alerts',
    component: 'alertDoc'
  };

  const asideState = {
    name: 'aside',
    url: '/aside',
    component: 'asideDoc'
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
  $stateProvider.state(modalState);
  $stateProvider.state(tooltipState);
}
