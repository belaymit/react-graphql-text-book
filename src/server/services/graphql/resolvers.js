import logger from '../../helpers/logger';
const posts = [
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AKCL0riiZY8W8HBVY4ROGDhzFCrApC__1SB-SsBbNQ&s",
      username: "Test User 2",
    },
  },
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQJc4GrJhI31Fd5zTc84WxQ1xNDk6y-yDx28jtsKi&s",
      username: "Test User",
    },
  },
];

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts;
    },
  },
  RootMutation: {
    addPost(root, { post, user }, context) {
      const postObject = {
        ...post,
        user,
        id: posts.length + 1,
      };
      posts.push(postObject);
      logger.log({ level: 'info', message: 'Post was created' });
      return postObject;
    },
  },
};
export default resolvers;
