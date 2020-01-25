import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model({ id }) {
    return hash({
      classroom: this.store.loadRecord('classroom', id, { include: 'enrollments' })
    })
  },
});
