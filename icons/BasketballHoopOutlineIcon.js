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
    <path d="M21,2H3C1.9,2 1,2.9 1,4V16C1,17.1 1.9,18 3,18H6.57L8,23L10,21L12,23L14,21L16,23L17.43,18H21C22.1,18 23,17.1 23,16V4C23,2.9 22.1,2 21,2M21,16H18V14H17V9C17,7.9 16.1,7 15,7H9C7.9,7 7,7.9 7,9V14H6V16H3V4H21V16M9,14V9H15V14H9Z" />
  </svg>
)
