import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  // attributes
  date: attr(),
  // computed properties
  formattedDate: computed('date', function() {
    return moment(this.date).format('L')
  }),

  // relationships
  enrollment: belongsTo('enrollment'),
  lessonItems: hasMany('lessonItems')
});
