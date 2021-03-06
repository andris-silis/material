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
    <path d="M9.8,8.9L7,23H9.1L10.9,15L13,17V23H15V15.5L12.9,13.5L13.5,10.5C14.63,11.81 16.29,12.73 18.15,12.95L16,23H17L20,9L19.04,8.8L18.58,11C16.86,10.85 15.44,9.89 14.7,8.6L13.7,7C13.5,6.65 13.2,6.37 12.84,6.2C12.5,6 12.08,5.96 11.68,6C11.28,6.09 10.92,6.27 10.63,6.55C10.34,6.83 10.14,7.19 10.06,7.58L9.8,8.9M7.08,6.92L9.4,7.38L8.4,12.46L6.08,12L7.08,6.92M13.5,5.5C14.6,5.5 15.5,4.6 15.5,3.5C15.5,2.4 14.6,1.5 13.5,1.5C12.4,1.5 11.5,2.4 11.5,3.5C11.5,4.6 12.4,5.5 13.5,5.5Z" />
  </svg>
)
