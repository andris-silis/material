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
    <path d="M20,5H21.67C22.4,5 23,5.6 23,6.33V19.67C23,20.4 22.4,21 21.67,21H14.33C13.6,21 13,20.4 13,19.67V16.75H7.75C5.75,16.75 5,19 3,20C1,20 -0.5,17 3.5,8.5H3.75L4.19,7.67C4.19,7.67 7,6 8.33,7.23H13V6.33C13,5.6 13.6,5 14.33,5H16V3H20V5M21,7H15V19H21V7M15.5,14L18.5,7.5V12H20.5L17.5,18.5V14H15.5M11,8C10.45,8 10,8.45 10,9C10,9.55 10.45,10 11,10C11.55,10 12,9.55 12,9C12,8.45 11.55,8 11,8Z" />
  </svg>
)
