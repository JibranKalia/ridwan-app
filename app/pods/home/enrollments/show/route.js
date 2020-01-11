import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model({ id }) {
    return hash({
      enrollment: this.store.loadRecord('enrollment', id, { include: 'student,lessons,lessons.lesson_items' })
    })
  },
});
