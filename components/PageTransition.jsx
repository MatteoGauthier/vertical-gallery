import { AnimatePresence, motion } from "framer-motion"

const variants = {
	enter: {
		opacity: 0,
    scale: 1.2
	},
	center: {
		// zIndex: 1,
		opacity: 1,
    scale: 1
	},
	exit: {
		// zIndex: 0,
		opacity: 0,
    scale: 0.8
	},
}

const PageTransition = ({ children, routeChange }) => (
	<motion.div
		variants={variants}
		key={routeChange}
		initial="enter"
		animate="center"
		exit="exit"
		transition={{ duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }}
	>
		{children}
	</motion.div>
)

export default PageTransition
