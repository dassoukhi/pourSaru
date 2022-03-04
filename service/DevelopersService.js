'use strict';


const { data } = require('./data');
/**
 * searches museum
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * returns List
 **/

const { Museum } = require('./model');

exports.getAllMuseum = function() {
  return new Promise(async function(resolve, reject) {
    const examples = await Museum.find();
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
}


/**
 * searches museum
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * museumId Long ID of pet to return
 * returns Museum
 **/
exports.getMuseumById = function(museumId) {
  return new Promise(async function(resolve, reject) {
    const examples = await Museum.findById({_id: museumId});
    // console.log("data one", examples);
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
}

