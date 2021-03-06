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
    <path d="M5,13L6.5,8.5H17.5L19,13M17.5,18C16.67,18 16,17.33 16,16.5C16,15.67 16.67,15 17.5,15C18.33,15 19,15.67 19,16.5C19,17.33 18.33,18 17.5,18M6.5,18C5.67,18 5,17.33 5,16.5C5,15.67 5.67,15 6.5,15C7.33,15 8,15.67 8,16.5C8,17.33 7.33,18 6.5,18M18.92,8C18.71,7.4 18.14,7 17.5,7H6.5C5.86,7 5.29,7.4 5.08,8L3,14V22C3,22.55 3.45,23 4,23H5C5.55,23 6,22.55 6,22V21H18V22C18,22.55 18.45,23 19,23H20C20.55,23 21,22.55 21,22V14M11,6V4H7L13,1V3H17L11,6Z" />
  </svg>
)
