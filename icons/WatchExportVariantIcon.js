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
    <path d="M14,11H19L16.5,8.5L17.92,7.08L22.84,12L17.92,16.92L16.5,15.5L19,13H14V11M8,0H16L16.83,5H17C17.28,5 17.54,5.06 17.78,5.16L15.94,7H7V17H15.94L17.78,18.84C17.54,18.94 17.28,19 17,19H16.83L16,24H8L7.17,19H7C5.9,19 5,18.1 5,17V7C5,5.89 5.9,5 7,5H7.17L8,0Z" />
  </svg>
)
