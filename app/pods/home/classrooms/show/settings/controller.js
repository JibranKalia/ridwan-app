import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  paperToaster: service(),

  actions: {
    async saveLessonTypes() {
      try {
        const promiseArray = this.model.classroom.lessonTypes.map((lessonType) => {
          return lessonType.save();
        })
        await Promise.all(promiseArray);
        this.paperToaster.show('Saved changes.');

      } catch (e) {
        console.error(e);
        this.paperToaster.show('Error saving changes.');
      }
    }
  }
});