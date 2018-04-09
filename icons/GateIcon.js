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
    <path d="M9,5V10H7V6H5V10H3V8H1V20H3V18H5V20H7V18H9V20H11V18H13V20H15V18H17V20H19V18H21V20H23V8H21V10H19V6H17V10H15V5H13V10H11V5H9M3,12H5V16H3V12M7,12H9V16H7V12M11,12H13V16H11V12M15,12H17V16H15V12M19,12H21V16H19V12Z" />
  </svg>
)
