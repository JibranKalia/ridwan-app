import Controller from '@ember/controller';
import { camelize } from '@ember/string';
import config from 'app-ridwan/config/environment';
import fetch from 'fetch';

const JSON_CONTENT_TYPE = 'application/json';

const defaultHeaders = {
  'accept': JSON_CONTENT_TYPE,
  'content-type': JSON_CONTENT_TYPE,
};

export default Controller.extend({
  success: false,
  queryParams: ['access-token', 'client', 'uid'],

  deriveAccessHeaders() {
    return {
      'access-token': this.get('access-token'),
      client: this.client,
      uid: this.uid,
    };
  },

  actions: {
    setValue(errorField, value) {
      this.set(camelize(errorField), value);
    },

    async resetPassword() {
      const url = config.apiHost + '/auth/password'
      const data = {
        password: this.password,
        password_confirmation: this.passwordConfirmation
      }

      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            ...defaultHeaders,
            ...this.deriveAccessHeaders(this.urlParams)
          }
        })
        if (!response.ok) { 
          const error = await response.json();
          console.log('error', error);
          return;
        }
        this.set('success', true);
      } catch(error) {
        console.error(error);
      }
    },
  }
})