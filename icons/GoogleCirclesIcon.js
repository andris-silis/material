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
    <path d="M16.66,15H17C18,15 19,14.8 19.87,14.46C19.17,18.73 15.47,22 11,22C6,22 2,17.97 2,13C2,8.53 5.27,4.83 9.54,4.13C9.2,5 9,6 9,7V7.34C6.68,8.16 5,10.38 5,13C5,16.31 7.69,19 11,19C13.62,19 15.84,17.32 16.66,15M17,10C18.66,10 20,8.66 20,7C20,5.34 18.66,4 17,4C15.34,4 14,5.34 14,7C14,8.66 15.34,10 17,10M17,1C20.31,1 23,3.69 23,7C23,10.31 20.31,13 17,13C13.69,13 11,10.31 11,7C11,3.68 13.69,1 17,1Z" />
  </svg>
)
