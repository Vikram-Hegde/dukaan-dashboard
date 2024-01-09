import "@/styles/App.scss"
import Sidebar from "@/components/Sidebar"
import Dashboard from "@/routes/Dashboard"
import { useEffect, useState } from "react"

function App() {
	const [navActive, setNavActive] = useState(false)
	document.body.classList.toggle("nav--active", navActive)

	const handleToggleNav = (e: React.MouseEvent) => {
		e.stopPropagation()
		setNavActive(true)
	}

	useEffect(() => {
		const handleNavClose = (e: MouseEvent) => {
			if (document.querySelector(".nav--active") && navActive) {
				const target = e.target as HTMLElement
				if (!target.closest(".nav")) {
					setNavActive(false)
				}
			}
		}
		document.addEventListener("click", handleNavClose)
		return () => {
			document.removeEventListener("click", handleNavClose)
		}
	}, [navActive])

	return (
		<>
			<Sidebar />
			<Dashboard handleToggle={handleToggleNav} />
		</>
	)
}

export default App
