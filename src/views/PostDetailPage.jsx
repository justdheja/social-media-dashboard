import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { setCommentList } from '../actions';
import Layout from '../components/Layout';

const PostDetailPage = () => {
	const { userId, postId } = useRouteMatch().params;
	const dispatch = useDispatch()
	const [profile, setProfile] = useState({});
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [adminComment, setAdminComment] = useState('');

	const userList = useSelector((state) => state.userList);
	const postList = useSelector((state) => state.postList);
	const commentList = useSelector((state) => state.commentList);
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	useEffect(() => {
		userList.map((user) =>
			user.id === parseInt(userId) ? setProfile(user) : ''
		);
		postList.map((post) => (post.id === parseInt(postId) ? setPost(post) : ''));
		setComments(
			commentList.filter((comment) => comment.postId === parseInt(postId))
		);
	}, [commentList, postId, postList, userId, userList]);

	const postComment = () => {
		setAdminComment('')
		const tmpCommentList = [
			...commentList,
			{
				postId: parseInt(postId),
				id: commentList.length + 1,
				name: isLoggedIn.AdminInfo.email,
				email: isLoggedIn.AdminInfo.email,
				body: adminComment,
			},
		];
		dispatch(setCommentList(tmpCommentList));
	}

	return (
		<Layout>
			<h5 className="text-sm">
				<Link to={'/users/' + userId} className="underline">
					{profile.username}
				</Link>
				's post
			</h5>
			<h2 className="text-5xl font-bold">{post.title}</h2>
			<p className="text-lg my-2">{post.body}</p>
			<div className="p-2 bg-gray-800 rounded">
				<h4 className="font-semibold">Comments ({comments.length})</h4>
				{comments.map((comment) => (
					<div className="flex space-x-1 items-start my-4 justify-between">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 flex-grow-0"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
								clipRule="evenodd"
							/>
						</svg>
						<div className="bg-gray-600 rounded-2xl text-left p-2 w-full">
							<h5 className="font-semibold text-sm">{comment.email}</h5>
							<p>{comment.body}</p>
						</div>
					</div>
				))}
				{isLoggedIn.isLogIn ? (
					<div className="flex space-x-3 mb-2">
						<input
							type="text"
							name="comment"
							id="comment"
							className="rounded-3xl bg-gray-600 p-1 px-4 w-full"
							placeholder="write a comment..."
							value={adminComment}
							onChange={(e) => setAdminComment(e.target.value)}
						/>
						<button onClick={postComment} className="rounded-3xl text-sm font-semibold bg-green-600 p-2">
							post
						</button>
					</div>
				) : null}
			</div>
		</Layout>
	);
};

export default PostDetailPage;
