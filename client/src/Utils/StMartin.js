import React, { Component } from 'react'
import Axios from 'axios'

export default class StMartin extends Component {
  constructor() {
    super()
    this.state = {
      hotelIds: null,
      topRightLat: 18.142,
      topRightLong: -62.963,
      bottomLeftLat: 17.986,
      bottomLeftLong: -63.173,
    }
  }
  getHotelIds = (trLat, trLong, blLat, blLong) => {
    Axios({
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
        limit: 3,
        subcategory: 'hotel%2Cbb%2Cspecialty',
        hotel_class: '1%2C2%2C3',
        tr_latitude: trLat,
        tr_longitude: trLong,
        bl_latitude: blLat,
        bl_longitude: blLong,
      },
    }).then((response) => {
      const hotelData = response.data.data
      this.setState({
        hotelIds: hotelData.map((item) => Number(item.location_id)),
      })
    })
  }

  componentDidMount() {
    this.getHotelIds(
      this.state.topRightLat,
      this.state.topRightLong,
      this.state.bottomLeftLat,
      this.state.bottomLeftLong
    )
  }
  render() {
    return <div>st martin data</div>
  }
}
