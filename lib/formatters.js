'use strict';

var extend = require('extend-shallow');
var pad = require('right-pad-values');
var mdu = require('markdown-utils');

var formatters = {};

formatters.noop = function noop(arr) {
  return arr;
};

formatters.table = function table(arr) {
  arr = pad(arr, 'contributions');
  var res = '| **Commits** | **Contributor**<br/> |  ';
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

formatters.list = function list(arr) {
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

formatters.aligned = function aligned(arr) {
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

module.exports = formatters;
