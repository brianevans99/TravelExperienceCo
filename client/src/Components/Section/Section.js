import React from 'react'
import FeelgoodBlock from '../FeelgoodBlock/FeelgoodBlock'
import FeelgoodData from '../FeelgoodBlock/FeelgoodBlock.data.js'

export default function Section() {
  const feelgoodItems = FeelgoodData.map((item) => (
    <FeelgoodBlock key={item.id} item={item} />
  ))
  return <div className='bg-gray-500 p-6'>{feelgoodItems}</div>
}
