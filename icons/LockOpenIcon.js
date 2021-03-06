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
    <path d="M18,8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V10C4,8.9 4.9,8 6,8H15V6C15,4.34 13.66,3 12,3C10.34,3 9,4.34 9,6H7C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6V8H18M12,17C13.1,17 14,16.1 14,15C14,13.9 13.1,13 12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17Z" />
  </svg>
)
