import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentList, setPostList } from '../actions';
import CommentCard from './CommentCard';

const AdminPostCard = ({ post, profile }) => {
	const dispatch = useDispatch();
	const [comments, setComments] = useState([]);
	const [adminComment, setAdminComment] = useState('');

	const postList = useSelector((state) => state.postList);
	const commentList = useSelector((state) => state.commentList);

  useEffect(() => {
		setComments(commentList.filter((comment) => comment.postId === post.id))
	}, [commentList, post.id, postList]);
  
  const postComment = () => {
		if (adminComment) {
			setAdminComment('');
			const tmpCommentList = [
				...commentList,
				{
					postId: post.id,
					id: commentList.length + 1,
					name: profile.username,
					email: profile.email,
					body: adminComment,
				},
			];
			dispatch(setCommentList(tmpCommentList));
		} else {
			alert("can't post empty comment");
		}
	};

  const deletePost = (id) => {
    const newPostList = postList.filter(post => post.id !== id)
    const newCommentList = commentList.filter(comment => comment.postId !== id)
    dispatch(setPostList(newPostList))
    dispatch(setCommentList(newCommentList))
  }

  return (
		<div className="my-2 bg-gray-700 p-2 rounded">
			<div className="flex justify-between">
				<h2 className="text-5xl font-bold">{post.title}</h2>
				<div className="flex">
					<button
						onClick={() => deletePost(post.id)}
						className="p-1 bg-red-700 rounded"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
			<p className="text-lg my-2">{post.body}</p>
			<div className="p-2 bg-gray-800 rounded">
				<h4 className="font-semibold my-2">Comments ({comments.length})</h4>
				{comments.map((comment) => (
					<CommentCard comment={comment} key={comment.id} />
				))}
				{profile ? (
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
		</div>
	);
}

export default AdminPostCard;