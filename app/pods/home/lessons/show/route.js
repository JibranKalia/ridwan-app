import Route from '@ember/routing/route';

import { hash } from 'rsvp';

export default Route.extend({
  model({ id }) {
    return hash({
      lesson: this.store.findRecord('lesson', id, { reload: true })
    })
  }
})