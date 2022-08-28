import axios from "axios"
import Cookies from "js-cookie"

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

        // In order to save user, we store idToken on localStorage
        // we set expiration time for logging out user when token expires
        localStorage.setItem('token', result.idToken)
        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)

        Cookies.set('jwt', result.idToken)
        Cookies.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)

      })
      .catch(error => {
        console.log(error);
      })
    },
    initAuth(vuexContext, req) {
      let token
      let expirationDate
      if(req) {
        if(!req.headers.cookie) {
          return
        }
        const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
        if(!jwtCookie) {
          return
        }
        token = jwtCookie.split('=')[1]

        expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
      } else {
        token = localStorage.getItem('token')
        expirationDate = localStorage.getItem('tokenExpiration')
      }
      // eger indiki vaxt tokenin bitme tarixin kecibse ve ya token hec set olmayibsa
      if(new Date().getTime() > +expirationDate || !token) {
        console.log('no token or invalid token');
        vuexContext.dispatch('logout')
        // vuexContext.commit('clearToken')
        return
      }

      vuexContext.commit('setToken', token)
    },
    logout(vuexContext) {
      vuexContext.commit('clearToken')

      Cookies.remove('token')
      Cookies.remove('expirationDate')

      if(process.client) {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      }
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