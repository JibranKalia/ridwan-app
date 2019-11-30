import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

const ERROR_MAPPER = Object.freeze({
  '401': 'Invalid login credentials. Please try again.'
});

export default Controller.extend({
  session: service(),
  errors: A([]),

  handleError(error) {
    const msg = ERROR_MAPPER[error.status.toString()]
    if (this.errors.length === 0) {
      this.errors.pushObject(msg);
    }
  },

  // eslint-disable-next-line ember/no-observers
  inputObserver: observer('password', function() {
    if (this.errors.length > 0) {
      this.set('errors', []);
    }
  }),

  actions: {
    async authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      try {
        await this.session.authenticate('authenticator:devise-token-auth', identification, password);
      } catch(error) {
        console.error(error);
        this.handleError(error);
      }
    },
  }
});
