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
    <path d="M13,16.18C13.5,16.35 13.9,16.63 14.23,17H15V21H14.21C13.89,21.35 13.5,21.63 13,21.8C11.85,22.22 10.58,21.87 9.78,21H9V17H9.77C10.1,16.63 10.5,16.35 11,16.18V12H13V16.18M12,20C12.55,20 13,19.55 13,19C13,18.45 12.55,18 12,18C11.45,18 11,18.45 11,19C11,19.55 11.45,20 12,20M17,4H15V5H17V11H7V5H9V4H7V2H17V4M12,9C12.55,9 13,8.55 13,8C13,7.45 12.55,7 12,7C11.45,7 11,7.45 11,8C11,8.55 11.45,9 12,9Z" />
  </svg>
)
