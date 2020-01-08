import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
  import config from 'app-ridwan/config/environment';
import fetch from 'fetch';

export default Controller.extend({
  store: service(), 

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
          body: JSON.stringify(data)
        })
        if (!response.ok) { 
          //TODO 
        }
        const parsedResponse = await response.json();
      } catch(error) {
        console.error(error);
      }
    },
  }
})