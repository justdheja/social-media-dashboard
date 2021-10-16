import { useDispatch, useSelector } from 'react-redux';
import { setCommentList } from '../actions';

const CommentCard = ({ comment }) => {
  const commentList = useSelector(state => state.commentList)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()

  const deleteComment = (id) => {
    const tmpCommentList = commentList.filter(comment => comment.id !== id)
		dispatch(setCommentList(tmpCommentList))
  }

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
					<h5 className="font-semibold text-sm">
						{comment.email}
						{comment.id}
					</h5>
					{comment.email === isLoggedIn.AdminInfo.email && (
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
					)}
				</div>
				<p>{comment.body}</p>
			</div>
		</div>
	);
}
 
export default CommentCard;