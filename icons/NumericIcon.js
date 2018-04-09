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
    <path d="M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20C21.1,7 22,7.9 22,9V10.5C22,11.33 21.33,12 20.5,12C21.33,12 22,12.67 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12C13.1,7 14,7.9 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z" />
  </svg>
)
