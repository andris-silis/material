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
    <path d="M17,11H13V15.5C13,16.44 13.28,17 14.5,17H17V21C17,21 15.54,21.05 14.17,21.05C10.8,21.05 9.5,19 9.5,16.75V11H7V7C10.07,6.74 10.27,4.5 10.5,3H13V7H17" />
  </svg>
)
