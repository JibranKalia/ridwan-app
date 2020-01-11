import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { mapBy } from '@ember/object/computed';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  // attributes
  name: attr('string'),
  // computed properties
  nameErrors: mapBy('errors.name', 'message'),
  // relationships
  teacher: belongsTo('teacher'),
  students: hasMany('students'),
  enrollments: hasMany('enrollments', { async: false })
});
