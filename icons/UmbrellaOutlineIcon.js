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
    <path d="M12,4C8.9,4 6.18,6.03 5.3,9H18.7C17.82,6.04 15.09,4 12,4M12,2C16.97,2 21,6.03 21,11H13V19C13,20.66 11.66,22 10,22C8.34,22 7,20.66 7,19V18H9V19C9,19.55 9.45,20 10,20C10.55,20 11,19.55 11,19V11H3C3,6.03 7.03,2 12,2Z" />
  </svg>
)
