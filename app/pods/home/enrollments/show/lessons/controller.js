import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
  currentLesson: computed('model.enrollment.lessons.[]', function() { 
    return this.model.enrollment.lessons.find((lesson) => moment().isSame(lesson.date, 'day'));
  }),

  nonCurrentLessons: computed('model.enrollment.lessons.[]', function() {
    return this.model.enrollment.lessons
               .filter((lesson) => moment().isAfter(lesson.date, 'day'))
               .sort((a, b) => new Date(b.date) - new Date(a.date));
  }),
});