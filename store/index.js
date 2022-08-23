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
      console.log('context', context.$config);
      return context.$axios.$get('/posts.json')
      // if we call data using $axios.$get we use full functionality of axios module, so we don't need to write baseUrl
      .then(data => {
        let postsArray = []
        // console.log('res.data', res.data);
        for (let key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        // console.log('postsArray', postsArray);
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
      return this.axios.post(this.$config.axios.baseURL + '/posts.json', createdPost)
      .then(result => {
        vuexContext.commit('addPost', {...createdPost, id: result.data.name })
        // this.$router.push('/admin')
        // console.log(result)
      })
      .catch(err => console.log(err))
    },
    editPost(vuexContext, editedPost) {
      return this.$axios.put(this.$config.axios.baseURL + editedPost.id + '.json', editedPost)
      // this is modern way to call axios. just add base url into the runtimeconfig.axios object 
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(err => console.log(err))
    }
  }

  export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
  }