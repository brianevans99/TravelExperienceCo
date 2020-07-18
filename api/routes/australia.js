const express = require('express')
const axios = require('axios')
const router = express.Router()
const Australia = require('../models/australia')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const apiKey = process.env.RAPID_API_KEY

router.get('/', (req, res) => {
  Australia.find()
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
      tr_latitude: -11.202,
      tr_longitude: 154.752,
      bl_latitude: -38.43,
      bl_longitude: 112.652,
    },
  })
    .then((response) => {
      const data = response.data.data
      data.map((data) => {
        const newData = new Australia({
          _id: new mongoose.Types.ObjectId(),
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
    })
    .then((result) => {
      res.status(201).json({
        message: 'Australia data received',
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
  Australia.remove()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'All Australia data deleted',
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

module.exports = router
