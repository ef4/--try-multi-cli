import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { cliVersion, expectedVersion } from 'try-multi-cli';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('ember-cli version', async function(assert) {
    assert.equal(cliVersion, expectedVersion);
  });
});
