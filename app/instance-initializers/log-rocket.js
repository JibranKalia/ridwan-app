import LogRocket from 'logrocket';
import config from 'app-ridwan/config/environment';

export function initialize(/* appInstance */) {
  if (config.isProduction) {
    LogRocket.init(config.logRocket);
  }
}

export default {
  name: 'log-rocket',
  initialize
};
