'use strict';

require('mocha');
const assert = require('assert');
const format = require('./');

const fixtures = [
  { login: 'jonschlinkert', html_url: 'https://github.com/jonschlinkert', contributions: 11 },
  { login: 'doowb', html_url: 'https://github.com/doowb', contributions: 1111 }
];

describe('format-people', () => {
  it('should export a function', () => {
    assert.equal(typeof format, 'function');
  });

  it('should expose formatter methods', () => {
    assert.equal(typeof format.table, 'function');
    assert.equal(typeof format.aligned, 'function');
    assert.equal(typeof format.list, 'function');
  });

  it('should format a table', () => {
    assert.equal(format.table(fixtures), '| **Commits** | **Contributor** |  \n| --- | --- |  \n| 11   | [jonschlinkert](https://github.com/jonschlinkert) |  \n| 1111 | [doowb](https://github.com/doowb) |  \n');
  });

  it('should format a list', () => {
    assert.equal(format.list(fixtures), '**Commits** / **Contributor**\n+ 11   [jonschlinkert](https://github.com/jonschlinkert)\n+ 1111 [doowb](https://github.com/doowb)\n');
  });

  it('should format an aligned list', () => {
    assert.equal(format.aligned(fixtures), '```bash\nCOMMITS / CONTRIBUTOR\n------- | -----------\n11        jonschlinkert\n1111      doowb\n```\n');
  });
});

//     ✓ should format a table
// **Commits** / **Contributor**
// + 11   [jonschlinkert](https://github.com/jonschlinkert)
// + 1111 [doowb](https://github.com/doowb)

//     ✓ should format a list
// ```bash
// COMMITS / CONTRIBUTOR
// ------- | -----------
// 11        jonschlinkert
// 1111      doowb
// ```
// `
