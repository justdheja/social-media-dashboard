import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import AlbumPage from './views/AlbumPage';
import UsersPage from './views/UsersPage';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getPost, setUserList } from './actions';

const App = () => {
	const dispatch = useDispatch();
	axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
		dispatch(setUserList(res.data));
	});
	axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then((res) => dispatch(getPost(res.data)));
	return (
		<Router>
			<Route path="/" exact component={HomePage} />
			<Route path="/album" exact component={AlbumPage} />
			<Route path="/users" exact component={UsersPage} />
		</Router>
	);
};

export default App;
