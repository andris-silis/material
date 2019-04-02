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
    <path d="M6,3H3V6C4.66,6 6,4.66 6,3M14,3H12C12,7.97 7.97,12 3,12V14C9.08,14 14,9.07 14,3M10,3H8C8,5.76 5.76,8 3,8V10C6.87,10 10,6.87 10,3M10,21H12C12,16.03 16.03,12 21,12V10C14.92,10 10,14.92 10,21M18,21H21V18C19.34,18 18,19.34 18,21M14,21H16C16,18.24 18.24,16 21,16V14C17.13,14 14,17.13 14,21Z" />
  </svg>
)
