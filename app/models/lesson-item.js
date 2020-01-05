import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // attributes
  fromSurah: attr('number'),
  fromAyah: attr('number'),
  toSurah: attr('number'),
  toAyah: attr('number'),

  // relationships
  lesson: belongsTo('lesson')
});
