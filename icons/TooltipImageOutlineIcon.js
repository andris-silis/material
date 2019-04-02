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
    <path d="M4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H16L12,22L8,18H4C2.9,18 2,17.1 2,16V4C2,2.9 2.9,2 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M7.5,6C8.33,6 9,6.67 9,7.5C9,8.33 8.33,9 7.5,9C6.67,9 6,8.33 6,7.5C6,6.67 6.67,6 7.5,6M6,14L11,9L13,11L18,6V14H6Z" />
  </svg>
)
