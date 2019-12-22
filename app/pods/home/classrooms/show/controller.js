import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  store: service(),
  currentUser: service(),
  paperToaster: service(),
  user: readOnly('currentUser.user'),

  reload() {
    this.send('routeReload');
  },
  actions: {
    showEnrollmentDetails(enrollmentId, event) {
      if (!event.target.classList.contains("md-button")) {
        this.transitionToRoute('home.enrollments.show', enrollmentId);
      }
    },
    async deleteEnrollment(enrollment) {
      try {
        await enrollment.destroyRecord();
      } catch(e) {
        console.error(e);
        enrollment.rollbackAttributes();
        this.paperToaster.show('Error removing student');
      }
    },
    openCreateModal() {
      this.set('showCreateModal', true);
    },
    closeCreateModal(student) {
      student.destroyRecord();
      this.set('showCreateModal', false);
    },
    async saveStudent(student) {
      try {
        await student.save();
        this.model.classroom.students.pushObject(student);
        this.set('showCreateModal', false);
        this.reload();
      } catch(e) {
        console.error(e);
        this.paperToaster.show('Error creating student');
      }
    }
  }
})