import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isPresent, isEmpty } from '@ember/utils';
import { range } from 'lodash';

export default Component.extend({
  classNames: [ 'lesson-item-component', 'lesson-item-component--small'],
  constants: service(),

  disabled: computed('selectedSurah', function() {
    return isEmpty(this.selectedSurah);
  }),

  fromAndToSurahSame: computed('from', 'lessonItem.{fromSurah,toSurah,fromAyah}', function() {
    return !this.from &&
            isPresent(this.lessonItem.fromSurah) &&
            isPresent(this.lessonItem.toSurah) &&
            isPresent(this.lessonItem.fromAyah) &&
            this.lessonItem.fromSurah === this.lessonItem.toSurah
  }), 

  options: computed('selectedSurah', 'fromAndToSurahSame', function() {
    if (isPresent(this.selectedSurah)) {
      if (this.fromAndToSurahSame) {
        return range(Number(this.lessonItem.fromAyah) + 1, this.selectedSurah.total_verses + 1).map(i => i.toString());
      }
      return range(1, this.selectedSurah.total_verses + 1).map(i => i.toString());
    }
    return undefined;
  }),

  selectedAyah: computed('lessonItem.{fromAyah,toAyah}', function() {
    return this.from ? this.lessonItem.fromAyah : this.lessonItem.toAyah;
  }),

  selectedSurah: computed('lessonItem.{fromSurah,toSurah}', function() {
    const surahNumber = this.from ? this.lessonItem.fromSurah : this.lessonItem.toSurah;
    return this.constants.SURAHS.find(r => r.number === surahNumber)
  }),

  wipeToValues() {
    if (this.lessonItem.fromSurah === this.lessonItem.toSurah && 
        Number(this.lessonItem.fromAyah) >= Number(this.lessonItem.toAyah)) {
      this.set('lessonItem.toAyah', undefined);
    }
  },

  actions: {
    setAyah(ayahNumber) {
      if (this.from) {
        this.set('lessonItem.fromAyah', ayahNumber);
        this.wipeToValues();
      } else {
        this.set('lessonItem.toAyah', ayahNumber);
      }
    }
  }
})
