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
    <path d="M20,9V7H16C14.9,7 14,7.9 14,9V11C14,12.1 14.9,13 16,13H18V15H14V17H18C19.1,17 20,16.1 20,15V13C20,11.9 19.1,11 18,11H16V9M11,15H9V9H11M11,7H9C7.9,7 7,7.9 7,9V15C7,16.1 7.9,17 9,17H11C12.1,17 13,16.1 13,15V9C13,7.9 12.1,7 11,7M4,17H6V11H4M4,9H6V7H4V9Z" />
  </svg>
)
