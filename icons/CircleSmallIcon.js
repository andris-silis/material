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
    <path d="M12,10C10.9,10 10,10.9 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12C14,10.9 13.1,10 12,10Z" />
  </svg>
)
