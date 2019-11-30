import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'app-ridwan/config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default JSONAPIAdapter.extend({
  session: service(),

  host: config.apiHost,
  headers: computed('session.data.authenticated.{accessToken,client,uid}', function() {
    if (this.get("session.isAuthenticated")) {
      const data = this.get('session.data.authenticated');
      return {
        'access-token': data.accessToken,
        client: data.client,
        uid: data.uid,
      };
    }     
    return {};
  }),
});
