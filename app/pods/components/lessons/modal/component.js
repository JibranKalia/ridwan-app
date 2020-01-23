import Component from '@ember/component';
import moment from 'moment';
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
    this.ensureLessonItems(this.lesson);
    this.set('selectedLessonItem', this.lesson.lessonItems.firstObject);
  },

  ensureLessonItems(lesson) {
    this.lessonItemNames.forEach((name) => {
      if (isEmpty(lesson.lessonItems.find(li => li.name === name))) {
        this.createLessonItem(lesson, name);
      }
    })
  },

  createLessonItem(lesson, name) {
    this.store.createRecord('lessonItem', {
      name: name,
      lesson: lesson,
    });
  },

  createLesson() {
    this.type = 'create';
    this.lesson = this.store.createRecord('lesson', {
      enrollment: this.enrollment,
      date: moment().format('YYYY-MM-DD'),
      name: this.lessonName,
      type: this.type
    });

    this.lessonItemNames.forEach((name) => {
      this.createLessonItem(this.lesson, name);
    })
  },

  actions: {
    setRating(value) {
      this.set('rating', value);
    }
  }

})