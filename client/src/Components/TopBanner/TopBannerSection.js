import React from 'react'
import TopBannerData from './TopBannerData'

export default function TopBannerSection() {
  const data = TopBannerData[Math.floor(Math.random() * 4)]

  return (
    <div
      className={`bg-gray-400 ${data.image.imgPos} bg-cover h-64 md:h-screen relative`}
      style={{
        backgroundImage: `url(${data.image.imgSrc})`,
      }}
    >
      <div
        className={`flex ${data.outerDivClass} bg-opacity-25 bg-black min-h-full`}
      >
        <div className={data.innerDivClass}>
          <div className={data.title.class}>{data.title.text}</div>
          <div className={data.tagline.class}>{data.tagline.text}</div>
        </div>
      </div>
    </div>
  )
}
