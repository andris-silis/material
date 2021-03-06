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
    <path d="M15,9C14.45,9 14,8.55 14,8C14,7.45 14.45,7 15,7C15.55,7 16,7.45 16,8C16,8.55 15.55,9 15,9M9,9C8.45,9 8,8.55 8,8C8,7.45 8.45,7 9,7C9.55,7 10,7.45 10,8C10,8.55 9.55,9 9,9M16.12,4.37L18.22,2.27L17.4,1.44L15.09,3.75C14.16,3.28 13.11,3 12,3C10.88,3 9.84,3.28 8.91,3.75L6.6,1.44L5.78,2.27L7.88,4.37C6.14,5.64 5,7.68 5,10V11H19V10C19,7.68 17.86,5.64 16.12,4.37M5,16C5,19.86 8.13,23 12,23C15.87,23 19,19.87 19,16V12H5V16Z" />
  </svg>
)
