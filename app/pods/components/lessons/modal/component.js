import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  lessonItemNames: Object.freeze(['New Lesson', 'New Revision', 'Revision']),
  store: service(),
  type: 'update',

  didReceiveAttrs() {
    this._super(...arguments);
    if (isEmpty(this.lesson)) {
      this.createLesson();
    }
    this.set('selectedLessonItem', this.lesson.lessonItems.firstObject);
  },

  createLesson() {
    this.type = 'create';
    this.lesson = this.store.createRecord('lesson', {
      enrollment: this.enrollment,
      date: new Date(),
      name: this.lessonName,
      type: this.type
    });

    this.lessonItemNames.forEach((name) => {
      this.store.createRecord('lessonItem', {
        name: name,
        lesson: this.lesson,
      });
    })
  }
})