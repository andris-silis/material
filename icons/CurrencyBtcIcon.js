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
    <path d="M6,4H8V2H10V4H12V2H14V4.03C16.25,4.28 18,6.18 18,8.5C18,9.8 17.45,11 16.56,11.8C17.73,12.61 18.5,13.97 18.5,15.5C18.5,18 16.5,20 14,20V22H12V20H10V22H8V20H6L6.5,18H8V6H6V4M10,13V18H14C15.38,18 16.5,16.88 16.5,15.5C16.5,14.12 15.38,13 14,13H10M10,6V11H13.5C14.88,11 16,9.88 16,8.5C16,7.12 14.88,6 13.5,6H13.5L10,6Z" />
  </svg>
)
