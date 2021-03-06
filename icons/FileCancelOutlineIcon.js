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
    <path d="M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M11.5,10C14,10 16,12 16,14.5C16,17 14,19 11.5,19C9,19 7,17 7,14.5C7,12 9,10 11.5,10M11.5,11.5C10.94,11.5 10.42,11.65 10,11.92L14.08,16C14.35,15.58 14.5,15.06 14.5,14.5C14.5,12.84 13.16,11.5 11.5,11.5M8.5,14.5C8.5,16.16 9.84,17.5 11.5,17.5C12.06,17.5 12.58,17.35 13,17.08L8.92,13C8.65,13.42 8.5,13.94 8.5,14.5Z" />
  </svg>
)
