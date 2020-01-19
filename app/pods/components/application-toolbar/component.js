import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  showSideNav: true,

  actions: {
    goToPreviousRoute() {
      if (this.recordId) {
        this.router.transitionTo(this.previousRoute, this.recordId);
      } else {
        this.router.transitionTo(this.previousRoute);
      }
    },
  }
})