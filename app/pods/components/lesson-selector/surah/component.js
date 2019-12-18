import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  constants: service(),

  selectedSurah: computed('lesson.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lesson.fromSurah : this.lesson.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  actions: {
    setSurah(surah) {
      if (this.from) {
        this.set('lesson.fromSurah', surah.number);
      } else {
        this.set('lesson.toSurah', surah.number);
      }
    }
  }
})