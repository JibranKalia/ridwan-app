import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const LESSON_TYPE_TO_NAME_MAPPER = {
  'type_one': 'New Lesson',
  'type_two': 'New Revision',
  'type_three': 'Revision',
}

export default Controller.extend({

  store: service(),

  typeOneLesson: computed('model.enrollment.lessons', function() {
    return this.model.enrollment.lessons.find(lesson => lesson.type === 'type_one' )
  }),
  typeTwoLesson: computed('model.enrollment.lessons', function() {
    return this.model.enrollment.lessons.find(lesson => lesson.type === 'type_two' )
  }),
  typeThreeLesson: computed('model.enrollment.lessons', function() {
    return this.model.enrollment.lessons.find(lesson => lesson.type === 'type_three' )
  }),

  actions: {
    async createLesson(lessonType) {
      console.log("Enrollment", this.model.enrollment);
      const lesson = this.store.createRecord('lesson', {
        enrollment: this.model.enrollment,
        date: new Date(),
        name: LESSON_TYPE_TO_NAME_MAPPER[lessonType],
        lessonType: lessonType
      })
      await lesson.save();
    }
  }

});