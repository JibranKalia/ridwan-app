import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),
  needRerouteToClassroom: Object.freeze(['home.setup', 'home.index']),

  afterModel(_, transition) {
    if (this.get('currentUser.user.role') === 'none') {
      this.transitionTo('home.setup')
    } else if (this.needRerouteToClassroom.includes(transition.targetName)) {
      this.transitionTo('home.classrooms')
    }
  },

  actions: {
    routeReload() {
      this.refresh();
    }
  }
});
