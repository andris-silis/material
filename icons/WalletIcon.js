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
    <path d="M21,18V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V6H12C10.89,6 10,6.9 10,8V16C10,17.1 10.9,18 12,18M12,16H22V8H12M16,13.5C15.17,13.5 14.5,12.83 14.5,12C14.5,11.17 15.17,10.5 16,10.5C16.83,10.5 17.5,11.17 17.5,12C17.5,12.83 16.83,13.5 16,13.5Z" />
  </svg>
)
