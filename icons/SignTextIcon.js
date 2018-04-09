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
    <path d="M11,3L12,2L13,3V5H20C20.55,5 21,5.45 21,6V16C21,16.55 20.55,17 20,17H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V17H4C3.45,17 3,16.55 3,16V6C3,5.45 3.45,5 4,5H11V3M6,8V10H18V8H6M6,12V14H13V12H6Z" />
  </svg>
)
