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
    <path d="M0.93,4.2L2.21,2.93L20,20.72L18.73,22L16.73,20H4C2.89,20 2,19.1 2,18V6C2,5.78 2.04,5.57 2.11,5.38L0.93,4.2M20,8V6H7.82L5.82,4H20C21.1,4 22,4.9 22,6V18C22,18.6 21.74,19.13 21.32,19.5L19.82,18H20V12H13.82L9.82,8H20M4,8H4.73L4,7.27V8M4,12V18H14.73L8.73,12H4Z" />
  </svg>
)
