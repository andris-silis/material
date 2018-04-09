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
    <path d="M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4C4,4.9 4.9,4 6,4H18V8H21L24,12V17H22C22,18.66 20.66,20 19,20C17.34,20 16,18.66 16,17H12C12,18.66 10.66,20 9,20C7.34,20 6,18.66 6,17H4V13.5H3M19,18.5C19.83,18.5 20.5,17.83 20.5,17C20.5,16.17 19.83,15.5 19,15.5C18.17,15.5 17.5,16.17 17.5,17C17.5,17.83 18.17,18.5 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5C9.83,18.5 10.5,17.83 10.5,17C10.5,16.17 9.83,15.5 9,15.5C8.17,15.5 7.5,16.17 7.5,17C7.5,17.83 8.17,18.5 9,18.5Z" />
  </svg>
)
