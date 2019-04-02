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
    <path d="M17.36,2.64L15.95,4.06C17.26,5.37 18,7.14 18,9C18,12.87 14.87,16 11,16C9.15,16 7.37,15.26 6.06,13.95L4.64,15.36C6.08,16.8 7.97,17.71 10,17.93V20H6V22H16V20H12V17.94C16.55,17.43 20,13.58 20,9C20,6.62 19.05,4.33 17.36,2.64M11,3.5C7.96,3.5 5.5,5.96 5.5,9C5.5,12.04 7.96,14.5 11,14.5C14.04,14.5 16.5,12.04 16.5,9C16.5,5.96 14.04,3.5 11,3.5M11,5.5C12.94,5.5 14.5,7.07 14.5,9C14.5,10.93 12.93,12.5 11,12.5C9.07,12.5 7.5,10.93 7.5,9C7.5,7.07 9.07,5.5 11,5.5Z" />
  </svg>
)
