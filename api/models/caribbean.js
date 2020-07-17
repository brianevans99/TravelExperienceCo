const mongoose = require('mongoose')

const caribbeanSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location_id: { type: String, required: false },
  name: { type: String, required: false },
  photoUrl: { type: String, required: false },
  price: { type: String, required: false },
  headline: { type: String, required: false },
})

module.exports = mongoose.model('Caribbean', caribbeanSchema)
