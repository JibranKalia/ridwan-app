import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  store: service(),
  currentUser: service(),
  paperToaster: service(),
  user: readOnly('currentUser.user'),

  actions: {
    showEnrollmentDetails(enrollmentId, event) {
      if (!event.target.classList.contains("md-button")) {
        this.transitionToRoute('home.enrollments.show', enrollmentId);
      }
    },
    deleteEnrollment(enrollment) {
      enrollment.destroyRecord();
    }
  }
})