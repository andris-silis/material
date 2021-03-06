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
    <path d="M13,17C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11C9.9,7 9,7.9 9,9V11C9,12.1 9.9,13 11,13H13V15H9V17H13M13,11H11V9H13V11Z" />
  </svg>
)
