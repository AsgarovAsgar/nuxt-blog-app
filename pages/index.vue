<template>
  <div>
    <section id="hero">hero</section>
    <section id="featured-posts">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
