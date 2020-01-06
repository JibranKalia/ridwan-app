import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
  store: service(),
  paperToaster: service(),
  showModal: false,

  individualLesson: computed('enrollment.lessons.@each.type', function() {
    return this.enrollment.lessons.find(lesson => lesson.type === this.type )
  }),

  actions: {
    openModal() {
      this.set('showModal', true);
    },
    closeModal(lesson) {
      if (lesson.isNew) {
        lesson.lessonItems.forEach((item) => {
          if (isPresent(item) && item.isNew) {
            item.destroyRecord()
          }
        });
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
        this.paperToaster.show(`${action === 'save' ? 'Saved' : 'Updated'} lesson`);
      } catch(e) {
        console.error(e);
        this.paperToaster.show('Error creating lesson');
      }
    }
  }
})