import Model, { attr } from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default Model.extend({
  // attributes
  date: attr('date'),
  // computed properties
  formattedDate: computed('date', function() {
    return this.date.toLocaleDateString("en-US");
  }),

  // relationships
  enrollment: belongsTo('enrollment'),
  lessonItems: hasMany('lessonItems')
});
