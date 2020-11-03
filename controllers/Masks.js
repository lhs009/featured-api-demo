'use strict';

var utils = require('../utils/writer.js');
var Masks = require('../service/MasksService');

module.exports.uploadFile = function uploadFile (req, res, next, body) {
  Masks.uploadFile(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
