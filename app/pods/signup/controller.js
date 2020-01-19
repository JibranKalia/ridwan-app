import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { camelize } from '@ember/string';
import config from 'app-ridwan/config/environment';
import fetch from 'fetch';
import { A } from '@ember/array';
import { get } from 'lodash';

export default Controller.extend({
  session: service(),
  errors: A([]),

  handleError(errorArray) {
    for (const property in errorArray) {
      this.errors.pushObject({
        field_name: property,
        message: get(errorArray, [property, '0'], "is invalid")
      })
    }
  },

  actions: {
    setValue(errorField, value) {
      const error = this.errors.findBy('field_name', errorField);
      if (error) {
        this.errors.removeObject(error);
      }
      this.set(camelize(errorField), value);
    },

    async save() {
      const url = config.apiHost + '/auth'
      const data = {
        first_name: this.firstName, 
        last_name: this.lastName,
        email: this.email,
        role: 'none',
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