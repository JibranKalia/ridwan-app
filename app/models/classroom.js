import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  name: attr('string'),
});
