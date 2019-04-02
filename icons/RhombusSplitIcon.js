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
    <path d="M7.36,5.94L10.8,2.5C11.5,1.8 12.5,1.8 13.2,2.5L16.64,5.94L12,10.59L7.36,5.94M18.06,7.36L13.41,12L18.06,16.64L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8L18.06,7.36M5.94,16.64L10.59,12L5.94,7.36L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L5.94,16.64M12,13.41L7.36,18.06L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L16.64,18.06L12,13.41Z" />
  </svg>
)
