import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Script from "next/script"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import App from "next/app"
import { render } from "react-dom"
import Layout from "../components/layout"

const variants = {
	enter: {
		opacity: 0,
		scale: 1.2,
	},
	center: {
		// zIndex: 1,
		opacity: 1,
		scale: 1,
	},
	exit: {
		// zIndex: 0,
		opacity: 0,
		scale: 0.8,
	},
}
class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props
		console.log(router)
		return <Component {...pageProps} />
		// return (
		// 	<AnimatePresence exitBeforeEnter>
		// 		<motion.div
		// 			variants={variants}
		// 			key={router.asPath}
		// 			initial="enter"
		// 			animate="center"
		// 			exit="exit"
		// 			style={{ height: "100%" }}
		// 			transition={{ duration: 3, ease: [0.175, 0.85, 0.42, 0.96] }}
		// 		>
		// 			<Component {...pageProps} />
		// 		</motion.div>
		// 	</AnimatePresence>
		// )
	}
}

export default MyApp
