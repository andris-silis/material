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
    <path d="M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.2 19.31,8.89L22.41,12L21,13.39L17.89,10.31C17.2,10.75 16.38,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4C14.12,4 13,5.12 13,6.5C13,7.88 14.12,9 15.5,9C16.88,9 18,7.88 18,6.5C18,5.12 16.88,4 15.5,4M4,4H9.5C9.19,4.79 9,5.64 9,6.5C9,10.09 11.91,13 15.5,13C16.18,13 16.83,12.89 17.46,12.69L20,15.23V16C20,17.1 19.1,18 18,18H13.9L10.2,21.71C10,21.89 9.76,22 9.5,22H9C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V6C2,4.9 2.9,4 4,4Z" />
  </svg>
)
