import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: [ 'lesson-item-component'],
  constants: service(),

  selectedSurah: computed('lessonItem.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lessonItem.fromSurah : this.lessonItem.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  options: computed('from', 'lessonItem.fromSurah', function() {
    if (this.from) {
      return this.constants.SURAHS;
    } else {
      return this.constants.SURAHS.slice(this.lessonItem.fromSurah - 1);
    }
  }), 

  wipeToValues() {
    if (this.lessonItem.fromSurah === this.lessonItem.toSurah) {
      this.set('lessonItem.toAyah', undefined);
    } else if (this.lessonItem.fromSurah > this.lessonItem.toSurah) {
      this.set('lessonItem.toSurah', undefined);
      this.set('lessonItem.toAyah', undefined);
    }
  },

  actions: {
    setSurah(surah) {
      if (this.from) {
        this.set('lessonItem.fromSurah', surah.number);
        this.wipeToValues();
      } else {
        this.set('lessonItem.toSurah', surah.number);
      }
    }
  }
})