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
    <path d="M20,4C20,2.9 19.1,2 18,2H10L4,8V20C4,21.1 4.9,22 6,22H18C19.11,22 20,21.1 20,20V4M9,19H7V17H9V19M17,19H15V17H17V19M9,15H7V11H9V15M13,19H11V15H13V19M13,13H11V11H13V13M17,15H15V11H17V15Z" />
  </svg>
)
