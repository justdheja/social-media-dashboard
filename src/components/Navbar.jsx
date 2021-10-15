import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logIn, logOut } from '../actions';

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
	const dispatch = useDispatch()
  
  return (
		<nav className="shadow bg-gray-800 text-white">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div>
						<Link
							className="text-2xl font-bold lg:text-3xl hover:text-gray-200"
							to="/"
						>
							SocDash
						</Link>
					</div>
					<div className="flex md:hidden">
						<button
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600"
						>
							<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
								<path
									fill-rule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div className="items-center md:flex">
					<div className="flex flex-col md:flex-row md:mx-6">
						<NavLink
							className="my-1 text-sm font-medium m-auto hover:text-green-500 md:mx-4 md:my-0"
							activeClassName="my-1 text-sm font-medium m-auto text-green-700 font-bold"
							exact
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							className="my-1 text-sm font-medium m-auto hover:text-green-500 md:mx-4 md:my-0"
							activeClassName="my-1 text-sm font-medium m-auto text-green-700 font-bold"
							exact
							to="/posts"
						>
							Posts
						</NavLink>
						{isLoggedIn ? (
							<button className="bg-green-800 p-1 rounded m-auto" onClick={() => dispatch(logOut())}>
								Log Out
							</button>
						) : (
							<button className="bg-green-800 p-1 rounded m-auto" onClick={() => dispatch(logIn())}>
								Log In
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
