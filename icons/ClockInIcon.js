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
    <path d="M2.21,0.79L0.79,2.21L4.8,6.21L3,8H8V3L6.21,4.8M12,8C8.14,8 5,11.13 5,15C5,18.87 8.13,22 12,22C15.86,22 19,18.87 19,15C19,11.13 15.87,8 12,8M12,10.15C14.67,10.15 16.85,12.32 16.85,15C16.85,17.68 14.68,19.85 12,19.85C9.32,19.85 7.15,17.68 7.15,15C7.15,12.32 9.32,10.15 12,10.15M11,12V15.69L14.19,17.53L14.94,16.23L12.5,14.82V12" />
  </svg>
)
