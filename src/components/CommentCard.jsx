import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentList } from '../actions';

const CommentCard = ({ comment }) => {
	const commentList = useSelector((state) => state.commentList);
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const dispatch = useDispatch();

	const [editCommentValue, setEditCommentValue] = useState('');
	const [isEditComment, setIsEditComment] = useState(false);

	const deleteComment = (id) => {
		const tmpCommentList = commentList.filter((comment) => comment.id !== id);
		dispatch(setCommentList(tmpCommentList));
	};

	const postEditComment = (id) => {
		const filteredComment = commentList.filter((comment) => comment.id !== id);
		const editedComment = {
			postId: comment.postId,
			id: comment.id,
			name: comment.name,
			email: comment.email,
			body: editCommentValue,
		};
    const tmpCommentList = [...filteredComment, editedComment]
		dispatch(setCommentList(tmpCommentList))
    setIsEditComment(false)
	};

	return (
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
				<div className="flex justify-between">
					<h5 className="font-semibold text-sm">{comment.email}</h5>
					{comment.email === isLoggedIn.AdminInfo.email && (
						<div className="flex space-x-2">
							{isEditComment ? (
								<button
									onClick={() => setIsEditComment(false)}
									className="p-1 bg-blue-400 rounded"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							) : (
								<button
									onClick={() => {
                    setIsEditComment(true)
                    setEditCommentValue(comment.body)
                  }}
									className="p-1 bg-blue-400 rounded"
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
								onClick={() => deleteComment(comment.id)}
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
					)}
				</div>
				{isEditComment ? (
					<div className="flex my-2 space-x-4">
						<input
							type="text"
							defaultValue={comment.body}
							className="bg-gray-100 text-black rounded-xl px-2 w-full"
              onChange={(e) => setEditCommentValue(e.target.value)}
						/>
						<button onClick={() => postEditComment(comment.id)} className="bg-green-500 p-2 rounded-xl">
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
					</div>
				) : (
					<p>{comment.body}</p>
				)}
			</div>
		</div>
	);
};

export default CommentCard;
