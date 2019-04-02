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
    <path d="M6,2H18C20.21,2 22,3.79 22,6V12H20V6C20,4.9 19.1,4 18,4H6C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H12V22H6C3.79,22 2,20.21 2,18V6C2,3.79 3.79,2 6,2M12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8M18,16C19.1,16 20,16.9 20,18C20,19.1 19.1,20 18,20C16.9,20 16,19.1 16,18C16,16.9 16.9,16 18,16Z" />
  </svg>
)
