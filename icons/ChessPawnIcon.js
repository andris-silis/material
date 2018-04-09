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
    <path d="M19,22H5V20H19V22M16,18L13.2,7.74C14.72,7.07 15.41,5.31 14.74,3.79C14.08,2.27 12.31,1.58 10.79,2.25C9.27,2.91 8.58,4.68 9.25,6.2C9.55,6.89 10.1,7.44 10.79,7.74L8,18H16Z" />
  </svg>
)
