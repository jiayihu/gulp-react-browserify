[![David](https://david-dm.org/jiayihu/chattina.svg)](https://david-dm.org/jiayihu/chattina.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/32903457402d47f2bb1fc5d544701458)](https://www.codacy.com/app/steph-jiayi/chattina)
![Love](https://img.shields.io/badge/Made%20with-%E2%99%A5-red.svg)

# Chattina

### *Work still in progress*

An MVC Chat, built in Javascript for fun and learning.
For the front-end no JQuery/MV* Framework is used, whereas tiny libraries are used to accomplish specific tasks. Back-end leverages [Express.js](http://expressjs.com/) & [Socket.io](http://socket.io/) for faster development.

>NOTICE: This is not meant to be used for any production since it doesn't provide polyfills to old browsers. I'm using for instance CSS Flexbox and Viewport units.

## Usage and development

Download the repo and install the dependencies
```
npm install
```
#### Usage
To run the server and test the application:
```
node webapp/app.js
```
Now open two tabs at 'http://localhost:3000' on a browser and log in the chat as two different users. Enjoy yourself!
***
#### Development:
```
gulp
```
For further details see *'gulpfile.js'* folder.

## Main front-end libraries:
 - [localForage](https://github.com/mozilla/localForage) for offline client Storage
 - [PubSub.js](https://github.com/mroderick/PubSubJS) for Publish/Subscribe Event System

## Browser Support
 - Evergreen browsers (IE10+)

## Documentation

Javascript files are commented with [JSDoc 3](https://github.com/jsdoc3/jsdoc) format, therefore you can generate automatic API documentation by running the following command:
```
jsdoc app/javascripts -r -d docs
```
