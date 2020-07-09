const moment = require('moment')
const data = require('../routes/api/NorthAmerica/NorthAmericaData.json')
const hotelLogger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }:${moment().format()}`
  )
  let hotels = data.map((hotel) => `${hotel.name}`)
  console.log(hotels)
  next()
}

module.exports = hotelLogger
