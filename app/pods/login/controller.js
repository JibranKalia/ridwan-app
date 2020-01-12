import Controller from '@ember/controller';
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
    this.errors.pushObject(msg);
  },

  actions: {
    setPassword(value) {
      this.errors.clear();
      this.set('password', value);
    },

    async authenticate() {
      let { identification, password } = this;
      try {
        await this.session.authenticate('authenticator:devise-token-auth', identification, password);
      } catch(error) {
        console.error(error);
        this.handleError(error);
      }
    },
  }
});
