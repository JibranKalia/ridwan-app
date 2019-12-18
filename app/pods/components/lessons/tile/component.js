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
  showCreateModal: false,

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
    async deleteLesson(lesson) {
      try {
        await lesson.destroyRecord();
      } catch(e) {
        console.error(e);
        lesson.rollbackAttributes();
        this.get('paperToaster').show('Error deleting lesson');
      }
    },
    async saveLesson(lesson) {
      try {
        await lesson.save();
        this.set('showCreateModal', false);
        this.reload();
      } catch(e) {
        console.error(e);
        this.get('paperToaster').show('Error creating lesson');
      }
    }
  }
})