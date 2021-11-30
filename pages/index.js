import React from "react"
import Layout from "../components/layout"
import wallpaperImg from "../public/images/john-fowler-RsRTIofe0HE-unsplash (1).jpg"
import Image from "next/image"
import { motion } from "framer-motion"

let easing = [0.175, 0.85, 0.42, 0.96]
const imageVariants = {
	exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: easing,
		},
	},
}
function Home() {
	return <Layout>Hey</Layout>
}

export default Home
