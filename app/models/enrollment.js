import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  // attributes
  studentName: attr('string'),
  // relationships
  classroom: belongsTo('classroom'),
  student: belongsTo('student'),
  lessons: hasMany('lessons')
});
