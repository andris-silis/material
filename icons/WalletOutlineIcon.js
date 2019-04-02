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
    <path d="M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V16.72C21.59,16.37 22,15.74 22,15V9C22,8.26 21.59,7.63 21,7.28V5C21,3.9 20.1,3 19,3H5M5,5H19V7H13C11.9,7 11,7.9 11,9V15C11,16.1 11.9,17 13,17H19V19H5V5M13,9H20V15H13V9M16,10.5C15.17,10.5 14.5,11.17 14.5,12C14.5,12.83 15.17,13.5 16,13.5C16.83,13.5 17.5,12.83 17.5,12C17.5,11.17 16.83,10.5 16,10.5Z" />
  </svg>
)
