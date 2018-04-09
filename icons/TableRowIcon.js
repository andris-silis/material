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
    <path d="M22,14C22,15.1 21.1,16 20,16H4C2.9,16 2,15.1 2,14V10C2,8.9 2.9,8 4,8H20C21.1,8 22,8.9 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z" />
  </svg>
)
