import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/enrollments/show/payments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/enrollments/show/payments');
    assert.ok(route);
  });
});
