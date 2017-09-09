import React from 'react'

const DEFAULT_SIZE = 24

export const WiiuIcon = ({
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
    <path d="M2,15.96C2,18.19 3.54,19.5 5.79,19.5H18.57C20.47,19.5 22,18.2 22,16.32V6.97C22,5.83 21.15,4.6 20.11,4.6H17.15V12.3C17.15,18.14 6.97,18.09 6.97,12.41V4.5H4.72C3.26,4.5 2,5.41 2,6.85V15.96M9.34,11.23C9.34,15.74 14.66,15.09 14.66,11.94V4.5H9.34V11.23Z" />
  </svg>
)