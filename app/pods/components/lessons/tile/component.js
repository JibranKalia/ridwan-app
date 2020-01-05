import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const LESSON_TYPE_TO_NAME_MAPPER = {
  'type_one': 'New Lesson',
  'type_two': 'New Revision',
  'type_three': 'Revision',
}

export default Component.extend({
  store: service(),
  paperToaster: service(),
  showCreateModal: false,
  showEditModal: false,

  individualLesson: computed('enrollment.lessons.@each.type', function() {
    return this.enrollment.lessons.find(lesson => lesson.type === this.type )
  }),

  lessonName: computed('type', function() {
    return LESSON_TYPE_TO_NAME_MAPPER[this.type]
  }),

  actions: {
    openCreateModal() {
      this.set('showCreateModal', true);
    },
    closeCreateModal(lesson) {
      lesson.destroyRecord();
      this.set('showCreateModal', false);
    },
    openEditModal() {
      this.set('showEditModal', true);
    },
    closeEditModal() {
      this.set('showEditModal', false);
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
        this.set('showCreateModal', false);
        this.set('showEditModal', false);
        this.paperToaster.show(`${action === 'save' ? 'Saved' : 'Updated'} lesson`);
      } catch(e) {
        console.error(e);
        this.paperToaster.show('Error creating lesson');
      }
    }
  }
})