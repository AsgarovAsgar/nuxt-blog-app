<template>
  <div>
    <section id="new-post">
       <button class="p-2 border" @click="$router.push('/admin/new-post')">Add new post</button>
    </section>
    <section id="existing-post">
      <h2>Already posted</h2>
      <PostList isAdmin/>
    </section>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue'

export default {
  layout: 'admin',
  components: {
    PostList
  }
}
</script>

<style>

</style>