import Layout from '../components/Layout';
import PostList from '../components/PostList';

const HomePage = () => {
  return (
    <Layout>
      <h2 className="text-2xl">Home</h2>
      <PostList />
    </Layout>
  );
}

export default HomePage;