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
    <path d="M12,10C13.93,10 15.5,8.43 15.5,6.5C15.5,4.57 13.93,3 12,3C10.07,3 8.5,4.57 8.5,6.5C8.5,8.43 10.07,10 12,10M12,5C12.83,5 13.5,5.67 13.5,6.5C13.5,7.33 12.83,8 12,8C11.17,8 10.5,7.33 10.5,6.5C10.5,5.67 11.17,5 12,5M15,20C15,19.45 14.55,19 14,19H13V17H19V15.5C19,13.57 15.87,12 12,12C8.13,12 5,13.57 5,15.5V17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M7.61,15C8.39,14.53 9.89,14 12,14C14.11,14 15.61,14.53 16.39,15H7.61Z" />
  </svg>
)
