<template>
  <div>
    <section id="new-post" class="space-x-2">
      <button class="p-2 border" @click="$router.push('/admin/new-post')">Add new post</button>
      <nuxt-link class="p-2 border" to="/admin/auth">Auth</nuxt-link>
    </section>
    <section id="existing-post">
      <h2>Already posted</h2>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>

export default {
  layout: 'admin',
  middleware: ['check-auth', 'authenticated'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>

</style>