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
    <path d="M19,15C19,15 19,16 17,16C15,16 4,16 4,16V3H11L11.21,4.5H9.24V6H11.43L11.64,7.5H9.24V9H11.86L12,10H14C14,10 19,10 19,15M6.5,17C5.12,17 4,18.12 4,19.5C4,20.88 5.12,22 6.5,22C7.88,22 9,20.88 9,19.5C9,18.12 7.88,17 6.5,17M16.5,17C15.12,17 14,18.12 14,19.5C14,20.88 15.12,22 16.5,22C17.88,22 19,20.88 19,19.5C19,18.12 17.88,17 16.5,17Z" />
  </svg>
)
