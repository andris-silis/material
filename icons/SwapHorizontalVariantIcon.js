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
    <path d="M4,6L8,10V7H16C17.1,7 18,7.9 18,9C18,10.1 17.1,11 16,11H8C5.79,11 4,12.79 4,15C4,17.21 5.79,19 8,19H16V22L20,18L16,14V17H8C6.9,17 6,16.1 6,15C6,13.9 6.9,13 8,13H16C18.21,13 20,11.21 20,9C20,6.79 18.21,5 16,5H8V2L4,6Z" />
  </svg>
)
