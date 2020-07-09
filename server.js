const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const app = express()

const PORT = process.env.PORT || 4000

//Init middleware
app.use(logger)

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use('/api/data', require('./routes/api/data'))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
