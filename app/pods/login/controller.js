import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const ERROR_MAPPER = Object.freeze({
  '401': 'Invalid login credentials. Please try again.'
});

export default Controller.extend({
  session: service(),


  handleError(error) {
    const msg = ERROR_MAPPER[error.status.toString()]
    this.set('errorMessage', [msg]);
  },

  actions: {
    async authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      try {
        await this.session.authenticate('authenticator:devise-token-auth', identification, password);
      } catch(error) {
        this.handleError(error);
      }

      if (this.session.isAuthenticated) {
        // What to do with all this success?
      }
    }
  }
});
