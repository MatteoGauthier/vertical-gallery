import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Script from "next/script"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import App from "next/app"
import { render } from "react-dom"
import Layout from "../components/layout"
class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props
		return (
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</AnimateSharedLayout>
		)
	}
}

export default MyApp
