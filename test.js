'use strict';

require('mocha');
var assert = require('assert');
var format = require('./');

describe('format-people', function() {
  it('should export a function', function() {
    assert.equal(typeof format, 'function');
  });

  it('should export a formatters object', function() {
    assert(format.formatters);
    assert.equal(typeof format.formatters, 'object');
  });
});
