import React, { Component } from 'react'
import poster1 from '../../Assets/Images/destWedding_poster.jpg'
import video1 from '../../Assets/Videos/destWedding.mp4'
import poster2 from '../../Assets/Images/el-dorado-seaside_poster.jpg'
import video2 from '../../Assets/Videos/el-dorado-seaside.mp4'

export default class VideoBlock extends Component {
  render() {
    return (
      <div className='bg-black flex flex-col md:flex-row'>
        <div className='flex-1 p-4'>
          <video poster={poster1} muted controls>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='flex-1 p-4'>
          <video poster={poster2} muted controls>
            <source src={video2} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }
}
