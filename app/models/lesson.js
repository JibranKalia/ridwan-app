import Model, { attr, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  // attributes
  name: attr('string'),
  date: attr('date'),
  type: attr('string'),
  fromSurah: attr('number'),
  fromAyah: attr('number'),
  toSurah: attr('number'),
  toAyah: attr('number'),
  // computed properties
  formattedDate: computed('date', function() {
    return this.date.toLocaleDateString("en-US");
  }),

  // relationships
  enrollment: belongsTo('enrollment'),
});
