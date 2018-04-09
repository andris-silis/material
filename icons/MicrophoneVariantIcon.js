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
    <path d="M9,3C11.21,3 13,4.79 13,7H5C5,4.79 6.79,3 9,3M11.84,9.82L11,18H10V19C10,20.1 10.9,21 12,21C13.1,21 14,20.1 14,19V14C14,11.79 15.79,10 18,10H20L19,11L20,12H18C16.9,12 16,12.9 16,14V19C16,21.21 14.21,23 12,23C9.79,23 8,21.21 8,19V18H7L6.16,9.82C5.67,9.32 5.31,8.7 5.13,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M9,11C8.45,11 8,11.45 8,12C8,12.55 8.45,13 9,13C9.55,13 10,12.55 10,12C10,11.45 9.55,11 9,11Z" />
  </svg>
)
