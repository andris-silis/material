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
    <path d="M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17V19H13V17C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11M11,9H13V15H11V9M5,4H19C20.1,4 21,4.9 21,6V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4Z" />
  </svg>
)
