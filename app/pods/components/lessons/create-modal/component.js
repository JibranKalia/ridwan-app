import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('lesson', this.store.createRecord('lesson', {
      enrollment: this.enrollment,
      date: new Date(),
      name: this.lessonName,
      type: this.type
    }))
  },
})