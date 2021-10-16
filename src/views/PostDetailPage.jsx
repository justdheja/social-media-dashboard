import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { setCommentList } from '../actions';
import CommentCard from '../components/CommentCard';
import Layout from '../components/Layout';

const PostDetailPage = () => {
	const { userId, postId } = useRouteMatch().params;
	const dispatch = useDispatch();
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
		if (adminComment) {
			setAdminComment('');
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
		} else {
			alert("can't post empty comment");
		}
	};

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
					<CommentCard comment={comment} key={comment.id} />
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
						<button
							onClick={postComment}
							className="rounded-3xl text-sm font-semibold bg-green-600 p-2"
						>
							post
						</button>
					</div>
				) : null}
			</div>
		</Layout>
	);
};

export default PostDetailPage;
