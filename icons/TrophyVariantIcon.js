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
    <path d="M20.2,4H20H17V2H7V4H4.5H3.8H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H20.2M4,11V6H7V8V11C5.6,11 4.4,11 4,11M20,11C19.6,11 18.4,11 17,11V6H18H20V11Z" />
  </svg>
)
