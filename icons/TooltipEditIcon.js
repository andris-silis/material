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
    <path d="M4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H16L12,22L8,18H4C2.9,18 2,17.1 2,16V4C2,2.9 2.9,2 4,2M18,14V12H12.5L10.5,14H18M6,14H8.5L15.35,7.12C15.55,6.93 15.55,6.61 15.35,6.41L13.59,4.65C13.39,4.45 13.07,4.45 12.88,4.65L6,11.53V14Z" />
  </svg>
)
