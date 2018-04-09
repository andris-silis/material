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
    <path d="M3,7V13C3,17.97 7.03,22 12,22C16.97,22 21,17.97 21,13V7H17V13C17,15.76 14.76,18 12,18C9.24,18 7,15.76 7,13V7M17,5H21V2H17M3,5H7V2H3" />
  </svg>
)
