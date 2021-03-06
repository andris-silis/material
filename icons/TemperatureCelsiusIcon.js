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
    <path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20C12.36,20 9,16.64 9,12.5C9,8.36 12.36,5 16.5,5M6,3C7.66,3 9,4.34 9,6C9,7.66 7.66,9 6,9C4.34,9 3,7.66 3,6C3,4.34 4.34,3 6,3M6,5C5.45,5 5,5.45 5,6C5,6.55 5.45,7 6,7C6.55,7 7,6.55 7,6C7,5.45 6.55,5 6,5Z" />
  </svg>
)
