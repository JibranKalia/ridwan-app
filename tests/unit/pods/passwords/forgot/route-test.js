import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | passwords/forgot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:passwords/forgot');
    assert.ok(route);
  });
});
