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
    <path d="M7,3L3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5L17,3V5C17,5.55 16.55,6 16,6H10C9.45,6 9,5.55 9,5V3H7M8,10H16C16.55,10 17,10.45 17,11V19H7V11C7,10.45 7.45,10 8,10Z" />
  </svg>
)
