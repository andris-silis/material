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
    <path d="M7.5,2C8.6,2 9.5,2.9 9.5,4C9.5,5.1 8.6,6 7.5,6C6.4,6 5.5,5.1 5.5,4C5.5,2.9 6.4,2 7.5,2M6,22V16H3L5.6,8.4C5.9,7.6 6.6,7 7.5,7C8.4,7 9.2,7.6 9.4,8.4L12,16L14.6,8.4C14.9,7.6 15.6,7 16.5,7C17.4,7 18.2,7.6 18.4,8.4L21,16H18V22H15V16H12L9,16V22H6M16.5,2C17.6,2 18.5,2.9 18.5,4C18.5,5.1 17.6,6 16.5,6C15.4,6 14.5,5.1 14.5,4C14.5,2.9 15.4,2 16.5,2Z" />
  </svg>
)
