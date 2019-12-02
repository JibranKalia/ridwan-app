import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  router: service(),
  session: service(),

  actions: {
    transitionToClassrooms() {
      this.router.transitionTo('home.classrooms');
    },
    invalidateSession() {
      this.session.invalidate();
    }
  }
})