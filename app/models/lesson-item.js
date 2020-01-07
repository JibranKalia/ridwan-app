import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Model.extend({
  constants: service(),

  // attributes
  name: attr('string'),
  fromSurah: attr('number'),
  fromAyah: attr('number'),
  toSurah: attr('number'),
  toAyah: attr('number'),

  // computed properties
  fromSurahObject: computed('fromSurah', function() {
    return this.constants.SURAHS.find(r => r.number === this.fromSurah);
  }),
  toSurahObject: computed('toSurah', function() {
    return this.constants.SURAHS.find(r => r.number === this.toSurah);
  }),
  fromAyahString: computed('fromAyah', function() {
    return this.fromAyah.toString().padStart(2, '0');
  }),
  toAyahString: computed('toAyah', function() {
    return this.toAyah.toString().padStart(2, '0');
  }),

  // relationships
  lesson: belongsTo('lesson')
});
