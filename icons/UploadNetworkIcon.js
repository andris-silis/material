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
    <path d="M17,3C18.1,3 19,3.9 19,5V15C19,16.1 18.1,17 17,17H13V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H7C5.89,17 5,16.1 5,15V5C5,3.9 5.9,3 7,3H17M12,5.5L7.5,10H11V14H13V10H16.5L12,5.5Z" />
  </svg>
)
