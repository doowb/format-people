'use strict';

var extend = require('extend-shallow');
var formatters = require('./lib/formatters');

/**
 * Format a list of people like objects (e.g. authors, contributors, and collaborators)
 * into the specified format.
 *
 * ```js
 * var people = [
 *   { name: 'Brian Woodward' }
 * ];
 * var table = format(people, {format: 'table'});
 * console.log(table);
 * ```
 * @param  {Array} `arr` Array of people objects.
 * @param  {Object} `options` Additional options
 * @param  {String} `options.format` Formatter function used to format the array. See [formatters](#formatters) for more details.
 * @return {Mixed} Formatted array of people. Returned type depends on formatter.
 * @api public
 */

module.exports = function format(arr, options) {
  var opts = extend({format: 'noop'}, options);
  return formatters[opts.format](arr);
};

/**
 * Expose formatters object.
 */

module.exports.formatters = formatters;
