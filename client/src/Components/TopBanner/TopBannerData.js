import image1 from '../../Assets/Images/Carousel/alaska.jpg'
import image2 from '../../Assets/Images/Carousel/beach1.jpg'
import image3 from '../../Assets/Images/Carousel/relaxing.jpg'
import image4 from '../../Assets/Images/Carousel/destinationWedding.jpg'

export default [
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
      class: 'font-mono text-gray-400',
    },
    outerDivClass: 'justify-center md:justify-end md:items-center',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-3/5 md:w-1/3 md:h-auto rounded md:rounded-r-none p-4 md:py-8 mt-4',
  },
  {
    id: 2,
    image: {
      imgSrc: image2,
      imgPos: 'bg-center',
    },
    title: {
      text: 'Zen.',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: "We'll help you find your spot.",
      class: 'font-mono text-gray-400',
    },
    outerDivClass: 'justify-end items-end md:items-center',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-1/2 md:w-1/3 md:h-auto rounded md:rounded-r-none p-4 md:py-8',
  },
  {
    id: 3,
    image: {
      imgSrc: image3,
      imgPos: 'bg-right md:bg-center',
    },
    title: {
      text: 'Zen.',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: "We'll help you find your spot.",
      class: 'font-mono text-gray-400',
    },
    outerDivClass: 'justify-end items-end md:items-center',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-1/2 md:w-1/3 md:h-auto rounded md:rounded-r-none p-4 md:py-8',
  },
  {
    id: 4,
    image: {
      imgSrc: image4,
      imgPos: 'bg-left md:bg-bottom',
    },
    title: {
      text: 'I do.',
      class: 'font-mono text-white text-xl md:text-4xl ',
    },
    tagline: {
      text: 'Memorable destination weddings are just a click away.',
      class: 'font-mono text-gray-400',
    },
    outerDivClass: 'justify-center md:justify-start md:items-end',
    innerDivClass:
      'bg-opacity-25 bg-black text-center absolute w-3/5 md:w-3/5 md:h-auto rounded md:rounded-r-none p-4 md:py-8 md:ml-8 mt-4 md:mt-0',
  },
]
