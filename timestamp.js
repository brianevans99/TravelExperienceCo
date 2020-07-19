const moment = require('moment')

let b = moment('2020-07-18T16:54:01-04:00')
let a = moment()
const difference = a.diff(b, 'hours')

console.log(difference)
