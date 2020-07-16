const axios = require('axios')
const fs = require('fs-extra')

axios({
  method: 'GET',
})
  .then((response) => {
    fs.writeFileSync('./data.json', JSON.stringify(response.data))
  })
  .catch((error) => {
    console.log(error)
  })
