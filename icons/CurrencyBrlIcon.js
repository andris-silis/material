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
    <path d="M12,15H14C14,16.08 15.37,17 17,17C18.63,17 20,16.08 20,15C20,13.9 18.96,13.5 16.76,12.97C14.64,12.44 12,11.78 12,9C12,7.21 13.47,5.69 15.5,5.18V3H18.5V5.18C20.53,5.69 22,7.21 22,9H20C20,7.92 18.63,7 17,7C15.37,7 14,7.92 14,9C14,10.1 15.04,10.5 17.24,11.03C19.36,11.56 22,12.22 22,15C22,16.79 20.53,18.31 18.5,18.82V21H15.5V18.82C13.47,18.31 12,16.79 12,15M2,3H5.5C8.54,3 11,5.46 11,8.5C11,10.69 9.71,12.59 7.86,13.47L11.64,21H9.4L5.88,14H5.5L4,14V21H2V3M5.5,12C7.43,12 9,10.43 9,8.5C9,6.57 7.43,5 5.5,5H4V12H5.5Z" />
  </svg>
)
