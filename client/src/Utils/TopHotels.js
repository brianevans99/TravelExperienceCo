import React, { Component } from 'react'
import Axios from 'axios'

export default class TopHotels extends Component {
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
  getHotelData = (hotelId) => {
    Axios({
      method: 'GET',
      url: 'https://tripadvisor1.p.rapidapi.com/hotels/get-details',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': '4c5ccd0533mshb28473c844f5ba9p105d71jsn14db0547192b',
        useQueryString: true,
      },
      params: {
        location_id: hotelId,
      },
    })
      .then((response) => {
        const data = response.data.data
        this.state.hotelData.push(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getHotelIds(
      this.state.topRightLat,
      this.state.topRightLong,
      this.state.bottomLeftLat,
      this.state.bottomLeftLong
    )
    setTimeout(() => {
      for (let i = 0; i < this.state.hotelIds.length; i++) {
        this.getHotelData(this.state.hotelIds[i])
      }
      console.log(this.state.hotelIds)
    }, 2000)
  }
  render() {
    return <div>{this.state.hotelData}</div>
  }
}
