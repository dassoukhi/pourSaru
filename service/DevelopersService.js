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
const toRadian = (degree) =>{
  var pi = Math.PI;
  return degree * (pi/180);
}
const calculDistance = (longA, latA, longB, latB) => {
  const res =  Math.acos(Math.sin(toRadian(latA))*Math.sin(toRadian(latB)) + Math.cos(toRadian(latA))*Math.cos(toRadian(latB))*Math.cos(toRadian(longA) - toRadian(longB)))*6371;
  console.log("distance calcul :", res, "long:", longA, "lat:", latA);
  return res;
}

exports.getNearlyMuseum = function() {
  return new Promise(async function(resolve, reject) {
    const examples = await Museum.find();

    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      const listFilter = examples.filter(e => calculDistance(e.long, e.lat, 48.90173470211192, 2.2085066531557973) <= 10)
      resolve(listFilter);
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

