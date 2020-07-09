const express = require('express')
const router = express.Router()
const data = require('../../data.json')

//get all data
router.get('/', (req, res) => res.json(data))

//get single person
router.get('/:id', (req, res) => {
  const found = data.some((data) => data.id === parseInt(req.params.id))
  if (found) {
    res.json(data.filter((data) => data.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `data with id ${req.params.id} not found` })
  }
})

module.exports = router
