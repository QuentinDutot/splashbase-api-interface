

# splashbase-api-interface

## Introduction

Module based on [splashbase.co](http://www.splashbase.co/)'s API. It uses [async](https://github.com/caolan/async) and [node-fetch](https://github.com/bitinn/node-fetch).

Quickly search over thousands free high quality images from travelcoffeebook, startupstockphotos, littlevisuals, gratisography, getrefe, jaymantri, superfamous, mazwai, unsplash, snapographic, moveast, snapwiresnaps, newoldstock, splitshire, camarama, mmt, lifeofpix, crowthestone, skitterphoto..

Don't mind of any account creation, api url, api token, api authorization. Install the package and let's search !
  
## Quick Start
```sh
$ npm install splashbase-api-interface
```
```javascript
var imageBank = require('splashbase-api-interface');

imageBank.search('sky', (error, results) => {
	console.log(results);
});
```
  
## Usage
In below cases callback function will be called with 2 parameters :
 - error  (string) : a short message when error occurs else null
 - results (array) : url's images (so can be empty)
  
#### `check` - check API's state
Here instead of an array the second parameter sent to your callback will be true which mean that the API is available.
```javascript
imageBank.check(callback);
```
  
#### `search` - search related images
```javascript
imageBank.search(keyword, callback);
```

#### `last` - 10 last images
```javascript
imageBank.last(callback);
```

#### `random` - X random images
The API's limit is 20, so a size parameter of 50 will be caped at 20.
```javascript
imageBank.random(size, callback);
```
  
## TODO list

 - [ ] Unicity of random images
 - [ ] Return X last images instead of 10 lasts
