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
    <path d="M19,8V5H5V8H9C9,9.66 10.34,11 12,11C13.66,11 15,9.66 15,8H19M19,3C20.1,3 21,3.9 21,5V12C21,13.1 20.1,14 19,14H5C3.9,14 3,13.1 3,12V5C3,3.9 3.9,3 5,3H19M3,15H9C9,16.66 10.34,18 12,18C13.66,18 15,16.66 15,15H21V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V15Z" />
  </svg>
)
