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
    <path d="M12,6C5.92,6 1,10.92 1,17H3C3,12.04 7.04,8 12,8C16.96,8 21,12.04 21,17H23C23,10.92 18.08,6 12,6M12,10C8.14,10 5,13.14 5,17H7C7,14.24 9.24,12 12,12C14.76,12 17,14.24 17,17H19C19,13.14 15.86,10 12,10Z" />
  </svg>
)
