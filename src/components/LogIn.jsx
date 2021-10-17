import { Popover, Transition } from '@headlessui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, setUserList } from '../actions';

const LogIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.userList);

	const signIn = () => {
		if (username && password) {
			const adminInfo = {
				name: username,
				username,
				email: username.includes('@') ? username : 'random@mail.co.id',
				address: {},
				phone: '01234567',
				website: 'google.com',
				company: {},
			};
			dispatch(logIn(adminInfo));
			if (!userList.some(user => user.username === adminInfo.username)) {
				const tmpUserList = [
					...userList,
					{
						id: userList.length + 1,
						name: username,
						username,
						email: username.includes('@') ? username : 'random@mail.co.id',
						address: {},
						phone: '01234567',
						website: 'google.com',
						company: {},
					},
				];
				dispatch(setUserList(tmpUserList))
			}
		} else {
			alert("Username and Password can't be empty");
		}
	};
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button
						className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-green-700 p-1 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
					>
						<span>Log In</span>
					</Popover.Button>
					<Transition
						as="div"
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute z-10 w-72 left-0 p-2 mt-3 transform -translate-x-3/4 sm:px-0">
							<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="relative bg-white text-gray-800 p-4 space-y-2">
									<div>
										<label
											className="text-gray-700 dark:text-gray-200"
											for="username"
										>
											Username or Email
										</label>
										<input
											onChange={(e) => setUsername(e.target.value)}
											id="username"
											type="text"
											className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
										/>
									</div>
									<div>
										<label
											className="text-gray-700 dark:text-gray-200"
											for="username"
										>
											Password
										</label>
										<input
											onChange={(e) => setPassword(e.target.value)}
											id="password"
											type="password"
											className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
										/>
									</div>
									<button
										onClick={signIn}
										className="bg-green-500 mt-4 block text-center font-semibold cursor-pointer w-full p-1 rounded text-white"
									>
										Log In
									</button>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default LogIn;
