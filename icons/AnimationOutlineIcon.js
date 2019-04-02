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
    <path d="M4,2C2.9,2 2,2.9 2,4V14H4V4H14V2H4M8,6C6.9,6 6,6.9 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12C10.9,10 10,10.9 10,12V20C10,21.1 10.9,22 12,22H20C21.1,22 22,21.1 22,20V12C22,10.9 21.1,10 20,10Z" />
  </svg>
)
