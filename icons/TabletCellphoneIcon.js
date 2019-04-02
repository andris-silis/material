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
    <path d="M3,4H20C21.1,4 22,4.9 22,6V8H18V6H5V18H14V20H3C1.9,20 1,19.1 1,18V6C1,4.9 1.9,4 3,4M17,10H23C23.55,10 24,10.45 24,11V21C24,21.55 23.55,22 23,22H17C16.45,22 16,21.55 16,21V11C16,10.45 16.45,10 17,10M18,12V19H22V12H18Z" />
  </svg>
)
