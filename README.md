# Ember-materialize-shim [![Build Status](https://travis-ci.org/levanto-financial/ember-materialize-shim.svg?branch=master)](https://travis-ci.org/levanto-financial/ember-materialize-shim)

**[FASTBOOT](http://ember-fastboot.com) COMPATIBLE**

A very simple shim to add [Materialize](https://github.com/Dogfalo/materialize) SASS and JavaScript resources to your ember.js app

## Use

Install this addon into your ember.js app, using ember-cli
```sh
ember install ember-materialize-shim
```

And then you can import materialize styles

**app/styles/app.scss**
```scss
@import "materialize"
```

And import materialize javascript

**my-file.js**
```js
import Materialize from 'materialize';
```

Optionally, you may omit the JavaScript component of Materialize, by customizing your `ember-cli-build.js`

```js
var app = new EmberAddon(defaults, {
  ...
  'materialize-shim': {
    omitJS: true
  }
});
```

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
