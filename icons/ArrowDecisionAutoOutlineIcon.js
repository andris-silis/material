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
    <path d="M19,15V12C18.5,12 14.5,12.16 14.05,16.2C15.61,16.75 16.43,18.47 15.88,20.03C15.33,21.59 13.61,22.41 12.05,21.86C10.5,21.3 9.67,19.59 10.22,18.03C10.5,17.17 11.2,16.5 12.05,16.2C12.34,12.61 15.4,9.88 19,10V7L23,11L19,15M14,19C14,18.45 13.55,18 13,18C12.45,18 12,18.45 12,19C12,19.55 12.45,20 13,20C13.55,20 14,19.55 14,19M12,11.12C12.58,10.46 13.25,9.89 14,9.43V5H17L13,1L9,5H12V11.12M7.2,6H5.2L2,15H3.9L4.6,13H7.8L8.5,15H10.4L7.2,6M5.05,11.65L6.2,8L7.35,11.65H5.05Z" />
  </svg>
)
