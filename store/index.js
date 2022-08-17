import axios from "axios"

export const state = () => ({
    loadedPosts: []
  })
  
export const mutations = {
    setPosts(state, posts) {
      state.loadedPosts = posts
    },
    addPost(state, post) {
      state.loadedPosts.push(post)
    },
    editPost(state, editedPost) {
      let postIndex = state.loadedPosts.findIndex(
        post => post.id === editedPost.id
      );
      state.loadedPosts[postIndex] = editedPost
    }
}
  
  export const actions = {
    nuxtServerInit(vuexContext, context) {
      return axios.get('https://nuxt-blog-app-28805-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        let postsArray = []
        console.log('res.data', res.data);
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        console.log('postsArray', postsArray);
        vuexContext.commit('setPosts', postsArray)
      })
      .catch(e => context.error(e))
    },
    setPosts({ commit }, posts){
      commit('setPosts', posts)
    },
    addPost(vuexContext, post) {
      let createdPost = {
        ...post,
        updatedDate: new Date()
      }
      return axios.post('https://nuxt-blog-app-28805-default-rtdb.firebaseio.com/posts.json', createdPost)
      .then(result => {
        vuexContext.commit('addPost', {...createdPost, id: result.data.name })
        // this.$router.push('/admin')
        // console.log(result)
      })
      .catch(err => console.log(err))
    },
    editPost(vuexContext, post) {}
  }

  export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
  }