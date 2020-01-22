import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model({ id }) {
    return hash({
      classroom: this.store.loadRecord('classroom', id, { include: 'enrollments' })
    })
  },
});
