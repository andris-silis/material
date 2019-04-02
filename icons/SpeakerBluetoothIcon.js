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
    <path d="M4,3C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21H12C13.1,21 14,20.1 14,19V5C14,3.9 13.1,3 12,3H4M8,5C9.1,5 10,5.9 10,7C10,8.1 9.1,9 8,9C6.9,9 6,8.1 6,7C6,5.9 6.9,5 8,5M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M8,11C10.21,11 12,12.79 12,15C12,17.21 10.21,19 8,19C5.79,19 4,17.21 4,15C4,12.79 5.79,11 8,11M8,13C6.9,13 6,13.9 6,15C6,16.1 6.9,17 8,17C9.1,17 10,16.1 10,15C10,13.9 9.1,13 8,13M20,13.21L20.94,14.14L20,15.08V13.21Z" />
  </svg>
)
