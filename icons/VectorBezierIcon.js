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
    <path d="M7.5,4C6.67,4 6,4.67 6,5.5C6,6.33 6.67,7 7.5,7C8.13,7 8.7,6.6 8.91,6H13C13.67,5.33 14.33,5 15,5H8.91C8.7,4.4 8.13,4 7.5,4M19,5C8,5 14,17 5,17V19C16,19 10,7 19,7V5M16.5,17C15.87,17 15.3,17.4 15.09,18H11C10.33,18.67 9.67,19 9,19H15.09C15.3,19.6 15.87,20 16.5,20C17.33,20 18,19.33 18,18.5C18,17.67 17.33,17 16.5,17Z" />
  </svg>
)
