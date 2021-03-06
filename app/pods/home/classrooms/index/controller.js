import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  currentUser: service(),
  paperToaster: service(),
  user: readOnly('currentUser.user'),

  showCreateModal: false,

  reload() {
    this.send('routeReload');
  },
  actions: { 
    showClassroomDetails(classroomId, event) {
      if (!event.target.classList.contains("md-button")) {
        this.transitionToRoute('home.classrooms.show', classroomId);
      }
    },
    openCreateModal() {
      this.set('showCreateModal', true);
    },
    closeCreateModal(classroom) {
      classroom.destroyRecord();
      this.set('showCreateModal', false);
    },
    async deleteClassroom(classroom) {
      try {
        await classroom.destroyRecord();
      } catch(e) {
        console.error(e);
        classroom.rollbackAttributes();
        this.paperToaster.show('Error deleting class');
      }
    },
    async saveClassroom(classroom) {
      try {
        await classroom.save();
        this.set('showCreateModal', false);
        this.reload();
      } catch(e) {
        console.error(e);
        this.paperToaster.show('Error creating class');
      }
    }
  }
});