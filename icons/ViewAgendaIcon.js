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
    <path d="M20,3H3C2.45,3 2,3.45 2,4V10C2,10.55 2.45,11 3,11H20C20.55,11 21,10.55 21,10V4C21,3.45 20.55,3 20,3M20,13H3C2.45,13 2,13.45 2,14V20C2,20.55 2.45,21 3,21H20C20.55,21 21,20.55 21,20V14C21,13.45 20.55,13 20,13Z" />
  </svg>
)
