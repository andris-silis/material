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
    <path d="M12,1C5.92,1 1,5.92 1,12C1,18.08 5.92,23 12,23C18.08,23 23,18.08 23,12C23,5.92 18.08,1 12,1M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M13,13.5C13,14.13 13.4,14.7 14,14.91V18H10V11.91C10.78,11.64 11.19,10.8 10.93,10C10.78,9.58 10.44,9.24 10,9.09V6H14V12.09C13.4,12.3 13,12.87 13,13.5Z" />
  </svg>
)
