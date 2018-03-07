import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profiel', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profiel');
    assert.ok(route);
  });
});
