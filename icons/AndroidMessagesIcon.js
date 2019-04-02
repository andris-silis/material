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
    <path d="M20,20H7C5.9,20 5,19.1 5,18V8.94L2.23,5.64C2.09,5.47 2,5.24 2,5C2,4.45 2.45,4 3,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M8.5,7C8.22,7 8,7.22 8,7.5V8.5C8,8.78 8.22,9 8.5,9H18.5C18.78,9 19,8.78 19,8.5V7.5C19,7.22 18.78,7 18.5,7H8.5M8.5,11C8.22,11 8,11.22 8,11.5V12.5C8,12.78 8.22,13 8.5,13H18.5C18.78,13 19,12.78 19,12.5V11.5C19,11.22 18.78,11 18.5,11H8.5M8.5,15C8.22,15 8,15.22 8,15.5V16.5C8,16.78 8.22,17 8.5,17H13.5C13.78,17 14,16.78 14,16.5V15.5C14,15.22 13.78,15 13.5,15H8.5Z" />
  </svg>
)
