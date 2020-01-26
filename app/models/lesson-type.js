import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default Model.extend(LoadableModel, {
  // attributes
  name: attr('string'),
  position: attr('number'),
  // relationships
  classroom: belongsTo('classroom'),
});
