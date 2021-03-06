'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'app-ridwan',
    podModulePrefix: 'app-ridwan/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: process.env.API_HOST,
    appDomainName: process.env.APP_DOMAIN_NAME,
    logRocket: process.env.LOG_ROCKET,
    isProduction: environment === 'production',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    emberRollbarClient: {
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
      enabled: environment === 'production',
      payload: {
        environment: environment,
        client: {
          javascript: {
            source_map_enabled: true,
            guess_uncaught_frames: true,
          }
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-paper'] = {
    'paper-toaster': {
      position: 'bottom left',
      duration: 4000
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
