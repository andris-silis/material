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
    <path d="M14.58,3H22V19.67L14.58,3M9.42,3H2V19.67L9.42,3M12,9.17L16.67,19.67H13.5L12.17,16.33H8.75L12,9.17Z" />
  </svg>
)
