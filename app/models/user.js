import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  // attributes
  email: attr('string'),
  type: attr('string'),
   
  // relationships
  teacher: belongsTo('teacher')
});
