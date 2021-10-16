/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import AlbumPage from './views/AlbumPage';
import UsersPage from './views/UsersPage';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAlbumList, setPhotoList, setPostList, setUserList } from './actions';
import UserDetailPage from './views/UserDetailPage';
import AlbumDetailPage from './views/AlbumDetailPage';

const App = () => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch();
	useEffect(async () => {
		setLoading(true)
		
		await axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => dispatch(setUserList(res.data)));

		await axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => dispatch(setPostList(res.data)))
			.catch((err) => console.log(err));

		await axios.get('https://jsonplaceholder.typicode.com/albums')
			.then((res) => dispatch(setAlbumList(res.data)))
			.catch(err => console.log(err))

		await axios.get('https://jsonplaceholder.typicode.com/photos')
			.then(res => dispatch(setPhotoList(res.data)))
			.catch(err => console.log(err))

		setLoading(false)
	}, [])
	
	{
		if (!loading) {
			return (
				<Router>
					<Route path="/" exact component={HomePage} />
					<Route path="/album" exact component={AlbumPage} />
					<Route path="/users" exact component={UsersPage} />
					<Route path="/users/:id" exact component={UserDetailPage} />
					<Route path="/users/:userId/albums/:albumId" exact component={AlbumDetailPage} />
				</Router>
			);
		} else {
			return (
				<div className="min-h-screen bg-gray-800 text-white flex justify-center items-center">
					<div className="font-semibold animate-bounce">Please Wait...</div>
				</div>
			);
		}
	}
};

export default App;
