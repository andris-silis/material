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
    <path d="M7.47,21.5C4.2,19.93 1.86,16.76 1.5,13H0C0.5,19.16 5.66,24 11.95,24C12.18,24 12.39,24 12.61,23.97L8.8,20.15L7.47,21.5M12.05,0C11.82,0 11.61,0 11.39,0.04L15.2,3.85L16.53,2.5C19.8,4.07 22.14,7.24 22.5,11H24C23.5,4.84 18.34,0 12.05,0M16,14H18V8C18,6.89 17.1,6 16,6H10V8H16V14M8,16V4H6V6H4V8H6V16C6,17.1 6.9,18 8,18H16V20H18V18H20V16H8Z" />
  </svg>
)
