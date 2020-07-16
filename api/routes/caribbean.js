const express = require('express')
const axios = require('axios')
const router = express.Router()
const Caribbean = require('../models/caribbean')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  Caribbean.find()
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
  axios({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users',
  })
    .then((response) => {
      response.data.map((data) => {
        const newData = new Caribbean({
          _id: new mongoose.Types.ObjectId(),
          name: data.name,
        })
        newData.save()
      })
    })
    .then((result) => {
      res.status(201).json({
        message: 'data received',
        createdData: result,
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
  Caribbean.remove()
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
