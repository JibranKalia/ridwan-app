import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import { readOnly } from '@ember/object/computed';

export default Component.extend({
  // currentUser: service(),
  store: service(),
  // user: readOnly('currentUser.user'),

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('lesson', this.store.createRecord('lesson', {
      enrollment: this.enrollment,
      date: new Date(),
      name: this.lessonName,
      type: this.type
    }))
  }
})