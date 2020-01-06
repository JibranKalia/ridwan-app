import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default Component.extend({
  store: service(),
  paperToaster: service(),
  showModal: false,

  actions: {
    openModal() {
      this.set('showModal', true);
    },
    closeModal(lesson) {
      const lessonItemsToDelete = lesson.lessonItems.filter(item => isPresent(item) && item.isNew);
      lessonItemsToDelete.forEach((item) => item.destroyRecord());
      if (lesson.isNew) {
        lesson.destroyRecord();
      }
      this.set('showModal', false);
    },
    async deleteLesson(lesson) {
      try {
        await lesson.destroyRecord();
        this.paperToaster.show('Deleted lesson');
      } catch(e) {
        console.error(e);
        lesson.rollbackAttributes();
        this.paperToaster.show('Error deleting lesson');
      }
    },
    async saveLessonItem(lesson, lessonItem, action) {
      try {
        await lesson.save();
        await lessonItem.save();
        this.set('showModal', false);
        this.set('showEditModal', false);
        this.paperToaster.show(`${action === 'create' ? 'Created' : 'Updated'} lesson`);
      } catch(e) {
        console.error(e);
        this.paperToaster.show('Error creating lesson');
      }
    }
  }
})