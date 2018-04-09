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
    <path d="M19,14.5C19,14.5 21,16.67 21,18C21,19.1 20.1,20 19,20C17.9,20 17,19.1 17,18C17,16.67 19,14.5 19,14.5M5,18V9C3.9,9 3,8.1 3,7C3,5.9 3.9,5 5,5V4C5,2.9 5.9,2 7,2H9C10.1,2 11,2.9 11,4V5H19C20.1,5 21,5.9 21,7V9L21,11C21.55,11 22,11.45 22,12C22,12.55 21.55,13 21,13H17C16.45,13 16,12.55 16,12C16,11.45 16.45,11 17,11V9H11V18H12C13.1,18 14,18.9 14,20V22H2V20C2,18.9 2.9,18 4,18H5Z" />
  </svg>
)
