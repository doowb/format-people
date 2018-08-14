'use strict';

/**
 * Format a list of people like objects (e.g. authors, contributors, and collaborators)
 * into the specified format.
 *
 * ```js
 * const people = [ { name: 'Brian Woodward' } ];
 * const table = format(people, 'table');
 * console.log(table);
 * ```
 * @param {Array} `arr` Array of people objects.
 * @param {String} `format` The format "type" to use. Valid types are `table`, `list` and `aligned`. If no type is passed, `table` will be used automatically.
 * @return {String} Formatted
 * @api public
 */

const format = (arr, name) => {
  return format[name] ? format[name](arr) : format.table(arr);
};

/**
 * Returns the array of people formatted as a markdown table.
 *
 * ```js
 * const people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * console.log(format.table(people));
 * //=> | **Commits** | **Contributor**<br/> |
 * //=> | --- | --- |
 * //=> | 100 | [doowb](https://github.com/doowb) |
 * //=> | 50 | [jonschlinkert](https://github.com/jonschlinkert) |
 * ```
 * @param {Array} `arr` Array of people to format.
 * @return {String} Markdown table
 * @api public
 */

format.table = list => {
  let arr = [].concat(list || []);

  if (arr.length === 0) {
    return '';
  }

  let max = longest(arr, 'contributions');
  let res = '| **Commits** | **Contributor** |  ';
  res += '\n';
  res += '| --- | --- |  ';
  res += '\n';

  arr.forEach(person => {
    res += '| ';
    res += String(person.contributions || '').padEnd(max, ' ');
    res += ' | ';
    res += link(person.login, person.html_url);
    res += ' |  ';
    res += '\n';
  });

  return res;
};

/**
 * Returns the array of people formatted as a markdown list.
 *
 * ```js
 * const people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * console.log(format.list(people));
 * //=> **Commits** / **Contributor**
 * //=> + 100 [doowb](https://github.com/doowb)
 * //=> + 50 [jonschlinkert](https://github.com/jonschlinkert)
 * ```
 * @param {Array} `arr` Array of people to format.
 * @return {String} Markdown list
 * @api public
 */

format.list = list => {
  let arr = [].concat(list || []);

  if (arr.length === 0) {
    return '';
  }

  let max = longest(arr, 'contributions');
  let res = '**Commits** / **Contributor**\n';

  arr.forEach(person => {
    res += '+ ';
    res += String(person.contributions || '').padEnd(max, ' ');
    res += ' ';
    res += link(person.login, person.html_url);
    res += '\n';
  });
  return res;
};

/**
 * Returns the array of people formatted as a GitHub Flavored Markdown fenced code block,
 * with aligned columns.
 *
 * ```js
 * const people = [
 *   { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
 *   { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
 * ];
 * console.log(format.aligned(people));
 * //=> COMMITS / CONTRIBUTOR
 * //=> ------- | -----------
 * //=> 100      doowb
 * //=> 50      jonschlinkert
 * ```
 * @param {Array} `arr` Array of people to format.
 * @return {String} Markdown code block with aligned columns.
 * @api public
 */

format.aligned = list => {
  let arr = [].concat(list || []);

  if (arr.length === 0) {
    return '';
  }

  let max = longest(arr, 'contributions');
  let res = '```bash\n';
  res += 'COMMITS / CONTRIBUTOR\n';
  res += '------- | -----------\n';

  arr.forEach(person => {
    res += String(person.contributions || '').padEnd(max, ' ');
    res += '      ';
    res += person.login;
    res += '\n';
  });

  res += '```\n';
  return res;
};

function longest(arr, prop) {
  return arr.reduce((n, c) => Math.max((c[prop] + '').length, n), 0);
}

function link(anchor, href, title) {
  return anchor && href ? `[${anchor}](${href}${title ? ` "${title}"` : ''})` : '';
}

/**
 * Expose format
 */

module.exports = format;
