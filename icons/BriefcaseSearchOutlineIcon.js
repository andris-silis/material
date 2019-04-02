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
    <path d="M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V13.03C21.5,12.23 20.8,11.54 20,11V8H4V19H10.5C10.81,19.75 11.26,20.42 11.81,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14M20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9M16.5,19C17.88,19 19,17.88 19,16.5C19,15.12 17.88,14 16.5,14C15.12,14 14,15.12 14,16.5C14,17.88 15.12,19 16.5,19Z" />
  </svg>
)
