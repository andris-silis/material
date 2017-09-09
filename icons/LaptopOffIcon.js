import React from 'react'

const DEFAULT_SIZE = 24

export const LaptopOffIcon = ({
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
    <path d="M1,4.27L2.28,3L20,20.72L18.73,22L16.73,20H0V18H4C2.89,18 2,17.1 2,16V6C2,5.78 2.04,5.57 2.1,5.37L1,4.27M4,16H12.73L4,7.27V16M20,16V6H7.82L5.82,4H20C21.1,4 22,4.9 22,6V16C22,17.1 21.1,18 20,18H24V20H21.82L17.82,16H20Z" />
  </svg>
)
