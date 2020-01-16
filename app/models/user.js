import Model, { attr, belongsTo } from '@ember-data/model';
import { mapBy } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Model.extend({
  // attributes
  email: attr('string'),
  role: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  // computed properties
  firstNameErrors: mapBy('errors.firstName', 'message'),
  lastNameErrors: mapBy('errors.lastName', 'message'),
  formattedName: computed('firstName,lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
  // relationships
  teacher: belongsTo('teacher')
});
