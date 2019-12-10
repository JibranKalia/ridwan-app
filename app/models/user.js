import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // attributes
  email: attr('string'),
  type: attr('string'),
   
  // relationships
  teacher: belongsTo('teacher')
});
