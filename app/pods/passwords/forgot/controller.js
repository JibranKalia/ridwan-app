
import Controller from '@ember/controller';
import config from 'app-ridwan/config/environment';
import fetch from 'fetch';
import { A } from '@ember/array';

export default Controller.extend({
  emailSent: false,
  errors: A([]),

  handleError(errors) {
    this.errors.pushObject(errors[0]);
  },
  
  actions: {
    setEmail(value) {
      this.errors.clear();
      this.set('email', value)
    }, 
    async forgotPassword() {
      const redirectUrl = config.appDomainName + '/passwords/reset';
      const data = {
        email: this.email,
        redirect_url: redirectUrl 
      }
      try {
        const url = config.apiHost + '/auth/password'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
          }
        })
        const body = await response.json();
        if (!response.ok) { 
          this.handleError(body.errors);
          return;
        }
        this.set('emailSent', true);
        this.set('successMessage', body.message)
      } catch(error) {
        console.error(error);
      }
    }
  }
})