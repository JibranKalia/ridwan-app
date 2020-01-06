import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  constants: service(),

  selectedSurah: computed('lessonItem.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lessonItem.fromSurah : this.lessonItem.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  actions: {
    setSurah(surah) {
      if (this.from) {
        this.set('lessonItem.fromSurah', surah.number);
      } else {
        this.set('lessonItem.toSurah', surah.number);
      }
    }
  }
})