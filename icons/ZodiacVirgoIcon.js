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
    <path d="M18.5,19.13C20,17.77 20,15.18 20,14C20,11.79 18.21,10 16,10C15.3,10 14.6,10.2 14,10.56V6C14,4.34 12.66,3 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5C3.55,5 4,5.45 4,6V16H6V6C6,5.45 6.45,5 7,5C7.55,5 8,5.45 8,6V16H10V6C10,5.45 10.45,5 11,5C11.55,5 12,5.45 12,6V14C12,15.18 12,17.77 13.5,19.13C12.72,19.54 11.88,19.84 11,20V22C12.29,22 14.84,20.74 16,20.13C17.16,20.74 19.71,22 21,22V20C20.12,19.84 19.28,19.54 18.5,19.13M16,12C17.1,12 18,12.9 18,14C18,16.92 17.46,18 16,18C14.54,18 14,16.92 14,14C14,12.9 14.9,12 16,12Z" />
  </svg>
)
