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
    <path d="M7,12H9V14H7V12M21,6V20C21,21.1 20.1,22 19,22H5C3.89,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4H6V2H8V4H16V2H18V4H19C20.1,4 21,4.9 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14H17V12H15V14M11,14H13V12H11V14Z" />
  </svg>
)
