import * as React from "react"

function DownloadIcon(props) {
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
        d="M16 2.24a.96.96 0 01.96.96v14.75l4.762-4.762a.96.96 0 111.356 1.357l-6.4 6.4a.96.96 0 01-1.356 0l-6.4-6.4a.96.96 0 111.356-1.357l4.762 4.762V3.2a.96.96 0 01.96-.96zM5.333 21.333A1.067 1.067 0 016.4 22.4v3.2c0 1.182.951 2.133 2.125 2.133h14.944A2.132 2.132 0 0025.6 25.6v-3.2a1.067 1.067 0 012.133 0v3.2a4.265 4.265 0 01-4.264 4.267H8.525A4.26 4.26 0 014.267 25.6v-3.2a1.067 1.067 0 011.066-1.067z"
        fill="#000"
      />
    </svg>
  )
}

export default DownloadIcon
