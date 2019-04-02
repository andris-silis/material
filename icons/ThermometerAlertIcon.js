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
    <path d="M15,17C15,19.76 12.76,22 10,22C7.24,22 5,19.76 5,17C5,15.43 5.74,13.94 7,13V5C7,3.34 8.34,2 10,2C11.66,2 13,3.34 13,5V13C14.26,13.94 15,15.43 15,17M9,8V14.17C7.44,14.72 6.62,16.44 7.17,18C7.72,19.56 9.44,20.38 11,19.83C12.56,19.27 13.38,17.56 12.83,16C12.53,15.14 11.85,14.47 11,14.17V8H9M17,12V7H19V12H17M17,16V14H19V16H17Z" />
  </svg>
)
