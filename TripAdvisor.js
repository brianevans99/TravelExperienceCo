const axios = require('axios')

axios({
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/hotels/get-details',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': '4c5ccd0533mshb28473c844f5ba9p105d71jsn14db0547192b',
    useQueryString: true,
  },
  params: {
    adults: '1',
    nights: '2',
    currency: 'USD',
    lang: 'en_US',
    child_rm_ages: '7%2C10',
    checkin: '2020-08-15',
    location_id: '148994',
  },
})
  .then((response) => {
    console.log(response.data.data[0].photo.images.small.url)
  })
  .catch((error) => {
    console.log(error)
  })
