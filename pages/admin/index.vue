<template>
  <div>
    <section id="new-post">
       <button class="p-2 border" @click="$router.push('/admin/new-post')">Add new post</button>
    </section>
    <section id="existing-post">
      <h2>Already posted</h2>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>

</style>