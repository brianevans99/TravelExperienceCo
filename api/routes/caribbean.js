const express = require('express')
const router = express.Router()
const Hotel = require('../models/hotel')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  Hotel.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        data: docs.map((doc) => {
          return {
            _id: doc._id,
            name: doc.name,
          }
        }),
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

router.post('/', (req, res, next) => {
  const hotel = new Hotel({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
  })
  return hotel
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: 'Hotel data created',
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

router.delete('/', (req, res, next) => {
  Hotel.remove()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'all data deleted',
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

module.exports = router
