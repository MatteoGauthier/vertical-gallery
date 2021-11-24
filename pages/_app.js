import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Script from "next/script"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }) {
	return (
		<AnimateSharedLayout type="crossfade">
			<Script src="../helpers/smooth-corner.js" id="paint" />
			<AnimatePresence>
				<Component {...pageProps} />
			</AnimatePresence>
		</AnimateSharedLayout>
	)
}

export default MyApp
