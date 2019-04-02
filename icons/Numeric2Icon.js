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
    <path d="M9,7V9H13V11H11C9.9,11 9,11.9 9,13V17H11L15,17V15H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9Z" />
  </svg>
)
