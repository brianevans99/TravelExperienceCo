import React, { Component, Fragment } from 'react'
import TopHero from '../../Components/TopHero/TopHero'
import PageData from '../../Data/PageData'
import Axios from 'axios'
import Spinner from '../../Components/Spinner/Spinner'

export default class Australia extends Component {
  state = {
    data: PageData.destinations,
    pageName: 'Australia',
    hotels: [],
  }
  getData = () => {
    Axios({
      method: 'GET',
      url: 'https://tripadvisor1.p.rapidapi.com/hotels/list',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        useQueryString: true,
      },
      params: {
        currency: 'USD',
        limit: '6',
        order: 'asc',
        lang: 'en_US',
        sort: 'recommended',
        location_id: '255055',
      },
    }).then((res) => {
      console.log(res.data.data)
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
    const pagedata = this.state.data.find((data) => {
      return data.name === this.state.pageName
    })

    return (
      <Fragment>
        <div className='pt-16'>
          <TopHero
            name={pagedata.name}
            text={pagedata.heroText}
            background={pagedata.background}
            heroTextPos={pagedata.heroTextPos}
            heroTextSize={pagedata.heroTextSize}
            heroImg={pagedata.heroImg}
            heroAlt={pagedata.heroAlt}
            heroImgPos={pagedata.heroImgPos}
            heroImgGrad={pagedata.heroImgGrad}
            label='Start Here'
            page='/contact'
          />
        </div>

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
      </Fragment>
    )
  }
}
