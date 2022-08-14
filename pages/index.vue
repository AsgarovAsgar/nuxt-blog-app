<template>
  <div>
    <section id="hero">hero</section>
    <section id="featured-posts">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue'

export default {
  name: 'IndexPage',
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
