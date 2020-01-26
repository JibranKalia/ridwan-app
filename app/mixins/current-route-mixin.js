import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Mixin.create({
  router: service(),

  selectedRoute: computed('router.currentRouteName', function() {
    return this.router.currentRouteName
  })
});
