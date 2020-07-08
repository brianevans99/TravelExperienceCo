const axios = require('axios')

module.exports = getHotelIds = (
  tr_latitude,
  tr_longitude,
  bl_latitude,
  bl_longitude
) =>
  axios({
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/hotels/list-in-boundary',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': '4c5ccd0533mshb28473c844f5ba9p105d71jsn14db0547192b',
      useQueryString: true,
    },
    params: {
      currency: 'USD',
      limit: '30',
      // subcategory: 'hotel%2Cbb%2Cspecialty',
      // hotel_class: '4%2C5',
      // child_rm_ages: '7%2C10',
      // rooms: '1',
      // amenities: 'beach%2Cbar_lounge%2Cairport_transportation',
      // adults: '1',
      tr_latitude: tr_latitude,
      tr_longitude: tr_longitude,
      bl_latitude: bl_latitude,
      bl_longitude: bl_longitude,
    },
  })
    .then((response) => {
      hotelData = response.data.data
      idsArray = []
      for (let i = 0; i < hotelData.length; i++) {
        hotelId = hotelData[i].location_id
        idsArray.push(hotelId)
      }
      console.log(idsArray)
    })
    .catch((error) => {
      console.log(error)
    })
