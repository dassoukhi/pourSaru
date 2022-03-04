const mongoose = require('mongoose');
const { Schema } = mongoose;

const MuseumSchema = new Schema({
    city: String,
    phone: String,
    name: String,
    id: Number,
    long: Number,
    lat: Number,
    pictures: [String]
  });
exports.Museum = mongoose.model('Museum', MuseumSchema);
  
