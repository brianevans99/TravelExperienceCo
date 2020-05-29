const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 4000

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
