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
    <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M16.75,14.45C18.65,12.55 18.58,9.39 16.59,7.41C14.6,5.43 11.45,5.35 9.55,7.25C6.12,10.68 7.22,16.78 7.22,16.78C7.22,16.78 13.33,17.87 16.75,14.45M13.15,7.86L14.13,9.87L16.14,10.85L14.13,11.83L13.15,13.84L12.17,11.83L10.16,10.85L12.17,9.87L13.15,7.86Z" />
  </svg>
)
