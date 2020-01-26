import LogRocket from 'logrocket';

export function initialize(/* appInstance */) {
  LogRocket.init('l7oafo/ridwan-app-prod');
}

export default {
  name: 'log-rocket',
  initialize
};
