import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostList } from '../actions';
import AdminPostCard from '../components/AdminPostCard';
import Layout from '../components/Layout';

const HomePage = () => {
  const dispatch = useDispatch()
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userList = useSelector(state => state.userList)
	const postList = useSelector((state) => state.postList);

  const [profile, setProfile] = useState({})
  const [adminPosts, setAdminPosts] = useState([])
  const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');

  useEffect(() => {
    userList.forEach(user => {
      if (user.username === isLoggedIn.AdminInfo.email) {
        setProfile(user)
      }
    })
    setAdminPosts(postList.filter(post => post.userId === profile.id))
  }, [isLoggedIn.AdminInfo.email, postList, userList])

  const createPost = () => {
    const newPost = {
      userId: profile.id,
      id: postList.length + 1,
      title: postTitle,
      body: postBody
    }
    const tmpPostList = [...postList, newPost]
    dispatch(setPostList(tmpPostList))
  }

	return (
		<Layout>
			{isLoggedIn.isLogIn ? (
				<>
					<h2 className="text-2xl mb-4">Hello {isLoggedIn.AdminInfo.email}</h2>
          <div className="bg-gray-600 rounded p-2 flex flex-col">
            <h3 className="font-semibold">Create Post</h3>
            <input
              type="text"
              name="title"
              id="title"
              className="rounded-2xl bg-gray-500 px-2 my-2"
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="write your title here"
            />
            <textarea
              name="body"
              id=""
              cols="10"
              rows="10"
              className="rounded-2xl bg-gray-500 p-2 h-16 my-2"
              onChange={(e) => setPostBody(e.target.value)}
              placeholder="write your body here"
            />
            <button onClick={createPost} className="bg-green-500 rounded-2xl px-2 w-14 text-center">Post</button>
          </div>
          {adminPosts.length && (
            <div className="my-4">
              <h1 className="text-lg font-medium">Your Post(s)</h1>
              {adminPosts.map(post => (
                <AdminPostCard post={post} profile={profile} />
              ))}
            </div>
          )}
				</>
			) : (
				<h2 className="text-xl">
					Please Log In with random username and password to create a post or
					comment
				</h2>
			)}
		</Layout>
	);
};

export default HomePage;
