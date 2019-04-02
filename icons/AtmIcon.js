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
    <path d="M8,9V10.5H10.25V15H11.75V10.5H14V9H8M6,9H3C2.45,9 2,9.45 2,10V15H3.5V13.5H5.5V15H7V10C7,9.45 6.55,9 6,9M5.5,12H3.5V10.5H5.5V12M21,9H16.5C15.95,9 15.5,9.45 15.5,10V15H17V10.5H18V14H19.5V10.5H20.5V15H22V10C22,9.45 21.55,9 21,9Z" />
  </svg>
)
