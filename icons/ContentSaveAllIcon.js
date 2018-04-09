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
    <path d="M17,7V3H7V7H17M14,17C15.66,17 17,15.66 17,14C17,12.34 15.66,11 14,11C12.34,11 11,12.34 11,14C11,15.66 12.34,17 14,17M19,1L23,5V17C23,18.1 22.1,19 21,19H7C5.89,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H19M1,7H3V21H17V23H3C1.9,23 1,22.1 1,21V7Z" />
  </svg>
)
