import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import config from 'app-ridwan/config/environment';
import fetch from 'fetch';
import { A } from '@ember/array';

export default Controller.extend({
  session: service(),
  errors: A([]),

  handleError(errorArray) {
    if (this.errors.length === 0) {
      errorArray.forEach(msg =>  this.errors.pushObject(msg) );
    }
  },

  actions: {
    async save() {
      const url = config.apiHost + '/users'
      const data = {
        first_name: this.firstName, 
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
          }
        })
        if (!response.ok) { 
          const error = await response.json();
          this.handleError(error.errors);
          return;
        }
        await this.session.authenticate('authenticator:devise-token-auth', this.email, this.password);
      } catch(error) {
        console.error(error);
      }
    },
  }
})