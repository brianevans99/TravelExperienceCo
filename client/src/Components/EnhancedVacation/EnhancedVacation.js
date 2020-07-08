import React from 'react'
import data from '../../Assets/data.json'

export default function EnhancedVacation() {
  const personData = data.map((person) => (
    <li key={person.id}>{person.username}</li>
  ))
  return (
    <div className='bg-black text-white w-full'>
      <ul>{personData}</ul>
    </div>
  )
}
