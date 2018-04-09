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
    <path d="M9,14V21H2V19H5.57C4,17.3 3,15 3,12.5C3,7.25 7.25,3 12.5,3C17.75,3 22,7.25 22,12.5C22,17.75 17.75,22 12.5,22H12V20H12.5C16.64,20 20,16.64 20,12.5C20,8.36 16.64,5 12.5,5C8.36,5 5,8.36 5,12.5C5,14.47 5.76,16.26 7,17.6V14H9Z" />
  </svg>
)
