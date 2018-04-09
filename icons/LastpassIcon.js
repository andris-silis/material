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
    <path d="M14,12C14,10.9 14.9,10 16,10C17.1,10 18,10.9 18,12C18,13.1 17.1,14 16,14C14.9,14 14,13.1 14,12M8,12C8,10.9 8.9,10 10,10C11.1,10 12,10.9 12,12C12,13.1 11.1,14 10,14C8.9,14 8,13.1 8,12M2,12C2,10.9 2.9,10 4,10C5.1,10 6,10.9 6,12C6,13.1 5.1,14 4,14C2.9,14 2,13.1 2,12M22,5H20V19H22V5Z" />
  </svg>
)
