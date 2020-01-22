import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { mapBy } from '@ember/object/computed';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import { sort } from '@ember/object/computed';

export default Model.extend(LoadableModel, {
  studentNameAsc: Object.freeze(['studentName:asc']),
  // attributes
  name: attr('string'),
  // computed properties
  nameErrors: mapBy('errors.name', 'message'),
  // relationships
  teacher: belongsTo('teacher'),
  students: hasMany('students'),
  enrollments: hasMany('enrollments', { async: false }),
  sortedEnrollments: sort('enrollments', 'studentNameAsc'),
});
