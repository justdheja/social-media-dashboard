/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import Layout from '../components/Layout';
import UserProfileCard from '../components/UserProfileCard';

const UserDetailPage = () => {
	const router = useRouteMatch();
	const id = router.params.id;
	const userList = useSelector((state) => state.userList);
  const postList = useSelector(state => state.postList)
  const albumList = useSelector(state => state.albumList)
	const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([])
  const [albums, setAlbums] = useState([])

	useEffect(() => {
		userList.map((user) => {
			if (user.id === parseInt(id)) {
				setProfile(user);
			}
		});
    setPosts(postList.filter(post => post.userId === parseInt(id)))
    setAlbums(albumList.filter(album => album.userId === parseInt(id)))
	}, [id]);

	return (
		<Layout>
			<div className="flex">
				<div className="flex-grow-0 w-72">
					<UserProfileCard profile={profile} />
          <div className="mt-4 bg-white p-2 rounded text-black">
            {albums.map(album => (
              <div className="overflow-ellipsis">{album.title}</div>
            ))}
          </div>
				</div>
        <div className="pl-4">
          <h2 className="text-2xl font-semibold">Posts</h2>
          {posts.map(post => (
            <div className="text-justify my-2" key={post.id}>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm overflow-hidden w-full">{post.body}</p>
              <button className="bg-green-600 p-2 my-1 rounded text-xs font-bold">Detail</button>
            </div>
          ))}
        </div>
			</div>
		</Layout>
	);
};

export default UserDetailPage;
