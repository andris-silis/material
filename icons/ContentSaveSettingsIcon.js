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
    <path d="M15,8V4H5V8H15M12,18C13.66,18 15,16.66 15,15C15,13.34 13.66,12 12,12C10.34,12 9,13.34 9,15C9,16.66 10.34,18 12,18M17,2L21,6V18C21,19.1 20.1,20 19,20H5C3.89,20 3,19.1 3,18V4C3,2.9 3.9,2 5,2H17M11,22H13V24H11V22M7,22H9V24H7V22M15,22H17V24H15V22Z" />
  </svg>
)
