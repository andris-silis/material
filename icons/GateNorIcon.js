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
    <path d="M2,4C5,10 5,14 2,20H5C9.4,20 13,17.7 16.6,13.7C17.15,14.5 18.04,15 19,15C20.66,15 22,13.66 22,12C22,10.34 20.66,9 19,9C18.04,9 17.15,9.5 16.6,10.3C13,6.3 9.4,4 5,4H2M5,6C8.8,6 12,8.1 15.3,12C12,15.9 8.8,18 5,18C6.5,14 6.5,10 5,6M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13C18.45,13 18,12.55 18,12C18,11.5 18.5,11 19,11Z" />
  </svg>
)
