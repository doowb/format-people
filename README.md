# format-people [![NPM version](https://img.shields.io/npm/v/format-people.svg?style=flat)](https://www.npmjs.com/package/format-people) [![NPM monthly downloads](https://img.shields.io/npm/dm/format-people.svg?style=flat)](https://npmjs.org/package/format-people) [![NPM total downloads](https://img.shields.io/npm/dt/format-people.svg?style=flat)](https://npmjs.org/package/format-people) [![Linux Build Status](https://img.shields.io/travis/doowb/format-people.svg?style=flat&label=Travis)](https://travis-ci.org/doowb/format-people)

> Format a list of authors, contributors, or collaborators.

Please consider following this project's author, [Brian Woodward](https://github.com/doowb), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save format-people
```

## Usage

Requires Node.js v8.0 or higher.

```js
const format = require('format-people');
```

## API

**Params**

* `arr` **{Array}**: Array of people objects.
* `format` **{String}**: The format "type" to use. Valid types are `table`, `list` and `aligned`. If no type is passed, `table` will be used automatically.
* `returns` **{String}**: Formatted

**Example**

```js
const people = [ { name: 'Brian Woodward' } ];
const table = format(people, 'table');
console.log(table);
```

### [.table](index.js#L41)

Returns the array of people formatted as a markdown table.

**Params**

* `arr` **{Array}**: Array of people to format.
* `returns` **{String}**: Markdown table

**Example**

```js
const people = [
  { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
  { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
];
console.log(format.table(people));
//=> | **Commits** | **Contributor**<br/> |
//=> | --- | --- |
//=> | 100 | [doowb](https://github.com/doowb) |
//=> | 50 | [jonschlinkert](https://github.com/jonschlinkert) |
```

### [.list](index.js#L84)

Returns the array of people formatted as a markdown list.

**Params**

* `arr` **{Array}**: Array of people to format.
* `returns` **{String}**: Markdown list

**Example**

```js
const people = [
  { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
  { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
];
console.log(format.list(people));
//=> **Commits** / **Contributor**
//=> + 100 [doowb](https://github.com/doowb)
//=> + 50 [jonschlinkert](https://github.com/jonschlinkert)
```

### [.aligned](index.js#L124)

Returns the array of people formatted as a GitHub Flavored Markdown fenced code block, with aligned columns.

**Params**

* `arr` **{Array}**: Array of people to format.
* `returns` **{String}**: Markdown code block with aligned columns.

**Example**

```js
const people = [
  { login: 'doowb', contributions: 100, html_url: 'https://github.com/doowb' },
  { login: 'jonschlinkert', contributions: 50, html_url: 'https://github.com/jonschlinkert' }
];
console.log(format.aligned(people));
//=> COMMITS / CONTRIBUTOR
//=> ------- | -----------
//=> 100      doowb
//=> 50      jonschlinkert
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [github-base](https://www.npmjs.com/package/github-base): Low-level methods for working with the GitHub API in node.js/JavaScript. | [homepage](https://github.com/jonschlinkert/github-base "Low-level methods for working with the GitHub API in node.js/JavaScript.")
* [github-contributors](https://www.npmjs.com/package/github-contributors): Generate a markdown or JSON list of contributors for a project using the GitHub API. | [homepage](https://github.com/jonschlinkert/github-contributors "Generate a markdown or JSON list of contributors for a project using the GitHub API.")

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 11 | [doowb](https://github.com/doowb) |
| 8 | [jonschlinkert](https://github.com/jonschlinkert) |

### Author

**Brian Woodward**

* [GitHub Profile](https://github.com/doowb)
* [Twitter Profile](https://twitter.com/doowb)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2018, [Brian Woodward](https://github.com/doowb).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on August 14, 2018._