import Model, { attr } from '@ember-data/model';
import { hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  // attributes
  firstName: attr('string'),
  lastName: attr('string'),
  // computed properties
  firstNameErrors: computed.mapBy('errors.firstName', 'message'),
  lastNameErrors: computed.mapBy('errors.lastName', 'message'),
  formattedName: computed('firstName,lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
  // relationships
  classrooms: hasMany('classrooms')
});
