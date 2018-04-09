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
    <path d="M16.5,15.5H22V17H16.5V18.75L14,16.25L16.5,13.75V15.5M19.5,19.75V18L22,20.5L19.5,23V21.25H14V19.75H19.5M9.5,5.5C8.4,5.5 7.5,4.6 7.5,3.5C7.5,2.4 8.4,1.5 9.5,1.5C10.6,1.5 11.5,2.4 11.5,3.5C11.5,4.6 10.6,5.5 9.5,5.5M5.75,8.9L4,9.65V13H2V8.3L7.25,6.15C7.5,6.05 7.75,6 8,6C8.7,6 9.35,6.35 9.7,6.95L10.65,8.55C11.55,10 13.15,11 15,11V13C12.8,13 10.85,12 9.55,10.4L8.95,13.4L11,15.45V23H9V17L6.85,15L5.1,23H3L5.75,8.9Z" />
  </svg>
)
