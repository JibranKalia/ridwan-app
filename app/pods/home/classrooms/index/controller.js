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
    showClassroomDetails(classroomId, event) {
      if (!event.target.classList.contains("md-button")) {
        this.transitionToRoute('home.classrooms.show', classroomId);
      }
    },
    openCreateClassModal() {
      this.set('showCreateClassModal', true);
    },
    closeModal(classroom) {
      classroom.destroyRecord();
      this.set('showCreateClassModal', false);
    },
    deleteClassroom(classroom) {
      classroom.destroyRecord();
    },
    async saveClassroom(classroom) {
      try {
        await classroom.save();
        this.set('showCreateClassModal', false);
        this.reload();
      } catch(e) {
        console.error(e);
        this.get('paperToaster').show('Error creating class');
      }
    }
  }
});