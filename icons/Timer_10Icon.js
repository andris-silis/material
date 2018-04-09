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
    <path d="M12.9,13.22C12.9,13.82 12.86,14.33 12.78,14.75C12.7,15.17 12.58,15.5 12.42,15.77C12.26,16.03 12.06,16.22 11.83,16.34C11.6,16.46 11.32,16.5 11,16.5C10.71,16.5 10.43,16.46 10.19,16.34C9.95,16.22 9.75,16.03 9.59,15.77C9.43,15.5 9.3,15.17 9.21,14.75C9.12,14.33 9.08,13.82 9.08,13.22V10.72C9.08,10.12 9.12,9.61 9.21,9.2C9.3,8.79 9.42,8.46 9.59,8.2C9.75,7.95 9.95,7.77 10.19,7.65C10.43,7.54 10.7,7.5 11,7.5C11.31,7.5 11.58,7.54 11.81,7.65C12.05,7.76 12.25,7.94 12.41,8.2C12.57,8.45 12.7,8.78 12.78,9.19C12.86,9.6 12.91,10.11 12.91,10.71V13.22M13.82,7.05C13.5,6.65 13.07,6.35 12.59,6.17C12.12,6 11.58,5.9 11,5.9C10.42,5.9 9.89,6 9.41,6.17C8.93,6.35 8.5,6.64 8.18,7.05C7.84,7.46 7.58,8 7.39,8.64C7.21,9.29 7.11,10.09 7.11,11.03V12.95C7.11,13.89 7.2,14.69 7.39,15.34C7.58,16 7.84,16.53 8.19,16.94C8.53,17.35 8.94,17.65 9.42,17.83C9.9,18 10.43,18.11 11,18.11C11.6,18.11 12.13,18 12.6,17.83C13.08,17.65 13.5,17.35 13.82,16.94C14.16,16.53 14.42,16 14.6,15.34C14.78,14.69 14.88,13.89 14.88,12.95V11.03C14.88,10.09 14.79,9.29 14.6,8.64C14.42,8 14.16,7.45 13.82,7.05M23.78,14.37C23.64,14.09 23.43,13.84 23.15,13.63C22.87,13.42 22.54,13.24 22.14,13.1C21.74,12.96 21.29,12.83 20.79,12.72C20.44,12.65 20.15,12.57 19.92,12.5C19.69,12.41 19.5,12.33 19.37,12.24C19.23,12.15 19.14,12.05 19.09,11.94C19.04,11.83 19,11.7 19,11.55C19,11.41 19.04,11.27 19.1,11.14C19.16,11 19.25,10.89 19.37,10.8C19.5,10.7 19.64,10.62 19.82,10.56C20,10.5 20.22,10.47 20.46,10.47C20.71,10.47 20.93,10.5 21.12,10.58C21.31,10.65 21.47,10.75 21.6,10.87C21.73,11 21.82,11.13 21.89,11.29C21.95,11.45 22,11.61 22,11.78H23.94C23.94,11.39 23.86,11.03 23.7,10.69C23.54,10.35 23.31,10.06 23,9.81C22.71,9.56 22.35,9.37 21.92,9.22C21.5,9.07 21,9 20.46,9C19.95,9 19.5,9.07 19.07,9.21C18.66,9.35 18.3,9.54 18,9.78C17.72,10 17.5,10.3 17.34,10.62C17.18,10.94 17.11,11.27 17.11,11.63C17.11,12 17.19,12.32 17.34,12.59C17.5,12.87 17.7,13.11 18,13.32C18.25,13.53 18.58,13.7 18.96,13.85C19.34,14 19.77,14.11 20.23,14.21C20.62,14.29 20.94,14.38 21.18,14.47C21.42,14.56 21.61,14.66 21.75,14.76C21.88,14.86 21.97,15 22,15.1C22.07,15.22 22.09,15.35 22.09,15.5C22.09,15.81 21.96,16.06 21.69,16.26C21.42,16.46 21.03,16.55 20.5,16.55C20.3,16.55 20.09,16.53 19.88,16.47C19.67,16.42 19.5,16.34 19.32,16.23C19.15,16.12 19,15.97 18.91,15.79C18.8,15.61 18.74,15.38 18.73,15.12H16.84C16.84,15.5 16.92,15.83 17.08,16.17C17.24,16.5 17.47,16.82 17.78,17.1C18.09,17.37 18.47,17.59 18.93,17.76C19.39,17.93 19.91,18 20.5,18C21.04,18 21.5,17.95 21.95,17.82C22.38,17.69 22.75,17.5 23.06,17.28C23.37,17.05 23.6,16.77 23.77,16.45C23.94,16.13 24,15.78 24,15.39C24,15 23.93,14.65 23.78,14.37M0,7.72V9.4L3,8.4V18H5V6H4.75L0,7.72Z" />
  </svg>
)
