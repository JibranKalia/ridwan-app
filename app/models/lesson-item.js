import Model, { attr, belongsTo } from '@ember-data/model';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { mapBy } from '@ember/object/computed';
import { isPresent } from '@ember/utils';

export default Model.extend({
  constants: service(),

  // attributes
  name: attr('string'),
  fromSurah: attr('number'),
  fromAyah: attr('number'),
  toSurah: attr('number'),
  toAyah: attr('number'),
  qualityOne: attr('number', { defaultValue: 0 }),
  qualityTwo: attr('number', { defaultValue: 0 }),

  // computed properties
  qualityOneErrors: mapBy('errors.qualityOne', 'message'),
  qualityTwoErrors: mapBy('errors.qualityTwo', 'message'),
  fromSurahObject: computed('fromSurah', function() {
    return this.constants.SURAHS.find(r => r.number === this.fromSurah);
  }),
  toSurahObject: computed('toSurah', function() {
    return this.constants.SURAHS.find(r => r.number === this.toSurah);
  }),
  fromAyahString: computed('fromAyah', function() {
    if (isPresent(this.fromAyah)) {
      return this.fromAyah.toString().padStart(2, '0');
    }
    return null;
  }),
  toAyahString: computed('toAyah', function() {
    if (isPresent(this.toAyah)) {
      return this.toAyah.toString().padStart(2, '0');
    }
    return null;
  }),

  // relationships
  lesson: belongsTo('lesson')
});
