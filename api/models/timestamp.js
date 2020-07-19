const mongoose = require('mongoose')

const timestampSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  update: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Timestamp', timestampSchema)
