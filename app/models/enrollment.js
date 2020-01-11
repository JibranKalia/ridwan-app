import Model, { belongsTo, hasMany } from '@ember-data/model';
import { readOnly } from '@ember/object/computed';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  // computed properties
  formattedName: readOnly('student.formattedName'),
  // relationships
  classroom: belongsTo('classroom'),
  student: belongsTo('student'),
  lessons: hasMany('lessons')
});
