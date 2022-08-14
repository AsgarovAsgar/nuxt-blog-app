<template>
  <div>
    <h1 class="text-3xl font-bold underline">posts page</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";

export default {
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  //   console.log('geeter', this.$store.getters.loadedPosts);
  // }
};
</script>

<style>
</style>