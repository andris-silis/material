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
    <path d="M4,4C2.9,4 2,4.9 2,6V17C2,18.1 2.9,19 4,19V20H6V19H17V20H19V19C20.1,19 21,18.1 21,17V16H22V14H21V9H22V7H21V6C21,4.9 20.1,4 19,4H4M4,6H19V17H4V6M13.5,7.5C11.29,7.5 9.5,9.29 9.5,11.5C9.5,13.71 11.29,15.5 13.5,15.5C15.71,15.5 17.5,13.71 17.5,11.5C17.5,9.29 15.71,7.5 13.5,7.5M5,9V14H7V9H5M13.5,9.5C14.6,9.5 15.5,10.4 15.5,11.5C15.5,12.6 14.6,13.5 13.5,13.5C12.4,13.5 11.5,12.6 11.5,11.5C11.5,10.4 12.4,9.5 13.5,9.5Z" />
  </svg>
)
