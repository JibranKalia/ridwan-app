import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
  store: service(),

  model() {
    return hash({
      enrollment: this.modelFor('home.enrollments.show').enrollment,
    })
  }
})