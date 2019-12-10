import Model, { attr } from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { mapBy } from '@ember/object/computed';

export default Model.extend({
  // attributes
  name: attr('string'),
  // computed properties
  nameErrors: mapBy('errors.name', 'message'),
  // relationships
  teacher: belongsTo('teacher'),
  students: hasMany('students'),
  enrollments: hasMany('enrollments')
});
