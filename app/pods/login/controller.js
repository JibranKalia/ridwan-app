import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    async authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      try {
        await this.session.authenticate('authenticator:devise-token-auth', identification, password);
      } catch(e) {
        console.error(e)
        this.set('errorMessage', e);
      }

      if (this.session.isAuthenticated) {
        // What to do with all this success?
      }
    }
  }
});
