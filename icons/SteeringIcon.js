import React from 'react'

const DEFAULT_SIZE = 24

export const SteeringIcon = ({
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
    <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.1,4 19.5,7.1 20,11H17C16.5,9.9 14.4,9 12,9C9.6,9 7.5,9.9 7,11H4C4.5,7.1 7.9,4 12,4M4,13H7C7.2,14.3 8.2,16.6 11,17V20C7.4,19.6 4.4,16.6 4,13M13,20V17C15.8,16.6 16.7,14.3 17,13H20C19.6,16.6 16.6,19.6 13,20Z" />
  </svg>
)