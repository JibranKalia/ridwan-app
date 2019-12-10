import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  currentUser: service(),
  store: service(),
  user: readOnly('currentUser.user'),

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('classroom', this.store.createRecord('classroom', {
      teacher: this.user.teacher
    }))
  }
})