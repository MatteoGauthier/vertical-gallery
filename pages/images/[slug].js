/* eslint-disable @next/next/no-img-element */
import React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../../components/layout"

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

export default function ImageSlugPage({ imageSrc }) {
	return (
		<Layout key={imageSrc}>
			{/* <div className="h-24 w-24 bg-red-400 z-20 absolute">heyr</div> */}

			<div className="fixed h-screen w-screen overflow-hidden z-[-1]">
				{/* <img src={'/images/'+ imageSrc} loading="lazy" className="absolute object-cover inset-0 w-full h-full" alt="" /> */}
				<Image
					src={require("../../public/images/" + imageSrc)}
					// width={1440}
					// height={1200}
					layout="fill"
					priority
					alt="img"
					objectFit="cover"
				/>
			</div>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const images = {
		1: "cristina-gottardi-CSpjU6hYo_0-unsplash.jpg",
		2: "adrian-infernus-GLf7bAwCdYg-unsplash (1).jpg",
		3: "john-fowler-RsRTIofe0HE-unsplash (1).jpg",
	}

	return {
		props: {
			imageSrc: images[params.slug],
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }, { params: { slug: "3" } }],
		fallback: false,
	}
}
