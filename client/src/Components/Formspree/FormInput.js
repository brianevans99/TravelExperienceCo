import React from 'react'

export default function FormInput(props) {
  return (
    <div className='flex flex-wrap -mx-3 mb-6'>
      <div className='w-full px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
          {props.label}
        </label>
        <input
          className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      </div>
    </div>
  )
}
