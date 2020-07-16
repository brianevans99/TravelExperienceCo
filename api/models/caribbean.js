const mongoose = require('mongoose')

const caribbeanSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
})

module.exports = mongoose.model('Caribbean', caribbeanSchema)
