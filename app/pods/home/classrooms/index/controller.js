import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  currentUser: service(),
  paperToaster: service(),
  user: readOnly('currentUser.user'),

  showCreateClassModal: false,

  reload() {
    this.send('routeReload');
  },

  actions: {
    openCreateClassModal() {
      this.set('showCreateClassModal', true);
    },
    closeCreateClassModal() {
      this.set('showCreateClassModal', false);
    },
    deleteClassroom(classroom) {
      classroom.destroyRecord();
    },
    async saveClassroom(className) {
      try {
        const classroom = this.store.createRecord('classroom', {
          name: className,
          user: this.user
        })
        await classroom.save();
        this.paperToaster.show('Class Created', {
          duration: 4000,
          toastClass: this.get('toastClass')
        });
      } catch(e) {
        console.error(e);
      } finally {
        this.set('showCreateClassModal', false);
        this.reload();
      }
    }

  }
});