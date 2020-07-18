const mongoose = require('mongoose')

const europeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location_id: { type: String, required: true },
  name: { type: String, required: true },
  photoUrl: { type: String, required: true },
  price: { type: String, required: true },
  headline: { type: String, required: false },
})

module.exports = mongoose.model('Europe', europeSchema)
