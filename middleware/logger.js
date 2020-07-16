const moment = require('moment')
const data = require('../data.json')
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }:${moment().format()}`
  )
  let names = data.map(
    (person) => `${person.name},${person.email},${person.company.catchPhrase}`
  )
  console.log(names)
  next()
}

module.exports = logger
