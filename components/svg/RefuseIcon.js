import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.135 8.602A1.227 1.227 0 1023.4 6.865l-7.4 7.4-7.398-7.4a1.228 1.228 0 10-1.737 1.737l7.4 7.398-7.4 7.398a1.228 1.228 0 101.737 1.737l7.398-7.4 7.4 7.4a1.227 1.227 0 001.735-1.737L17.735 16l7.4-7.398z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgComponent
