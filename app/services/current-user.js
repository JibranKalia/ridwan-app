import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { resolve } from 'rsvp';
import LogRocket from 'logrocket';

export default Service.extend({
  session: service(),
  store: service(),
  rollbar: service(),

  load() {
    let userId = this.get('session.data.authenticated.user_id');
    if (!isEmpty(userId)) {
      return this.store.findRecord('user', userId)
        .then((user) => {
          this.set('user', user);
          this.set('rollbar.currentUser', { email: user.email, id: user.id });
          LogRocket.identify(user.id, { name: user.formattedName, email: user.email });
        });
    } else {
      return resolve();
    }
  }
});