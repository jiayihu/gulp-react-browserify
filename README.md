![David](https://david-dm.org/jiayihu/gulp-react-browserify.svg)
![Love](https://img.shields.io/badge/Made%20with-%E2%99%A5-red.svg)

# React.js with Gulp & Browserify

> Develop you React.js application with Gulp.js and [Browserify](https://github.com/substack/node-browserify)

## Features
- Gulp with BrowserSync, Nunjucks templating, Scss support, CSSNano, deployment with GitHub Pages etc.
- Browserify with Watchify
- Multiple bundles: **vendor.js** with React and the other dependencies and **main.js** with your own code. Run `gulp vendorApp` to build the vendor.js bundle whenever you add a dependency.
- Support for JSX conversion and ES2015 with [Babelify](https://github.com/babel/babelify) and its presets
- Production mode with [envify](https://www.npmjs.com/package/envify) and [uglify](https://www.npmjs.com/package/gulp-uglify)
- [ESLint](http://eslint.org) with support for React.js

## Usage

Install dependencies
``` javascript
npm install
```
Development
``` javascript
npm run dev //or gulp
```
Production mode
``` javascript
npm run production
```
### Optional

Run node.js server with watch (Note: current webapp/server.js file is empty and Express.js is not included in the dependencies)
```
gulp server
```
## Todo
- Redux support
- Jest testing
