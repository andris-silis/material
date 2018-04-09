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
    <path d="M17,7H19C20.1,7 21,7.9 21,9V15C21,16.1 20.1,17 19,17H17C15.9,17 15,16.1 15,15V9C15,7.9 15.9,7 17,7M17,9V15H19V9H17M9,17H3V15L7,9H3V7H7C8.1,7 9,7.9 9,9C9,9.42 8.87,9.81 8.65,10.13L5.41,15H9V17M12,17C11.45,17 11,16.55 11,16C11,15.45 11.45,15 12,15C12.55,15 13,15.45 13,16C13,16.55 12.55,17 12,17Z" />
  </svg>
)
