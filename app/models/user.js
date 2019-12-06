import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  // attributes
  firstName: attr('string'),
  lastName: attr('string'),
  // computed properties
  formattedName: computed('firstName,lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
