export const state = () => ({
    loadedPosts: []
  })
  
export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
}
  
  export const actions = {
    nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                vuexContext.commit('setPosts', [
                  {
                    id: "1",
                    title: "The first post (ID: ",
                    previewText: "This is preview",
                    author: "Asgar",
                    updatedDate: new Date(),
                    content: "thi si icontent ha ha ha ",
                    thumbnailLink:
                      "https://images.unsplash.com/photo-1660405803327-c3cf599cbf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                  },
                  {
                    id: "2",
                    title: "The first post (ID: ",
                    previewText: "This is preview",
                    author: "Asgar",
                    updatedDate: new Date(),
                    content: "thi si icontent ha ha ha ",
                    thumbnailLink:
                      "https://images.unsplash.com/photo-1660405803327-c3cf599cbf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                  },
                  {
                    id: "3",
                    title: "The first post (ID: ",
                    previewText: "This is preview",
                    author: "Asgar",
                    updatedDate: new Date(),
                    content: "thi si icontent ha ha ha ",
                    thumbnailLink:
                      "https://images.unsplash.com/photo-1660405803327-c3cf599cbf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                  },
                ])
                resolve()
            }, 1000);
          })
    },
    setPosts({ commit }, posts){
      commit('setPosts', posts)
    }
  }

  export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
  }