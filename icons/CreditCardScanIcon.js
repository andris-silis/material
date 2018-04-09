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
    <path d="M2,4H6V2H2C0.9,2 0,2.9 0,4V8H2V4M22,2H18V4H22V8H24V4C24,2.9 23.1,2 22,2M2,16H0V20C0,21.1 0.9,22 2,22H6V20H2V16M22,20H18V22H22C23.1,22 24,21.1 24,20V16H22V20M4,8V16C4,17.1 4.9,18 6,18H18C19.1,18 20,17.1 20,16V8C20,6.9 19.1,6 18,6H6C4.9,6 4,6.9 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z" />
  </svg>
)
