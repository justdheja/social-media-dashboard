import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserList = () => {
  const userList = useSelector(state => state.userList)
  return (
		<div className="grid grid-cols-5">
      {userList.map(user => (
        <Link to={'/users/' + user.id} className="bg-white rounded flex flex-col justify-center text-gray-600 w-auto items-center p-2 m-2" key={user.id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-lg text-black font-semibold">{user.username}</h1>
          <h1 className="text-sm text-black text-center">{user.name}</h1>
        </Link>
      ))}
		</div>
	);
}
 
export default UserList;