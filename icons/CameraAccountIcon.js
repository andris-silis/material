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
    <path d="M4,5H7L9,3H15L17,5H20C21.1,5 22,5.9 22,7V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V7C2,5.9 2.9,5 4,5M16,17V16C16,14.67 13.33,14 12,14C10.67,14 8,14.67 8,16V17H16M12,9C10.9,9 10,9.9 10,11C10,12.1 10.9,13 12,13C13.1,13 14,12.1 14,11C14,9.9 13.1,9 12,9Z" />
  </svg>
)
