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
    <path d="M20,6H12L10,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.9 21.1,6 20,6M20,18H4V6H9.17L11.17,8H20V18M13.08,14.04L12.39,17L15,15.47L17.61,17L16.92,14.04L19.22,12.05L16.19,11.79L15,9L13.81,11.79L10.78,12.05L13.08,14.04Z" />
  </svg>
)
