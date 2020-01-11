import { mapBy } from '@ember/object/computed';
import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
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
  classrooms: hasMany('classrooms')
});
