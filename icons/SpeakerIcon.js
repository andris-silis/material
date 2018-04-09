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
    <path d="M12,12C10.34,12 9,13.34 9,15C9,16.66 10.34,18 12,18C13.66,18 15,16.66 15,15C15,13.34 13.66,12 12,12M12,20C9.24,20 7,17.76 7,15C7,12.24 9.24,10 12,10C14.76,10 17,12.24 17,15C17,17.76 14.76,20 12,20M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20C5,21.1 5.9,22 7,22H17C18.1,22 19,21.1 19,20V4C19,2.89 18.1,2 17,2Z" />
  </svg>
)
