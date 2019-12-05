import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  currentUser: service(),
  user: readOnly('currentUser.user'),

  showCreateClassModal: false,

  reload() {
    this.send('routeReload');
  },

  actions: {
    openCreateClassModal() {
      this.set('showCreateClassModal', true);
    },
    closeModal(classroom) {
      classroom.destroyRecord();
      this.set('showCreateClassModal', false);
    },
    deleteClassroom(classroom) {
      //TODO: Display modal on deletion
      classroom.destroyRecord();
    },
    async saveClassroom(classroom) {
      try {
        await classroom.save();
        this.set('showCreateClassModal', false);
        this.reload();
      } catch(e) {
        console.error(e);
        //TODO: Show an alert on error
      }
    }
  }
});