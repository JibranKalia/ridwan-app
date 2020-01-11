import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  router: service(),

  selectedRoute: computed('router.currentRouteName', function() {
    return this.router.currentRouteName
  })
});