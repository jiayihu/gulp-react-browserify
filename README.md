![David](https://david-dm.org/jiayihu/gulp-react-browserify.svg)
![Love](https://img.shields.io/badge/Made%20with-%E2%99%A5-red.svg)

# React.js with Gulp & Browserify

> Develop you React.js application with Gulp.js and [Browserify](https://github.com/substack/node-browserify)

## Features
- Gulp with BrowserSync, Scss support, CSSNano, deployment with GitHub Pages etc.
- [HTML5 Boilerplate](https://html5boilerplate.com) included
- Browserify with Watchify for incremental builds :ok_hand:
- Multiple bundles: **vendor.js** with React and the other dependencies and **main.js** with your own code.

  Run `gulp vendorScripts` to build the vendor.js bundle whenever you add a dependency.
- Support for JSX conversion and ES2015 with [Babelify](https://github.com/babel/babelify) and its presets
- Production mode with [envify](https://www.npmjs.com/package/envify) and [uglify](https://www.npmjs.com/package/gulp-uglify) to reduce bundle size up to 70%
- [History API Fallback](https://github.com/bripkens/connect-history-api-fallback) for routing
- [ESLint](http://eslint.org) with [Airbnb](https://github.com/airbnb/javascript) JS Style Guide for ES6 & React.js
- Testing with ES6 [Mocha](https://mochajs.org) + [Chai](http://chaijs.com) + [Enzyme](http://airbnb.io/enzyme/)
- Deploy with Github Pages :boom: :octocat:

## Usage

Install dependencies
``` javascript
npm install
```
Development
``` javascript
npm start
```
Production mode
``` javascript
npm run build
```
Run tests
``` javascript
npm run test //or npm run test:watch to watch changes
```
Deploy to Github Pages
``` javascript
npm run deploy
```
