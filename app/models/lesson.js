import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // attributes
  name: attr('string'),
  date: attr('date'),
  type: attr('string'),

  // relationships
  enrollment: belongsTo('enrollment'),
});
