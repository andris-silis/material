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
    <path d="M12,5C12.74,5 13.47,5.1 14.15,5.29L15.78,2.46C16.06,2 16.67,1.82 17.15,2.1C17.63,2.37 17.79,3 17.5,3.46L16,6.07C17.22,6.78 18.23,7.79 18.93,9H5.07C5.77,7.79 6.78,6.78 8,6.07L6.5,3.46C6.21,3 6.37,2.37 6.85,2.1C7.33,1.82 7.94,2 8.22,2.46L9.85,5.29C10.53,5.1 11.26,5 12,5M20,13C20,17.17 16.82,20.59 12.75,20.97V10.5H19.6C19.86,11.29 20,12.13 20,13M4,13C4,12.13 4.14,11.29 4.4,10.5H11.25V20.97C7.18,20.59 4,17.17 4,13Z" />
  </svg>
)
