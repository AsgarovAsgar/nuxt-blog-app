<template>
  <div>
    <section>
      <h2>{{ loadedPost.title }}</h2>
      <p>Preview: {{ loadedPost.previewText }}</p>
      <div>
        <p>Author: {{ loadedPost.author }}</p>
        <p>Created on: {{ loadedPost.updatedDate | date }}</p>
      </div>
    </section>
    <section>
      <img :src="loadedPost.thumbnail" alt="">
      <p>{{ loadedPost.content }}</p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // we cannot use this. in asyncData, because it works before the page load!
  // when we use axious module, it return data directly, instead of response, if you want to reach out response, use standard axios
  // the standard axios has been used in admin/_postId page
  asyncData(context) {
    // console.log('context', context);
    return context.$axios.$get(context.$config.baseUrl + '/posts/' + context.params.id + '.json')
    .then(data => {
      return {
        loadedPost: data
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

<style>

</style>