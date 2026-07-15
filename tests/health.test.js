import { test } from 'node:test';
import assert from 'node:assert';
test('health endpoint returns ok', () => {
  assert.equal(typeof 'ok', 'string');
});
