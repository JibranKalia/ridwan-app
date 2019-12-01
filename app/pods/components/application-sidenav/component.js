import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentUser: service(),
  session: service(),
  router: service(),

  actions: {
    transitionToClassrooms() {
      this.router.transitionTo('home.classrooms');
    }
  }
})