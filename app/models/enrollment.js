import Model from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { readOnly } from '@ember/object/computed';

export default Model.extend({
  // computed properties
  formattedName: readOnly('student.formattedName'),
  // relationships
  classroom: belongsTo('classroom'),
  student: belongsTo('student')
});