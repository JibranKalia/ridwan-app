import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isPresent, isEmpty } from '@ember/utils';

export default Component.extend({
  constants: service(),

  disabled: computed('selectedSurah', function() {
    return isEmpty(this.selectedSurah);
  }),

  options: computed('selectedSurah', function() {
    if (isPresent(this.selectedSurah)) {
      return Array.from(Array(this.selectedSurah.total_verses), (_, index) => (index + 1).toString())
    }
  }),

  selectedAyah: computed('lessonItem.{fromAyah,toAyah}', function() {
    return this.from ? this.lessonItem.fromAyah : this.lessonItem.toAyah;
  }),

  selectedSurah: computed('lessonItem.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lessonItem.fromSurah : this.lessonItem.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  actions: {
    setAyah(ayahNumber) {
      if (this.from) {
        this.set('lessonItem.fromAyah', ayahNumber);
      } else {
        this.set('lessonItem.toAyah', ayahNumber);
      }
    }
  }
})
