karma-es5-shim
==============

> [es5-shim][] for [Karma][] (Temporal)

[es5-shim]: https://github.com/kriskowal/es5-shim
[karma]:    http://karma-runner.github.io

Motivation
----------

While [Karma Runner Project][] should have this one but it currently does not for some reason, so I made this for temporal use.

[Karma Runner Project]: https://github.com/karma-runner/karma
[karma-requirejs plugin]: http://karma-runner.github.io/0.8/plus/RequireJS.html
[karma-phantomjs-launcher]: -https://github.com/karma-runner/karma-phantomjs-launcher

Installation
------------

Install the module from npm:

```sh
$ npm install https://github.com/pokehanai/karma-es5-shim/archive/v2.1.0.tar.gz
```

Add `es5-shim` to the `frameworks` key after `requirejs` in your Karma configuration:

```js
module.exports = function(karma) {
  karma.set({
    // frameworks to use
    frameworks: ['requirejs', 'es5-shim']
    // ...
  });
};
```
