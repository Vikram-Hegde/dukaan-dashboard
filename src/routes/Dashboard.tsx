import HelpIcon from "@/assets/help.svg?react"
import SearchIcon from "@/assets/search.svg?react"
import AnnouncementIcon from "@/assets/announcement.svg?react"
import ChevronDownFilledIcon from "@/assets/chevron-down-filled.svg?react"
import ChevronDownIcon from "@/assets/chevron-down.svg?react"
import ChevronLeftIcon from "@/assets/chevron-left.svg?react"
import ChevronRightIcon from "@/assets/chevron-right.svg?react"
import SortIcon from "@/assets/sort.svg?react"
import DownloadIcon from "@/assets/download.svg?react"

const Dashboard = () => {
	return (
		<>
			<header className="header">
				<div className="header__heading">
					<h3>Payments</h3>
					<span className="header__help">
						<HelpIcon />
						How it works?
					</span>
				</div>
				<div className="header__search">
					<div className="header__input-wrapper">
						<SearchIcon />
						<input type="text" placeholder="Search features, tutorials, etc." />
					</div>
				</div>
				<div className="header__options">
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
						Overview
						<div className="overview__timeline">
							Last Month
							<ChevronDownIcon />
						</div>
					</div>
					<div className="overview__items">
						<div className="overview__item">
							<div className="overview__label">Online Orders</div>
							<div className="overview__value">231</div>
						</div>
						<div className="overview__item">
							<div className="overview__label">Amount received</div>
							<div className="overview__value">₹ 23,92,312.19</div>
						</div>
					</div>
				</section>
				<section className="transactions">
					<h3 className="transactions__header">Transactions | This Month</h3>
					<div className="transactions__options">
						<div className="transactions__search">
							<SearchIcon />
							<input type="text" placeholder="Search by order ID..." />
						</div>
						<button>
							Sort <SortIcon />
						</button>
						<button>
							<DownloadIcon />
						</button>
					</div>
					<table>
						<tr>
							<th>Order ID</th>
							<th>
								Order Date <ChevronDownFilledIcon />
							</th>
							<th>Order amount</th>
							<th>
								Transaction fees <HelpIcon />
							</th>
						</tr>
						{Array.from({ length: 19 }).map((_, index) => (
							<tr key={index}>
								<td>
									<a href="#">#281209</a>
								</td>
								<td>7 July, 2023</td>
								<td>₹ 1,278.23</td>
								<td>₹ 22</td>
							</tr>
						))}
					</table>

					<div className="transactions__pagination">
						<button>
							<ChevronLeftIcon /> Previous
						</button>
						<div className="transactions__pages">
							<button>1</button>
							<button>...</button>
							<button>10</button>
							<button>11</button>
							<button>12</button>
							<button>13</button>
							<button>14</button>
							<button>15</button>
							<button>16</button>
							<button>17</button>
							<button>18</button>
						</div>
						<button>
							Next <ChevronRightIcon />
						</button>
					</div>
				</section>
			</main>
		</>
	)
}

export default Dashboard
