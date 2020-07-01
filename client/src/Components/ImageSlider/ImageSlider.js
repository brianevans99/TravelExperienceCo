import React from 'react'
import { Fade } from 'react-slideshow-image'
import image1 from '../../Assets/Images/Carousel/alaska.jpg'
import image2 from '../../Assets/Images/Carousel/beach1.jpg'
import image3 from '../../Assets/Images/Carousel/relaxing.jpg'
import image4 from '../../Assets/Images/Carousel/destinationWedding.jpg'

const imageData = [
  {
    id: 1,
    image: {
      imgSrc: image1,
      imgPos: 'bg-bottom',
    },
    title: {
      text: 'Alaska',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: 'Rugged. Wild. Majestic.',
      class: 'font-mono text-gray-400 leading-none',
    },
    outerDivClass: 'justify-center items-end md:items-start p-2 md:pt-32',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-3/5 sm:w-1/3 md:h-auto rounded p-4',
  },
  {
    id: 2,
    image: {
      imgSrc: image2,
      imgPos: 'bg-center',
    },
    title: {
      text: 'Warm Breezes...',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: "There's a cold drink casting shade somewhere",
      class: 'font-mono text-gray-400 leading-none',
    },
    outerDivClass: 'justify-end items-end md:items-center p-2 md:pr-16',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-1/2 md:w-1/3 md:h-auto rounded p-2 md:py-8',
  },
  {
    id: 3,
    image: {
      imgSrc: image3,
      imgPos: 'bg-right md:bg-center',
    },
    title: {
      text: 'Zen',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: "We'll help you find your spot",
      class: 'font-mono text-gray-400 leading-none',
    },
    outerDivClass: 'justify-end items-end md:items-start p-2 md:pt-32 md:pr-16',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-1/2 md:w-1/3 md:h-auto rounded p-2 md:py-8',
  },
  {
    id: 4,
    image: {
      imgSrc: image4,
      imgPos: 'bg-left md:bg-bottom',
    },
    title: {
      text: 'Say I do',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: 'Memorable destination weddings are just a click away',
      class: 'font-mono text-gray-400 leading-none',
    },
    outerDivClass:
      'justify-center md:justify-start items-end p-2 md:pb-16 md:pl-12',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-4/5 md:w-2/5 md:h-auto rounded p-2 md:pb-4 md:ml-8 mt-4 md:mt-0',
  },
]

const fadeProperties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
}

const ImageSlider = () => {
  return (
    <div className='slide-container'>
      <Fade {...fadeProperties}>
        <div className='each-fade'>
          <div className='image-container'>
            <div
              className={`bg-gray-400 ${imageData[0].image.imgPos} bg-cover h-64 md:h-screen relative`}
              style={{
                backgroundImage: `url(${imageData[0].image.imgSrc})`,
              }}
            >
              <div
                className={`flex ${imageData[0].outerDivClass} bg-opacity-25 bg-black min-h-full`}
              >
                <div className={imageData[0].innerDivClass}>
                  <div className={imageData[0].title.class}>
                    {imageData[0].title.text}
                  </div>
                  <div className={imageData[0].tagline.class}>
                    {imageData[0].tagline.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <div
              className={`bg-gray-400 ${imageData[1].image.imgPos} bg-cover h-64 md:h-screen relative`}
              style={{
                backgroundImage: `url(${imageData[1].image.imgSrc})`,
              }}
            >
              <div
                className={`flex ${imageData[1].outerDivClass} bg-opacity-25 bg-black min-h-full`}
              >
                <div className={imageData[1].innerDivClass}>
                  <div className={imageData[1].title.class}>
                    {imageData[1].title.text}
                  </div>
                  <div className={imageData[1].tagline.class}>
                    {imageData[1].tagline.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <div
              className={`bg-gray-400 ${imageData[2].image.imgPos} bg-cover h-64 md:h-screen relative`}
              style={{
                backgroundImage: `url(${imageData[2].image.imgSrc})`,
              }}
            >
              <div
                className={`flex ${imageData[2].outerDivClass} bg-opacity-25 bg-black min-h-full`}
              >
                <div className={imageData[2].innerDivClass}>
                  <div className={imageData[2].title.class}>
                    {imageData[2].title.text}
                  </div>
                  <div className={imageData[2].tagline.class}>
                    {imageData[2].tagline.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <div
              className={`bg-gray-400 ${imageData[3].image.imgPos} bg-cover h-64 md:h-screen relative`}
              style={{
                backgroundImage: `url(${imageData[3].image.imgSrc})`,
              }}
            >
              <div
                className={`flex ${imageData[3].outerDivClass} bg-opacity-25 bg-black min-h-full`}
              >
                <div className={imageData[3].innerDivClass}>
                  <div className={imageData[3].title.class}>
                    {imageData[3].title.text}
                  </div>
                  <div className={imageData[3].tagline.class}>
                    {imageData[3].tagline.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default ImageSlider
