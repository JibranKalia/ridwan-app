import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),

  formattedName: computed('firstName,lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
