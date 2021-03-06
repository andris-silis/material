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
    <path d="M13,16.12C16.47,15.71 19.17,12.76 19.17,9.17C19.17,5.3 16.04,2.17 12.17,2.17C8.3,2.17 5.17,5.3 5.17,9.17C5.17,12.64 7.69,15.5 11,16.06V20H5V22H19V20H13V16.12Z" />
  </svg>
)
