import Model, { attr } from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  // attributes
  date: attr('date'),
  // computed properties
  formattedDate: computed('date', function() {
    return moment(this.date).format('L')
  }),

  // relationships
  enrollment: belongsTo('enrollment'),
  lessonItems: hasMany('lessonItems')
});
