import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('passwords', function() {
    this.route('forgot');
    this.route('reset');
  })
  this.route('home', function() {
    this.route('classrooms', function() {
      this.route('index', { path: '/' });
      this.route('show', { path: '/:id' } );
    })
    this.route('enrollments', function() {
      this.route('show', { path: '/:id' }, function() {
        this.route('lessons', { path: '/'});
        this.route('messages');
        this.route('reports');
        this.route('payments');
      });
    })
  });
});
