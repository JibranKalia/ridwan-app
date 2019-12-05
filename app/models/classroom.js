import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { mapBy } from '@ember/object/computed';

export default Model.extend({
  user: belongsTo('user'),
  name: attr('string'),

  nameErrors: mapBy('errors.name', 'message'),
});
