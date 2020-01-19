import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  currentUser: service(),
  rollbar: service(),
  store: service(), 
  router: service(),
  paperToaster: service(),
  
  buttonDisabled: computed('currentUser.user.role', function() {
    return !['teacher', 'parent'].includes(this.currentUser.user.role)
  }),

  async createTeacher() {
    try {
      const teacher = this.store.createRecord('teacher', {
        user: this.currentUser.user
      })
      await teacher.save();
      await this.currentUser.user.save();
    } catch(e) {
      console.log(e)
      this.rollbar.error(e);
      this.paperToaster.show('Error creating teacher.');
    }
  },
  
  actions: {
    async saveSetting(role) {
      if (role === 'teacher') {
        await this.createTeacher();
        this.router.transitionTo('home.classrooms');
      }
    }
  }
})
