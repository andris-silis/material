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
    <path d="M17,3C18.1,3 19,3.9 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,11C9.9,11 9,11.9 9,13C9,14.1 9.9,15 11,15C12.1,15 13,14.1 13,13V8H16V6H12V11.27C11.71,11.1 11.36,11 11,11Z" />
  </svg>
)
