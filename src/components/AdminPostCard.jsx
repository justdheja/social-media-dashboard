import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentList, setPostList } from '../actions';
import CommentCard from './CommentCard';

const AdminPostCard = ({ post, profile }) => {
	const dispatch = useDispatch();
	const [comments, setComments] = useState([]);
	const [adminComment, setAdminComment] = useState('');
	const [isEdit, setIsEdit] = useState(false);
	const [editTitleValue, setEditTitleValue] = useState('');
	const [editBodyValue, setEditBodyValue] = useState('');

	const postList = useSelector((state) => state.postList);
	const commentList = useSelector((state) => state.commentList);

	useEffect(() => {
		setComments(commentList.filter((comment) => comment.postId === post.id));
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
		const newPostList = postList.filter((post) => post.id !== id);
		const newCommentList = commentList.filter(
			(comment) => comment.postId !== id
		);
		dispatch(setPostList(newPostList));
		dispatch(setCommentList(newCommentList));
	};

  const editPost = (id) => {
    const filteredPost = postList.filter((post) => post.id !== id);
    const editedPost = {
      userId: post.userId,
      id,
      title: editTitleValue,
      body: editBodyValue,
    }
    const newPostList = [...filteredPost, editedPost]
    dispatch(setPostList(newPostList))
    setIsEdit(false)
  }

	return (
		<div className="my-2 bg-gray-700 p-2 rounded">
			<div className="flex justify-between space-x-4">
				{isEdit ? (
					<input
						type="text"
						name="title"
						defaultValue={editTitleValue}
						id="title"
						className="bg-gray-600 rounded-2xl px-2 w-full"
						onChange={(e) => setEditTitleValue(e.target.value)}
					/>
				) : (
					<h2 className="text-3xl font-bold">{post.title}</h2>
				)}
        {post.userId === profile.id && (
          <div className="flex space-x-2">
            {isEdit ? (
              <button
                onClick={() => editPost(post.id)}
                className="p-1 h-8 bg-green-500 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsEdit(true);
                  setEditTitleValue(post.title);
                  setEditBodyValue(post.body);
                }}
                className="p-1 h-8 bg-blue-400 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            )}
            <button
              onClick={() => deletePost(post.id)}
              className="p-1 h-8 bg-red-700 rounded"
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
        )}
			</div>
			{isEdit ? (
				<textarea
					name="body"
					defaultValue={editBodyValue}
					id="body"
          onChange={(e) => setEditBodyValue(e.target.value)}
					className="rounded-2xl bg-gray-600 p-2 h-16 my-2 w-full"
				/>
			) : (
				<p className="text-lg my-2">{post.body}</p>
			)}
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
};

export default AdminPostCard;
