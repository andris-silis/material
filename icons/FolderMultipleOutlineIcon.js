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
    <path d="M22,4C23.1,4 24,4.9 24,6V16C24,17.1 23.1,18 22,18H6C4.9,18 4,17.1 4,16V4C4,2.9 4.9,2 6,2H12L14,4H22M2,6V20H20V22H2C0.9,22 0,21.1 0,20V11H0V6H2M6,6V16H22V6H6Z" />
  </svg>
)
