const express = require('express')
const axios = require('axios')
const router = express.Router()
const Caribbean = require('../models/caribbean')
const Timestamp = require('../models/timestamp')
const mongoose = require('mongoose')
const moment = require('moment')
const dotenv = require('dotenv').config()
const apiKey = process.env.RAPID_API_KEY

router.get('/', (req, res) => {
  Caribbean.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        data: docs.map((doc) => {
          return {
            _id: doc._id,
            location_id: doc.location_id,
            name: doc.name,
            photoUrl: doc.photoUrl,
            price: doc.price,
            headline: doc.headline,
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
  axios({
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/hotels/list-in-boundary',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
    },
    params: {
      currency: 'USD',
      limit: '30',
      subcategory: 'hotel%2Cbb%2Cspecialty',
      hotel_class: '4,5',
      tr_latitude: 32.408,
      tr_longitude: -64.619,
      bl_latitude: 32.216,
      bl_longitude: -64.927,
    },
  })
    .then((response) => {
      const data = response.data.data
      data.map((data) => {
        const newData = new Caribbean({
          _id: new mongoose.Types.ObjectId(),
          timestamp: new Date(),
          location_id: data.location_id,
          name: data.name,
          photoUrl: data.photo.images.original.url,
          price: data.price,
          headline:
            data.special_offers.desktop.length > 0 &&
            data.special_offers.desktop[0].headline,
        })
        newData.save()
      })
      const timestamp = new Timestamp({
        _id: new mongoose.Types.ObjectId(),
        update: moment().format(),
      })
      timestamp.save()
      console.log(timestamp)
    })
    .then((result) => {
      res.status(201).json({
        message: 'Caribbean data received',
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
  Caribbean.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'All Caribbean data deleted',
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

module.exports = router
