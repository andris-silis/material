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
    <path d="M4,5C2.9,5 2,5.9 2,7V17C2,18.1 2.9,19 4,19H20C21.1,19 22,18.1 22,17V7C22,5.9 21.1,5 20,5H4M4,7H16V17H4V7M19,7C19.55,7 20,7.45 20,8C20,8.55 19.55,9 19,9C18.45,9 18,8.55 18,8C18,7.45 18.45,7 19,7M6,9V11H14V9H6M19,11C19.55,11 20,11.45 20,12C20,12.55 19.55,13 19,13C18.45,13 18,12.55 18,12C18,11.45 18.45,11 19,11Z" />
  </svg>
)
