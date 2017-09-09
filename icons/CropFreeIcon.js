import React from 'react'

const DEFAULT_SIZE = 24

export const CropFreeIcon = ({
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
    <path d="M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5M3,5V9H5V5H9V3H5C3.9,3 3,3.9 3,5Z" />
  </svg>
)
