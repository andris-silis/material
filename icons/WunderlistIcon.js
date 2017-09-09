import React from 'react'

const DEFAULT_SIZE = 24

export const WunderlistIcon = ({
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
    <path d="M17,17.5L12,15L7,17.5V5H5V19H19V5H17V17.5M12,12.42L14.25,13.77L13.65,11.22L15.64,9.5L13,9.27L12,6.86L11,9.27L8.36,9.5L10.35,11.22L9.75,13.77L12,12.42M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z" />
  </svg>
)
