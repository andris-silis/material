import React from 'react'

const DEFAULT_SIZE = 24

export const TrackpadIcon = ({
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
    <path d="M4,3H20C21.1,3 22,3.9 22,5V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z" />
  </svg>
)
