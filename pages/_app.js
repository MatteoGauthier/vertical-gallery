import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Script from "next/script"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import App from "next/app"
import { render } from "react-dom"
import Layout from "../components/layout"
class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props
		return (
			<Layout>
				<Script src="../helpers/smooth-corner.js" id="paint" />
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		)
	}
}

export default MyApp
