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
    <path d="M16,2C14.95,2 13.91,2.27 13,2.81C12.64,3 12.3,3.26 12,3.54C11.7,3.26 11.36,3 11,2.81C10.09,2.27 9.05,2 8,2C4.69,2 2,4.69 2,8C2,11.31 4.69,14 8,14V12C5.79,12 4,10.21 4,8C4,5.79 5.79,4 8,4C9,4 10,4.39 10.75,5.1C10.84,5.18 10.92,5.27 11,5.36V22H13V5.36C13.08,5.27 13.16,5.18 13.25,5.1C14.85,3.58 17.38,3.64 18.91,5.25C20.43,6.85 20.36,9.38 18.76,10.9C18,11.61 17.03,12 16,12V14C19.31,14 22,11.31 22,8C22,4.69 19.31,2 16,2Z" />
  </svg>
)
