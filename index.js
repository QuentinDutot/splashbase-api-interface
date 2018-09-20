'use strict';
// API doc : http://www.splashbase.co/api#sources_show
const fetch = require('node-fetch');
const async = require('async');
const api = 'https://www.splashbase.co/api/v1/images';
const apiLimit = 20;

module.exports = {

  /**
   * Random images url
   * @param {number} limit
   * @param {function} callback
   * @return {array}
   */
  random(limit, callback) {
    let results = [], calls = [];
    let customLimit = limit < apiLimit ? limit : apiLimit;

    for (let i=0;i<customLimit;i++) {
      calls.push(function(cb) {
        fetch(`${api}/random?images_only=true`)
          .then(res => res.json())
          .then(data => {
            results.push(data);
            cb();
          })
          .catch(err => callback(`Error : ${err}`));
      });
    }

    async.parallel(calls, function(err, res) {
      callback(err || null, results.map(e => e.url));
    });
  },

  /**
   * Matched images url
   * @param {string} keyword
   * @param {function} callback
   * @return {array}
   */
  search(keyword, callback) {
    fetch(`${api}/search?query=${keyword}&images_only=true`)
      .then(res => res.json())
      .then(data => callback(null, data.images.map(e => e.url)))
      .catch(err => callback(`Error : ${err}`));
  },

  /**
   * Latest images url
   * @param {number} limit
   * @param {function} callback
   * @return {array}
   */
  last(callback) {
    fetch(`${api}/latest?images_only=true`)
      .then(res => res.json())
      .then(data => callback(null, data.images.map(e => e.url)))
      .catch(err => callback(`Error : ${err}`));
  },

  /**
   * Check api state
   * @param {function} callback
   * @return {boolean}
   */
  check(callback) {
    fetch(`${api}/random`)
      .then(res => res.json())
      .then(data => callback(null, true))
      .catch(err => callback('splashbase.co API unreachable'));
  },
}
