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
    <path d="M19.1,8.7C20.9,10.5 20.9,13.3 19.1,15.2L20.1,16.2C22.6,13.9 22.6,10.1 20.1,7.7L19.1,8.7M18,9.8L17,10.8C17.5,11.5 17.5,12.4 17,13.1L18,14.1C19.2,12.9 19.2,11.1 18,9.8M14,1H4C2.9,1 2,1.9 2,3V21C2,22.1 2.9,23 4,23H14C15.1,23 16,22.1 16,21V3C16,1.9 15.1,1 14,1M14,20H4V4H14V20Z" />
  </svg>
)