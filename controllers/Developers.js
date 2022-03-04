'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.getAllMuseum = function getAllMuseum (req, res, next) {
  Developers.getAllMuseum()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMuseumById = function getMuseumById (req, res, next) {
  var museumId = req.swagger.params['museumId'].value;
  Developers.getMuseumById(museumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
