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
    <path d="M5,3C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M6.4,6.5H17.6C18.37,6.5 19,7.12 19,7.9V16.1C19,16.87 18.37,17.5 17.6,17.5H6.4C5.63,17.5 5,16.87 5,16.1V7.9C5,7.12 5.62,6.5 6.4,6.5M6,8V10L12,14L18,10V8L12,12L6,8Z" />
  </svg>
)
