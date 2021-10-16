import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentList } from '../actions';
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

  return (
    <div className="my-2 bg-gray-700 p-2 rounded">
      <h2 className="text-5xl font-bold">{post.title}</h2>
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