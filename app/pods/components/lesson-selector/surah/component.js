import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  constants: service(),

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