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
    <path d="M15.28,16.69L18.14,13.88L18.84,14.58L15.28,18.14L13.17,16L13.88,15.28L15.28,16.69M8,21C6.9,21 6,20.1 6,19V9C6,7.9 6.9,7 8,7V21M9,7H14V4C12.9,4 12,3.1 12,2H16V10C19.31,10 22,12.69 22,16C22,19.31 19.31,22 16,22C14.77,22 13.63,21.63 12.68,21H9V7M16,12C13.79,12 12,13.79 12,16C12,18.21 13.79,20 16,20C18.21,20 20,18.21 20,16C20,13.79 18.21,12 16,12Z" />
  </svg>
)
