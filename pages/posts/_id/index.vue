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
  asyncData(context) {
    // console.log('baseUrl', context.$config.baseUrl);
    return axios.get(context.$config.baseUrl + '/posts/' + context.params.id + '.json')
    .then(res => {
      return {
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

<style>

</style>