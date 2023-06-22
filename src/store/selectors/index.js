const commentsSelector = state => state.comments;
const usersSelector = state => state.users;
const postsSelector = state => state.posts[0]

export {
    commentsSelector,
    usersSelector,
    postsSelector
}