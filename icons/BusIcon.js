import React from 'react'

const DEFAULT_SIZE = 24

export const BusIcon = ({
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
    <path d="M18,11H6V6H18M16.5,17C15.67,17 15,16.33 15,15.5C15,14.67 15.67,14 16.5,14C17.33,14 18,14.67 18,15.5C18,16.33 17.33,17 16.5,17M7.5,17C6.67,17 6,16.33 6,15.5C6,14.67 6.67,14 7.5,14C8.33,14 9,14.67 9,15.5C9,16.33 8.33,17 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20C5,20.55 5.45,21 6,21H7C7.55,21 8,20.55 8,20V19H16V20C16,20.55 16.45,21 17,21H18C18.55,21 19,20.55 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z" />
  </svg>
)