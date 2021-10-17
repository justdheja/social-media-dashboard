# Social Media Dashboard

View Demo [Here](https://socdash.vercel.app)

> to log in on this app you can use random username and password

| Feature | Path | Require to Log In |
| ------ | ------ | ------ |
| add, edit, and delete post | `/` | Yes |
| add, edit, and delete comment | `on every post detail` | Yes |
| view list of users | `/users` | No |
| view list of posts of each user | `/users/:id` | No |
| view list of albums of each user | `/users/:id` | No |
| view the detail of each post and its comment | `/users/:userId/posts/:postId` | No |
| view list of photos from an album | `/users/:userId/albums/:albumId` | No |
| view the detail of each photo | `/users/:userId/albums/:albumId` | No |

Tech Stack:
* [React with create-react-app](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/docs/)
* [Redux](https://redux.js.org/)
* [Vercel](https://vercel.com/)


To run this app locally you can run these scripts in your terminal:

```
git clone https://github.com/justdheja/social-media-dashboard.git

cd social-media-dashboard

yarn
#or
npm install

yarn start
#or
npm start
```
