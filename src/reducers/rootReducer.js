const initState = {
  posts: [
    { id: "1", title: "the first post", body: "the body of the first post" },
    { id: "2", title: "the secod post", body: "the body of the second post" },
    { id: "3", title: "the third post", body: "the body of the third post" }
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id
      })
      return {
        ...state,
        posts: newPosts
      }
    default:
  }
  return state
}

export default rootReducer
