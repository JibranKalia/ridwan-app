import Component from '@ember/component';
import moment from 'moment';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  store: service(),
  type: 'update',

  didReceiveAttrs() {
    this._super(...arguments);
    if (isEmpty(this.lesson)) {
      this.createLesson();
    }
    this.setSelectedLessonItem();
  },

  setSelectedLessonItem() {
    if (isEmpty(this.lesson.lessonItems)) {
      this.set('selectedLessonItem', 'new');
    } else {
      this.set('selectedLessonItem', this.lesson.sortedLessonItems.firstObject);
    }
  },

  createLesson() {
    this.type = 'create';
    this.lesson = this.store.createRecord('lesson', {
      enrollment: this.enrollment,
      date: moment().format('YYYY-MM-DD'),
      name: this.lessonName,
      type: this.type
    });
  },

  actions: {
    addLesson(lessonType) {
      const lessonItem = this.store.createRecord('lessonItem', {
        lessonType: lessonType,
        lesson: this.lesson
      });
      this.set('selectedLessonItem', lessonItem);
    },

    setRating(lessonItem, value) {
      lessonItem.set('rating', value);
    }
  }

})