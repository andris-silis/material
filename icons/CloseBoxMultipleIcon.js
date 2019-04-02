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
    <path d="M3,21H19V23H3C1.9,23 1,22.1 1,21V5H3V21M23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21C22.1,1 23,1.9 23,3M15.4,10L19,6.4L17.6,5L14,8.6L10.4,5L9,6.4L12.6,10L9,13.6L10.4,15L14,11.4L17.6,15L19,13.6L15.4,10Z" />
  </svg>
)
