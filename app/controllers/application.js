import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    invalidateSession() {
      this.session.invalidate();
    },
    async authenticate() {
      let { email, password } = this.getProperties('identification', 'password');

      try {
        await this.get('session').authenticate('authenticator:oauth2', email, password);
      } catch(e) {
        this.set('errorMessage', e.error || e);
      }
    }
  }
});