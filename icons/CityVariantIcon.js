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
    <path d="M19,9V7C19,5.9 18.1,5 17,5H16V2H14V5H13C11.9,5 11,5.9 11,7V9C9.9,9 9,9.9 9,11V12H5C3.9,12 3,12.9 3,14V22H6V20H8V22H12V20H14V22H16V20H18V22H21V11C21,9.9 20.1,9 19,9M8,18H6V16H8V18M14,18H12V16H14V18M14,14H12V12H14V14M13,9V7H17V9H13M18,18H16V16H18V18M18,14H16V12H18V14Z" />
  </svg>
)
