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
    <path d="M4,6H6V18H4V6M7,6H8V18H7V6M9,6H12V18H9V6M13,6H14V18H13V6M16,6H18V18H16V6M19,6H20V18H19V6M2,4V8H0V4C0,2.9 0.9,2 2,2H6V4H2M22,2C23.1,2 24,2.9 24,4V8H22V4H18V2H22M2,16V20H6V22H2C0.9,22 0,21.1 0,20V16H2M22,20V16H24V20C24,21.1 23.1,22 22,22H18V20H22Z" />
  </svg>
)
