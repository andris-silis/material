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
    <path d="M7,2C5.9,2 5,2.9 5,4V20C5,21.1 5.9,22 7,22H17C18.1,22 19,21.1 19,20V4C19,2.9 18.1,2 17,2H7M7,4H17V10H7V4M12,12C14.21,12 16,13.79 16,16C16,18.21 14.21,20 12,20C9.79,20 8,18.21 8,16C8,13.79 9.79,12 12,12M12,14C10.9,14 10,14.9 10,16C10,17.1 10.9,18 12,18C13.1,18 14,17.1 14,16C14,14.9 13.1,14 12,14Z" />
  </svg>
)
