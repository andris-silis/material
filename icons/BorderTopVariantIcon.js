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
    <path d="M19,21H21V19H19M15,21H17V19H15M19,17H21V15H19M3,5H21V3H3M19,13H21V11H19M19,9H21V7H19M3,9H5V7H3M3,13H5V11H3M3,21H5V19H3M3,17H5V15H3M11,21H13V19H11M7,21H9V19H7V21Z" />
  </svg>
)
