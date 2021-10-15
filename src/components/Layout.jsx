import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
		<div className="min-h-screen bg-gray-900 text-white">
			<Navbar />
			<div className="container px-6 py-4 mx-auto">
				{children}
			</div>
		</div>
	);
}

export default Layout;