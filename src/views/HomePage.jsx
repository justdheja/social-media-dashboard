import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const postList = useSelector(state => state.postList)
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  return (
    <Layout>
      {isLoggedIn.isLogIn ? (
        <>
          <h2 className="text-2xl">Hello {isLoggedIn.AdminInfo.email}</h2>
          
        </>
      ) : (
        <h2 className="text-xl">Please Log In with random username and password to create a post or comment</h2>
      )}
      <PostList />
    </Layout>
  );
}

export default HomePage;