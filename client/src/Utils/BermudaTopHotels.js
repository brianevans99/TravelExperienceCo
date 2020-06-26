import React, { Component } from 'react'
import Axios from 'axios'
import Spinner from '../Components/Spinner/Spinner'

class PersonList extends Component {
  state = {
    hotels: [],
    tr_latitude: 32.408,
    tr_longitude: -64.619,
    bl_latitude: 32.216,
    bl_longitude: -64.927,
  }

  getData = (trLat, trLong, blLat, blLong) => {
    Axios({
      method: 'GET',
      url: 'https://tripadvisor1.p.rapidapi.com/hotels/list-in-boundary',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        currency: 'USD',
        limit: '6',
        subcategory: 'hotel%2Cbb%2Cspecialty',
        hotel_class: '4,5',
        tr_latitude: trLat,
        tr_longitude: trLong,
        bl_latitude: blLat,
        bl_longitude: blLong,
      },
    }).then((res) => {
      console.log(res)
      this.setState({ hotels: res.data.data })
    })
  }

  componentDidMount() {
    this.getData(
      this.state.tr_latitude,
      this.state.tr_longitude,
      this.state.bl_latitude,
      this.state.bl_longitude
    )
  }

  render() {
    return (
      <div className='flex flex-wrap flex-col md:flex-row justify-center'>
        {this.state.hotels.map((hotel) => (
          <div className='bg-black text-white w-full md:w-1/2 lg:w-1/3'>
            {!hotel.photo.images.large.url ? (
              <Spinner />
            ) : (
              <div
                key={hotel.location_id}
                className='bg-blue-400 mt-2'
                style={{
                  background: `black url(${hotel.photo.images.large.url}) no-repeat center`,
                  backgroundSize: 'cover',
                  width: '95%',
                  height: '250px',
                }}
              ></div>
            )}
            <div style={{ height: '200px' }} className='px-2'>
              <div className='uppercase text-2xl font-bold'>{`${hotel.name} ${hotel.subcategory_type}`}</div>
              <div>located in {hotel.ranking_geo}</div>
              <div>
                {hotel.special_offers.desktop.map((item) => (
                  <div key={item.index}>{item.headline}</div>
                ))}
              </div>
              <div>Nightly Rates {hotel.price}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PersonList
