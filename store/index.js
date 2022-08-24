import axios from "axios"

export const state = () => ({
    loadedPosts: [],
    token: null
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
    },
    setToken(state, idToken) {
      state.token = idToken
    },
    clearToken(state) {
      state.token = null
    }
}
  
  export const actions = {
    nuxtServerInit(vuexContext, context) {
      // console.log('context', context.$config);
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
      return this.axios.post(this.$config.axios.browserBaseURL + '/posts.json', createdPost)
      .then(result => {
        vuexContext.commit('addPost', {...createdPost, id: result.data.name })
        // this.$router.push('/admin')
        // console.log(result)
      })
      .catch(err => console.log(err))
    },
    editPost(vuexContext, editedPost) {
      // console.log('this.$config.axios.baseURL', this.$config);
      // console.log('editedPost.id', editedPost.id);
      return this.$axios.put(this.$config.baseUrl + '/posts/' + editedPost.id + '.json' + '?auth=' + vuexContext.state.token, editedPost)
      // this is modern way to call axios. just add base url into the runtimeconfig.axios object 
      .then(res => {
        // console.log('res, res', res);
        vuexContext.commit('editPost', editedPost)
      })
      .catch(err => console.log(err))
    },
    authenticateUser(vuexContext, authData) {
      let authEndpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
      if(authData.isLogin) {
        authEndpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
      }
      return this.$axios.$post(authEndpoint + this.$config.fbWebApiKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        console.log('result: ', result);
        vuexContext.commit('setToken', result.idToken)
        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
      })
      .catch(error => {
        console.log(error);
      })
    },
    setLogoutTimer(vuexContext, duration) {
      setTimeout(() => {
        vuexContext.commit('clearToken')
      }, duration);
    }
  }

  export const getters = {
    loadedPosts(state) {
      return state.loadedPosts
    },
    isAuthenticated(state) {
      return state.token != null
    }
  }