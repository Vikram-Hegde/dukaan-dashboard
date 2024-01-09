import HelpIcon from "@/assets/help.svg?react"
import SearchIcon from "@/assets/search.svg?react"
import AnnouncementIcon from "@/assets/announcement.svg?react"
import ChevronDownFilledIcon from "@/assets/chevron-down-filled.svg?react"
import ChevronDownIcon from "@/assets/chevron-down.svg?react"
import ChevronLeftIcon from "@/assets/chevron-left.svg?react"
import ChevronRightIcon from "@/assets/chevron-right.svg?react"
import SortIcon from "@/assets/sort.svg?react"
import DownloadIcon from "@/assets/download.svg?react"
import MenuIcon from "@/assets/menu.svg?react"

type DashboardProps = {
	handleToggle: (e: React.MouseEvent) => void
}

const Dashboard: React.FC<DashboardProps> = ({ handleToggle }) => {
	return (
		<section className="dashboard">
			<header className="header">
				<div className="header__heading">
					<MenuIcon className="header__menu-icon" onClick={handleToggle} />
					Payments
					<span className="header__help">
						<HelpIcon />
						<span>How it works?</span>
					</span>
				</div>
				<div className="header__search">
					<SearchIcon />
					<input type="search" placeholder="Search features, tutorials, etc." />
				</div>
				<div className="header__options">
					<button className="header__search-menu">
						<SearchIcon width="1rem" height="1rem" />
					</button>
					<button>
						<AnnouncementIcon />
					</button>
					<button>
						<ChevronDownFilledIcon />
					</button>
				</div>
			</header>
			<main className="main">
				<section className="overview">
					<div className="overview__header">
						<h3>Overview</h3>
						<div className="overview__timeline">
							Last Month
							<ChevronDownIcon width="1rem" height="1rem" />
						</div>
					</div>
					<div className="overview__items">
						<div className="overview__item">
							<div className="overview__label">Online Orders</div>
							<div className="overview__value">231</div>
						</div>
						<div className="overview__item">
							<div className="overview__label">Amount received</div>
							<div className="overview__value">₹23,92,312.19</div>
						</div>
					</div>
				</section>
				<section className="transactions">
					<h3 className="transactions__header">Transactions | This Month</h3>
					<div className="transactions__table">
						<div className="transactions__options">
							<div className="transactions__search">
								<SearchIcon />
								<input type="search" placeholder="Search by order ID..." />
							</div>
							<button className="transactions__sort">
								Sort <SortIcon />
							</button>
							<button className="transactions__download">
								<DownloadIcon />
							</button>
						</div>
						<div className="table__wrapper">
							<table>
								<tbody>
									<tr>
										<th>Order ID</th>
										<th>
											<div className="heading__wrapper">
												Order Date{" "}
												<ChevronDownFilledIcon width="0.5rem" height="0.5rem" />
											</div>
										</th>
										<th>Order amount</th>
										<th>
											<div className="heading__wrapper">
												Transaction fees{" "}
												<HelpIcon width="0.875rem" height="0.875rem" />
											</div>
										</th>
									</tr>
									{Array.from({ length: 19 }).map((_, index) => (
										<tr key={index}>
											<td>
												<a href="#">#281209</a>
											</td>
											<td>7 July, 2023</td>
											<td>₹1,278.23</td>
											<td>₹22</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="transactions__pagination">
							<button className="btn btn--outline">
								<ChevronLeftIcon /> Previous
							</button>
							<div className="transactions__pages">
								<button>1</button>
								<button>...</button>
								<button className="btn btn--active">10</button>
								<button>11</button>
								<button>12</button>
								<button>13</button>
								<button>14</button>
								<button>15</button>
								<button>16</button>
								<button>17</button>
								<button>18</button>
							</div>
							<button className="btn btn--outline">
								Next <ChevronRightIcon />
							</button>
						</div>
					</div>
				</section>
			</main>
		</section>
	)
}

export default Dashboard
