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
    <path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12Z" />
  </svg>
)
