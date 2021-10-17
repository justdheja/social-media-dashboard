import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
			<div>
				<Navbar />
				<div className="container px-6 py-4 mx-auto h-full w-full items-start">
					{children}
				</div>
			</div>
			<footer className="text-center p-2 w-full bg-gray-700">
				<a href="http://github.com/justdheja/social-media-dashboard" target="_blank" className="underline text-blue-500" rel="noopener noreferrer">Github Repo</a>
			</footer>
		</div>
	);
}

export default Layout;