import ProfileImg from "@/assets/profile.png"
import ChevronDownIcon from "@/assets/chevron-down.svg?react"
import WalletIcon from "@/assets/wallet.svg?react"

const navItems = [
	"Home",
	"Orders",
	"Products",
	"Delivery",
	"Marketing",
	"Analytics",
	"Payments",
	"Tools",
	"Discounts",
	"Audience",
	"Appearance",
	"Plugins",
]

const Sidebar = () => {
	return (
		<nav className="nav">
			<div className="nav__profile">
				<img src={ProfileImg} alt="profile image" />
				<div className="nav__profile-name">
					<h3>Nishyan</h3>
					<a href="#">Visit Store</a>
					<ChevronDownIcon />
				</div>
			</div>
			<ul className="nav__items">
				{navItems.map((item, index) => (
					<li className="nav__item" key={index}>
						<img src={`/icons/NavIcon-${index}.svg`} />
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
			<div className="nav__credits">
				<div className="icon-wrapper">
					<WalletIcon />
				</div>
				<div className="nav__credit-points">
					Available credits
					<div>222.10</div>
				</div>
			</div>
		</nav>
	)
}

export default Sidebar
