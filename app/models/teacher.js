import Model, { belongsTo } from '@ember-data/model';

export default Model.extend({
  // relationships
  user: belongsTo('user')
});
