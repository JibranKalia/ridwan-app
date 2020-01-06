import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';

export default Controller.extend({
  nonCurrentLessons: computed('model.enrollment.lessons.[]', function() {
    return this.model.enrollment.lessons.filter((lesson) => moment().isAfter(lesson.date, 'day'));
  }),
});