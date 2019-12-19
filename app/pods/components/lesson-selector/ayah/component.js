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

  selectedAyah: computed('lesson.{fromAyah,toAyah}', function() {
    return this.from ? this.lesson.fromAyah : this.lesson.toAyah;
  }),

  selectedSurah: computed('lesson.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lesson.fromSurah : this.lesson.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  actions: {
    setAyah(ayahNumber) {
      if (this.from) {
        this.set('lesson.fromAyah', ayahNumber);
      } else {
        this.set('lesson.toAyah', ayahNumber);
      }
    }
  }
})
