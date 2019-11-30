import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'app-ridwan/config/environment';

export default JSONAPIAdapter.extend({
  host: config.apiHost,
});
