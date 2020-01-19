import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  beforeModel() {
    if (this.get('currentUser.user.role') === 'none') {
      this.transitionTo('home.setup')
    } else {
      this.transitionTo('home.classrooms')
    }
  },

  actions: {
    routeReload() {
      this.refresh();
    }
  }
});
