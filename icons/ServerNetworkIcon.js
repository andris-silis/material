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
    <path d="M13,19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H4C3.45,17 3,16.55 3,16V12C3,11.45 3.45,11 4,11H20C20.55,11 21,11.45 21,12V16C21,16.55 20.55,17 20,17H13V19M4,3H20C20.55,3 21,3.45 21,4V8C21,8.55 20.55,9 20,9H4C3.45,9 3,8.55 3,8V4C3,3.45 3.45,3 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" />
  </svg>
)
