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
    <path d="M16.5,12C17.88,12 19,10.88 19,9.5C19,8.12 17.88,7 16.5,7C15.12,7 14,8.12 14,9.5C14,10.88 15.12,12 16.5,12M9,11C10.66,11 12,9.66 12,8C12,6.34 10.66,5 9,5C7.34,5 6,6.34 6,8C6,9.66 7.34,11 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" />
  </svg>
)
