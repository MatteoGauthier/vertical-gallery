import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import ApproveIcon from "../components/svg/ApproveIcon"
import RefuseIcon from "../components/svg/RefuseIcon"
import DownloadIcon from "../components/svg/DownloadIcon"
import TrackPrevious from "../components/svg/TrackPrevious"
import TrackNext from "../components/svg/TrackNext"
import { motion, AnimatePresence } from "framer-motion"
import PageTransition from "./PageTransition"
import { useRouter } from "next/router"

// export const getStaticProps = async (ctx) => {
// 	return {
// 		props: {
// 			data: null,
// 		},
// 	}
// }

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

export default function Layout({ children, routeChange }) {
	const router = useRouter()
	console.log(router)
	return (
		<div className="fixed font-space-grotesk w-full h-full inset-0">
			<div className="relative w-full h-full">
				<div className=" absolute w-full h-full flex items-end pb-12 justify-center z-10">
					<div className="bg-white max-w-[640px] w-full elm-bar flex justify-between items-center px-[17px] py-[15px]">
						<div className="flex space-x-4">
							<Link href={`/images/${Number(router.query.slug) -1}`}>
								<a className="bar-button">
									<RefuseIcon />
								</a>
							</Link>
							<Link href={`/images/${Number(router.query.slug) + 1}`}>
								<a className="bar-button">
									<ApproveIcon />
								</a>
							</Link>
						</div>
						<h2 className="text-[#B0B0B0]">
							by <span className="font-medium text-[#6C6C6C]">Adrian Infernus</span>
						</h2>
						<Link href="/">
							<a className="bar-button space-x-2.5">
								<span className="ml-1">Download</span>
								<DownloadIcon />
							</a>
						</Link>
					</div>
				</div>

				<PageTransition routeKey={router.asPath}>
					<div>{children}</div>
				</PageTransition>
			</div>
		</div>
	)
}
