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
    <path d="M19.61,14.86C19.61,16.68 18.3,18.25 16.5,18.55C16.29,18.59 16.07,18.62 15.84,18.61C15.76,18.61 15.73,18.64 15.71,18.71C15.35,19.74 14.64,20.35 13.57,20.5C12.86,20.6 12.22,20.41 11.65,19.97C11.57,19.9 11.5,19.9 11.44,19.96C10.78,20.43 10.04,20.64 9.23,20.59C7.66,20.5 6.33,19.29 6.08,17.74C6.06,17.63 6.04,17.5 6.04,17.41C6.04,17.32 6,17.29 5.92,17.27C5.44,17.18 5,17 4.63,16.68C3.92,16.13 3.5,15.41 3.4,14.5C3.29,13.5 3.61,12.62 4.32,11.89C4.38,11.83 4.38,11.79 4.34,11.72C4.07,11.24 3.94,10.72 3.96,10.17C4,8.79 4.97,7.65 6.31,7.37C6.46,7.33 6.54,7.27 6.61,7.13C7.27,5.71 8.37,4.85 9.91,4.56C11,4.36 12,4.58 12.94,5.13C13,5.18 13.08,5.18 13.17,5.16C14.67,4.72 16,5.04 17.12,6.11C17.78,6.74 18.15,7.54 18.26,8.46C18.28,8.66 18.29,8.86 18.28,9.06C18.27,9.14 18.29,9.17 18.37,9.19C19.04,9.44 19.5,9.91 19.71,10.6C19.96,11.45 19.75,12.21 19.11,12.83C19.05,12.89 19.07,12.92 19.1,12.97C19.44,13.56 19.61,14.18 19.61,14.86M12.93,14.57C12.93,15.34 13.43,16 14.14,16.26C14.5,16.37 14.85,16.43 15.22,16.45C15.5,16.46 15.75,16.44 16,16.32C16.19,16.22 16.28,16.06 16.27,15.85C16.26,15.64 16.16,15.5 15.96,15.4C15.89,15.37 15.82,15.34 15.74,15.33C15.5,15.29 15.3,15.26 15.07,15.21C14.71,15.14 14.55,14.95 14.55,14.57C14.54,14.24 14.63,13.93 14.73,13.63C14.92,13.07 15.17,12.53 15.41,12C15.64,11.47 15.88,10.95 16.04,10.4C16.13,10.1 16.18,9.8 16.09,9.5C15.97,9 15.69,8.7 15.2,8.61C14.75,8.5 14.3,8.5 13.9,8.78C13.76,8.87 13.63,8.85 13.5,8.74C13.43,8.67 13.34,8.58 13.26,8.5C12.84,8.12 12.3,8.1 11.85,8.45C11.67,8.59 11.5,8.76 11.33,8.89C11.16,9 11,9.03 10.79,8.92C10.6,8.83 10.42,8.74 10.23,8.65C10.03,8.57 9.85,8.46 9.63,8.44C8.95,8.38 8.24,8.79 7.94,9.41C7.8,9.68 7.69,9.96 7.59,10.25C7.11,11.57 6.72,12.91 6.32,14.26C6.14,14.86 6.35,15.45 6.86,15.77C7.26,16 7.69,16.09 8.14,15.95C8.5,15.84 8.71,15.55 8.85,15.22C9.31,14.13 9.73,13 10.17,11.91C10.29,11.61 10.41,11.3 10.54,11C10.67,10.7 11.04,10.6 11.26,10.8C11.4,10.92 11.44,11.09 11.42,11.26C11.41,11.45 11.34,11.62 11.27,11.79C11,12.5 10.69,13.24 10.4,13.97C10.34,14.11 10.28,14.26 10.25,14.42C10.21,14.69 10.31,14.93 10.54,15C10.76,15.12 11,15.14 11.23,15.05C11.5,14.95 11.67,14.74 11.79,14.5C12.22,13.65 12.65,12.8 13.08,11.95C13.28,11.56 13.5,11.17 13.68,10.78C13.76,10.64 13.85,10.5 14,10.41C14.12,10.33 14.25,10.33 14.38,10.4C14.5,10.47 14.5,10.6 14.5,10.73C14.5,10.8 14.5,10.87 14.47,10.93C14.41,11.07 14.36,11.2 14.3,11.33C13.94,12.09 13.57,12.84 13.22,13.59C13.07,13.91 12.91,14.23 12.93,14.57M17.96,20.12C17.96,19.62 17.54,19.2 17.04,19.2C16.5,19.2 16.1,19.61 16.1,20.12C16.1,20.63 16.52,21.05 17.03,21.05C17.54,21.05 17.96,20.63 17.96,20.12M2.38,12.46C2.86,12.46 3.27,12.05 3.27,11.57C3.27,11.09 2.87,10.69 2.39,10.69C1.89,10.69 1.5,11.08 1.5,11.57C1.5,12.06 1.89,12.46 2.38,12.46M13.26,2.55C12.77,2.55 12.37,2.94 12.37,3.42C12.37,3.91 12.77,4.3 13.25,4.3C13.74,4.3 14.13,3.92 14.13,3.43C14.13,2.95 13.74,2.55 13.26,2.55M20.45,8.03C20.45,7.63 20.11,7.29 19.71,7.29C19.3,7.28 18.95,7.63 18.95,8.04C18.95,8.45 19.28,8.78 19.7,8.78C20.12,8.78 20.46,8.45 20.45,8.03M5.04,5.89C5.04,6.27 5.34,6.56 5.71,6.56C6.09,6.56 6.39,6.26 6.38,5.88C6.38,5.5 6.09,5.22 5.72,5.22C5.33,5.22 5.04,5.5 5.04,5.89M12.06,21.44C12.06,21.12 11.81,20.86 11.5,20.86C11.16,20.86 10.91,21.11 10.91,21.44C10.91,21.75 11.16,22 11.5,22C11.8,22 12.06,21.75 12.06,21.44M21,12.5C20.71,12.5 20.45,12.78 20.45,13.08C20.45,13.38 20.7,13.63 21,13.63C21.33,13.63 21.57,13.4 21.57,13.08C21.57,12.77 21.33,12.5 21,12.5M7.62,2C7.35,2 7.14,2.2 7.14,2.47C7.14,2.73 7.35,2.94 7.62,2.94C7.88,2.94 8.09,2.73 8.09,2.47C8.09,2.2 7.89,2 7.62,2M22.08,10C21.86,10 21.67,10.17 21.66,10.4C21.66,10.63 21.85,10.82 22.08,10.82C22.32,10.82 22.5,10.64 22.5,10.41C22.5,10.17 22.32,10 22.08,10M5.5,18.26C5.5,18.04 5.29,17.85 5.06,17.84C4.84,17.84 4.65,18.03 4.65,18.27C4.65,18.5 4.84,18.68 5.07,18.68C5.3,18.68 5.5,18.5 5.5,18.26Z" />
  </svg>
)
