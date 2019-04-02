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
    <path d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12C14.24,12 12,14.24 12,17C12,19.76 14.24,22 17,22C19.76,22 22,19.76 22,17C22,14.24 19.76,12 17,12M17,10C20.87,10 24,13.13 24,17C24,20.87 20.87,24 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4C11.21,4 13,5.79 13,8C13,10.21 11.21,12 9,12C6.79,12 5,10.21 5,8C5,5.79 6.79,4 9,4M9,5.9C7.84,5.9 6.9,6.84 6.9,8C6.9,9.16 7.84,10.1 9,10.1C10.16,10.1 11.1,9.16 11.1,8C11.1,6.84 10.16,5.9 9,5.9Z" />
  </svg>
)
