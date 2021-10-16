import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PhotoList from '../components/PhotoList';

const AlbumDetailPage = () => {
  const router = useRouteMatch()
  const { userId, albumId } = router.params
  const [profile, setProfile] = useState({})
  const [album, setAlbum] = useState({})
  const [photos, setPhotos] = useState([])

  const userList = useSelector(state => state.userList)
  const albumList = useSelector(state => state.albumList)
  const photoList = useSelector(state => state.photoList)

  useEffect(() => {
    userList.map(user => user.id === parseInt(userId) ? setProfile(user) : '')
    albumList.map(album => album.id === parseInt(albumId) ? setAlbum(album) : '')
    setPhotos(photoList.filter(photo => photo.albumId === parseInt(albumId)))
    console.log(profile, album, photos)
  }, [userId, albumId, userList, albumList, photoList])
  return (
    <Layout>
      <div className="flex space-x-2 text-sm">
        <Link to={"/users/"}>Users</Link>
        <p>/</p>
        <Link to={"/users/" + userId }>{profile.username}</Link>
        <p>/</p>
        <p>Album</p>
        <p>/</p>
        <p>{album.title}</p>
      </div>
      <h2 className="text-5xl my-2 font-bold">{album.title}</h2>
      <p className="text-sm my-2">{profile.username}</p>
      <hr className=" border-b-2 border-white my-2" />
      <div className="grid grid-cols-3 gap-2">
        {photos.map(photo => (
          <PhotoList key={photo.id} photo={photo} />
        ))}
      </div>
    </Layout>
  );
}

export default AlbumDetailPage;