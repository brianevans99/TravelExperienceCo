const axios = require('axios')
const fs = require('fs-extra')

axios({
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': '4c5ccd0533mshb28473c844f5ba9p105d71jsn14db0547192b',
    useQueryString: true,
  },
  params: {
    lang: 'en_US',
    hotel_class: '4,5',
    limit: '30',
    currency: 'USD',
    latitude: '40.780394',
    longitude: ' -73.965779',
  },
})
  .then((response) => {
    fs.writeFileSync(
      '../routes/api/NorthAmerica/NorthAmericaData.json',
      JSON.stringify(response.data.data)
    )
  })
  .catch((error) => {
    console.log(error)
  })
