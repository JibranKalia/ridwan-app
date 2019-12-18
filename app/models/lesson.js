import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // attributes
  name: attr('string'),
  date: attr('date'),
  type: attr('string'),
  fromSurah: attr('number'),
  fromAyah: attr('number'),
  toSurah: attr('number'),
  toAyah: attr('number'),

  // relationships
  enrollment: belongsTo('enrollment'),
});
