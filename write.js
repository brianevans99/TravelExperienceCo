const axios = require('axios')
const fs = require('fs-extra')

axios({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/users',
})
  .then((response) => {
    console.log(response)
    fs.writeFileSync(
      './client/src/Data/Caribbean/data.json',
      JSON.stringify(response.data)
    )
  })
  .catch((error) => {
    console.log(error)
  })
