const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const db = process.env.MONGODB_URI || process.env.MONGOLAB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connection successful')
  } catch (err) {
    console.error(err.message)
    //exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
