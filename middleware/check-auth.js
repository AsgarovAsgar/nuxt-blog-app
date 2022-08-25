export default function ({ store, req }) {
    // initAuth will be executed whenever this middleware runs
    console.log('middlewsre');
    store.dispatch('initAuth', req)

    // if(process.client) {
    //   store.dispatch('initAuth', req)
    // }
  }