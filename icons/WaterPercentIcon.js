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
    <path d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20C15.31,20 18,17.31 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10C10.44,10 11,10.56 11,11.25C11,11.94 10.44,12.5 9.75,12.5C9.06,12.5 8.5,11.94 8.5,11.25C8.5,10.56 9.06,10 9.75,10M14.25,14.5C14.94,14.5 15.5,15.06 15.5,15.75C15.5,16.44 14.94,17 14.25,17C13.56,17 13,16.44 13,15.75C13,15.06 13.56,14.5 14.25,14.5Z" />
  </svg>
)
