import { mapBy } from '@ember/object/computed';
import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default Model.extend({
  // attributes
  firstName: attr('string'),
  lastName: attr('string'),
  // computed properties
  firstNameErrors: mapBy('errors.firstName', 'message'),
  lastNameErrors: mapBy('errors.lastName', 'message'),
  formattedName: computed('firstName,lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
  // relationships
  user: belongsTo('user')
});
