import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model({ id }) {
    return hash({
      enrollment: this.store.loadRecord('enrollment', id, { include: 'student,lessons,lessons.lesson_items' }),
      lessonTypes: this.store.loadRecords('lessonType', { enrollment_id: id } )
    })
  },
});
