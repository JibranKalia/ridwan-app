import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
import moment from 'moment';
import { sort } from '@ember/object/computed';

export default Model.extend({
  lessonItemPositionAsc: Object.freeze(['position:asc', 'createdAt:asc']),

  // attributes
  date: attr(),
  // computed properties
  formattedDate: computed('date', function() {
    return moment(this.date).format('L')
  }),

  // relationships
  enrollment: belongsTo('enrollment'),
  lessonItems: hasMany('lessonItems'),
  sortedLessonItems: sort('lessonItems', 'lessonItemPositionAsc'),
});
