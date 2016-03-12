import materialize from 'materialize';
import { module, test } from 'qunit';

module('materialize as es6 module');

test('it works', function(assert) {
  assert.ok(materialize);
  assert.ok(materialize.toast);
});
