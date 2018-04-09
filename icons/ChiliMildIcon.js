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
    <path d="M13.75,9L14.95,8.24C15.58,8.58 16,9.24 16,10V21.75C16,21.75 8,20 8,11V10C8,9.27 8.39,8.63 8.97,8.28L10.43,9L12,8L13.75,9M10,2C11.53,2 12.8,3.15 13,4.64C14,4.93 14.81,5.67 15.22,6.63L13.75,7.5L12,6.5L10.43,7.5L8.76,6.67C9.15,5.72 9.95,5 10.94,4.66C10.8,4.28 10.43,4 10,4V2Z" />
  </svg>
)
