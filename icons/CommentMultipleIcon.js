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
    <path d="M12,23C11.45,23 11,22.55 11,22V19H7C5.9,19 5,18.1 5,17V7C5,5.9 5.9,5 7,5H21C22.1,5 23,5.9 23,7V17C23,18.1 22.1,19 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M3,15H1V3C1,1.9 1.9,1 3,1H19V3H3V15Z" />
  </svg>
)
