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
    <path d="M17.41,12.17L14.24,9L12.83,10.41L17.41,15L22,10.41L20.58,9M12,17C12,19.76 9.76,22 7,22C4.24,22 2,19.76 2,17C2,15.43 2.74,13.94 4,13V5C4,3.34 5.34,2 7,2C8.66,2 10,3.34 10,5V13C11.26,13.94 12,15.43 12,17M6,8V14.17C4.44,14.72 3.62,16.44 4.17,18C4.72,19.56 6.44,20.38 8,19.83C9.56,19.27 10.38,17.56 9.83,16C9.53,15.14 8.85,14.47 8,14.17V8H6Z" />
  </svg>
)
