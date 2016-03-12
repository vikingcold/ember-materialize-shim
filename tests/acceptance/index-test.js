import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(Ember.$('#title').css('font-family').indexOf('Roboto') >= 0, 'Stylesheet is installed');
    assert.equal(currentURL(), '/');
  });
});
