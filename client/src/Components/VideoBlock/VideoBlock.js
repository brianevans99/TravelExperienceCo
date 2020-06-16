import React, { Component } from 'react'
import YouTube from 'react-youtube'

export default class VideoBlock extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: false,
      },
    }
    return (
      <div className='bg-black flex justify-center'>
        <YouTube
          className='max-w-full'
          videoId='tgyynfhvTnQ'
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }
}
