import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import PostList from './views/PostList';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={HomePage} />
			<Route path="/posts" exact component={PostList} />
		</Router>
	);
};

export default App;
