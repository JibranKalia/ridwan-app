import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  constants: service(),
  tagName: '',

  actions: {
    handleEscapeKey(event) {
      if (event.which == this.constants.KEYCODE.ESCAPE) {
        event.stopPropagation();
      }
    }
  }
})