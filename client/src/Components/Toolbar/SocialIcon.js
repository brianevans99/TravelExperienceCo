import React from 'react'

export default function SocialIcon(props) {
  return (
    <span
      className={`mx-1 text-3xl ${props.item.color} hover:text-tecPink-300`}
    >
      <a href={props.item.url} target='_blank' rel='noopener noreferrer'>
        {props.item.icon}
      </a>
    </span>
  )
}
