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
    <path d="M2,4.27L3.28,3L20,19.72L18.73,21L16.63,18.9C16.43,18.96 16.22,19 16,19H5C3.9,19 3,18.1 3,17V7C3,6.5 3.17,6.07 3.46,5.73L2,4.27M17.63,5.84L22,12L19,16.2L7.83,5H16C16.67,5 17.27,5.33 17.63,5.84Z" />
  </svg>
)
