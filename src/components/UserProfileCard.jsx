/* eslint-disable react/jsx-no-target-blank */
const UserProfileCard = ({ profile }) => {
  return (
		<div className="bg-white max-h-56 rounded p-2 text-black text-center space-y-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-20 w-20 mx-auto text-gray-700"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clipRule="evenodd"
				/>
			</svg>
			<h2 className="font-semibold">{profile.name}</h2>
			<h5 className="text-sm">{profile.username}</h5>
			<a
				href={'mailto:' + profile.email}
				className="text-sm flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				{profile.email}
			</a>
			<a
				href={'https://' + profile.email}
				target="_blank"
				className="text-sm flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
					/>
				</svg>
				{'https://' + profile.website}
			</a>
		</div>
	);
}
 
export default UserProfileCard;