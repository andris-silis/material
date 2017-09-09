import React from 'react'

const DEFAULT_SIZE = 24

export const CrownIcon = ({
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
    <path d="M5,16L3,5L8.5,12L12,5L15.5,12L21,5L19,16H5M19,19C19,19.55 18.55,20 18,20H6C5.45,20 5,19.55 5,19V18H19V19Z" />
  </svg>
)
