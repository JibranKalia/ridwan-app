import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import config from 'app-ridwan/config/environment';
import fetch from 'fetch';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';

const JSON_CONTENT_TYPE = 'application/json';

const defaultHeaders = {
  'accept': JSON_CONTENT_TYPE,
  'content-type': JSON_CONTENT_TYPE,
};

export default BaseAuthenticator.extend({
  authHost: config.apiHost + '/auth',
  serverTokenEndpoint: '/sign_in',
  invalidateEndpoint: '/sign_out',
  validateTokenEndpoint: '/validate_token',
  identificationAttributeName: 'email',

  authenticate(identification, password) {
    return new RSVP.Promise(async (resolve, reject) => {
      const {
        authHost,
        identificationAttributeName,
        serverTokenEndpoint,
      } = this;
      const url = joinUrl(authHost, serverTokenEndpoint);
      const requestPayload = {
        [identificationAttributeName]: identification,
        password,
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(requestPayload),
          headers: defaultHeaders,
        });
        if (!response.ok) return run(null, reject, response);
        const parsedResponse = await response.json();
        const result = {
          accessToken: response.headers.map['access-token'],
          expiry: response.headers.map['expiry'],
          tokenType: response.headers.map['token-type'],
          uid: response.headers.map['uid'],
          client: response.headers.map['client'],
          user_id: parsedResponse.data.id
        };
        run(null, resolve, result);
      } catch (error) {
        console.error(error);
        run(null, reject, error);
      }
    });
  },

  invalidate(data) {
    return new RSVP.Promise(async (resolve, reject) => {
      const { authHost, invalidateEndpoint } = this;
      const url = joinUrl(authHost, invalidateEndpoint);
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            ...defaultHeaders,
            ...deriveAccessHeaders(data),
          },
        });
        if (!response.ok) return run(null, reject, response);
        run(null, resolve, data);
      } catch (error) {
        console.error(error);
        run(null, reject, error);
      }
    });
  },

  restore(data) {
    return new RSVP.Promise(async (resolve, reject) => {
      const { authHost, validateTokenEndpoint } = this;
      const url = joinUrl(authHost, validateTokenEndpoint);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            ...defaultHeaders,
            ...deriveAccessHeaders(data),
          }
        });
        if (!response.ok) return run(null, reject, response);
        run(null, resolve, data);
      } catch (error) {
        console.error(error);
        run(null, reject, error);
      }
    });
  },
});

function deriveAccessHeaders(data) {
  return {
    'access-token': data.accessToken,
    client: data.client,
    uid: data.uid,
  };
}

function joinUrl(...segments) {
  return segments
    .map(segment => {
      return segment
        .replace(/^\//, '')
        .replace(/\/$/, '');
    })
    .join('/');
}