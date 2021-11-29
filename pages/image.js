import wallpaperImg from "../public/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg"
import React from "react"
import Layout from "../components/layout"
import Image from "next/image"
import { motion } from "framer-motion"

let easing = [0.175, 0.85, 0.42, 0.96]
const imageVariants = {
	exit: { x: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
	enter: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: easing,
		},
	},
}
function ImagePage() {
	return (
		<motion.div variants={imageVariants} className=" w-screen h-screen relative" initial="exit" animate="enter" exit="exit">
			<Image src={wallpaperImg} layout="fill" alt="img" objectFit="cover" />
		</motion.div>
	)
}

export default ImagePage
