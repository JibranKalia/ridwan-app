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

  individualLesson: computed('enrollment.lessons.@each.type', function() {
    return this.enrollment.lessons.find(lesson => lesson.type === this.type )
  }),

  lessonName: computed('type', function() {
    return LESSON_TYPE_TO_NAME_MAPPER[this.type]
  }),

  actions: {
    async createLesson() {
      const lesson = this.store.createRecord('lesson', {
        enrollment: this.enrollment,
        date: new Date(),
        name: LESSON_TYPE_TO_NAME_MAPPER[this.type],
        type: this.type
      })
      await lesson.save();
    }
  }
})