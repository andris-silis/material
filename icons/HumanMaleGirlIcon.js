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
    <path d="M7.5,2C8.6,2 9.5,2.9 9.5,4C9.5,5.1 8.6,6 7.5,6C6.4,6 5.5,5.1 5.5,4C5.5,2.9 6.4,2 7.5,2M6,7H9C10.1,7 11,7.9 11,9V14.5H9.5V22H5.5V14.5H4V9C4,7.9 4.9,7 6,7M14.5,12C14.5,10.9 15.4,10 16.5,10C17.6,10 18.5,10.9 18.5,12C18.5,13.1 17.6,14 16.5,14C15.4,14 14.5,13.1 14.5,12M15,15H18L19.5,19H18V22H15V19H13.5L15,15Z" />
  </svg>
)
