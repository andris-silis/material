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
    <path d="M6,4C4.89,4 4,4.89 4,6V14C4,15.1 4.9,16 6,16H11V18H10C9.45,18 9,18.45 9,19H2V21H9C9,21.55 9.45,22 10,22H14C14.55,22 15,21.55 15,21H22V19H15C15,18.45 14.55,18 14,18H13V16H18C19.1,16 20,15.1 20,14V8C20,6.9 19.1,6 18,6H12L10,4H6M9,8C10.31,8 11.42,8.83 11.83,10H17V12H16V14H14V12H11.83C11.42,13.17 10.31,14 9,14C7.34,14 6,12.66 6,11C6,9.34 7.34,8 9,8M9,10C8.45,10 8,10.45 8,11C8,11.56 8.45,12 9,12C9.55,12 10,11.55 10,11C10,10.45 9.55,10 9,10Z" />
  </svg>
)
