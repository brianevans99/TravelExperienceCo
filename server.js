const express = require('express')
const connectDB = require('./config/database')
const path = require('path')
const morgan = require('morgan')

const app = express()

//Connect to MongoDB
connectDB()

const PORT = process.env.PORT || 4000

//Init middleware
app.use(morgan('dev'))
app.use(express.json({ extended: false }))

//Define routes
app.use('/api/caribbean', require('./api/routes/caribbean'))
app.use('/api/europe', require('./api/routes/europe'))
app.use('/api/australia', require('./api/routes/australia'))

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
