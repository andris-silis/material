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
    <path d="M15,20C15.55,20 16,19.55 16,19V4H8C7.45,4 7,4.45 7,5V16H5V5C5,3.34 6.34,2 8,2H19C20.66,2 22,3.34 22,5V6H20V5C20,4.45 19.55,4 19,4C18.45,4 18,4.45 18,5V9L18,19C18,20.66 16.66,22 15,22H5C3.34,22 2,20.66 2,19V18H13C13,19.1 13.9,20 15,20Z" />
  </svg>
)
