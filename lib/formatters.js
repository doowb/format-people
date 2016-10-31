'use strict';

var extend = require('extend-shallow');
var pad = require('right-pad-values');
var mdu = require('markdown-utils');
var formatters = {};

/**
 * Returns the array as-is without any formatting.
 *
 * ```js
 * var people = [
 *   { login: 'doowb' }
 * ];
 * var formatted = formatters.noop(people);
 * console.log(formatted);
 * //=> [{login: 'doowb'}]
 * ```
 * @param  {Array} `arr` Array of people to format.
 * @return {Array} Unmodified array of people.
 * @api public
 */

formatters.noop = function noop(arr) {
  return arr;
};

/**
 * Returns the array of people formatted as a markdown table.
 *
 * ```js
 * var people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * var formatted = formatters.table(people);
 * console.log(formatted);
 * //=> | **Commits** | **Contributor**<br/> |
 * //=> | --- | --- |
 * //=> | 100 | [doowb](https://github.com/doowb) |
 * //=> | 50 | [jonschlinkert](https://github.com/jonschlinkert) |
 * ```
 * @param  {Array} `arr` Array of people to format.
 * @return {String} Markdown table
 * @api public
 */

formatters.table = function table(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return '';
  }

  arr = pad(arr, 'contributions');
  var res = '| **Commits** | **Contributor** |  ';
  res += '\n';
  res += '| --- | --- |  ';
  res += '\n';

  arr.forEach(function (person) {
    res += '| ';
    res += person.contributions;
    res += ' | ';
    res += mdu.link(person.login, person.html_url);
    res += ' |  ';
    res += '\n';
  });
  return res;
};

/**
 * Returns the array of people formatted as a markdown list.
 *
 * ```js
 * var people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * var formatted = formatters.list(people);
 * console.log(formatted);
 * //=> **Commits** / **Contributor**
 * //=> + 100 [doowb](https://github.com/doowb)
 * //=> + 50 [jonschlinkert](https://github.com/jonschlinkert)
 * ```
 * @param  {Array} `arr` Array of people to format.
 * @return {String} Markdown list
 * @api public
 */

formatters.list = function list(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return '';
  }

  arr = pad(arr, 'contributions');
  var res = '**Commits** / **Contributor**\n';

  arr.forEach(function (person) {
    res += '+ ';
    res += person.contributions;
    res += ' ';
    res += mdu.link(person.login, person.html_url);
    res += '\n';
  });
  return res;
};

/**
 * Returns the array of people formatted as an aligned code block.
 *
 * ```js
 * var people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * var formatted = formatters.aligned(people);
 * console.log(formatted);
 * //=> COMMITS / CONTRIBUTOR
 * //=> ------- | -----------
 * //=> 100      doowb
 * //=> 50      jonschlinkert
 * ```
 * @param  {Array} `arr` Array of people to format.
 * @return {String} Markdown code block for alignment
 * @api public
 */

formatters.aligned = function aligned(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return '';
  }

  arr = pad(arr, 'contributions');
  var res = '```bash\n';
  res += 'COMMITS / CONTRIBUTOR\n';
  res += '------- | -----------\n';

  arr.forEach(function (person) {
    res += person.contributions;
    res += '      ';
    res += person.login;
    res += '\n';
  });

  res += '```\n';
  return res;
};

/**
 * Export formatters
 */

module.exports = formatters;
