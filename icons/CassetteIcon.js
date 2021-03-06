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
    <path d="M4,5C2.9,5 2,5.9 2,7V17C2,18.1 2.9,19 4,19H6L7,17H17L18,19H20C21.1,19 22,18.1 22,17V7C22,5.9 21.1,5 20,5H4M6.5,10C7.33,10 8,10.67 8,11.5C8,12.33 7.33,13 6.5,13C5.67,13 5,12.33 5,11.5C5,10.67 5.67,10 6.5,10M9,10H15V13H9V10M17.5,10C18.33,10 19,10.67 19,11.5C19,12.33 18.33,13 17.5,13C16.67,13 16,12.33 16,11.5C16,10.67 16.67,10 17.5,10Z" />
  </svg>
)
