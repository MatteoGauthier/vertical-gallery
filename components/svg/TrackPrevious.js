import * as React from "react"

function TrackPrevious(props) {
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
        d="M4.16 5.866a1.173 1.173 0 112.346 0v9.67c.098-.201.258-.371.463-.48l19.2-10.133a1.067 1.067 0 011.564.944v20.266a1.067 1.067 0 01-1.564.944l-19.2-10.134a1.066 1.066 0 01-.463-.48v9.67a1.173 1.173 0 11-2.346 0V5.866zM9.752 16L25.6 24.364V7.636L9.752 16z"
        fill="#000"
      />
    </svg>
  )
}

export default TrackPrevious
