import React from 'react'

const DEFAULT_SIZE = 24

export default ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M7.5,2C8.6,2 9.5,2.9 9.5,4C9.5,5.1 8.6,6 7.5,6C6.4,6 5.5,5.1 5.5,4C5.5,2.9 6.4,2 7.5,2M6,7H9C10.1,7 11,7.9 11,9V14.5H9.5V22H5.5V14.5H4V9C4,7.9 4.9,7 6,7M16.5,2C17.6,2 18.5,2.9 18.5,4C18.5,5.1 17.6,6 16.5,6C15.4,6 14.5,5.1 14.5,4C14.5,2.9 15.4,2 16.5,2M15,22V16H12L14.59,8.41C14.84,7.59 15.6,7 16.5,7C17.4,7 18.16,7.59 18.41,8.41L21,16H18V22H15Z" />
  </svg>
)
