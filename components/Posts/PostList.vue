<template>
  <div class="flex gap-4">
    <div v-for="post in posts" :key="post.id" class="flex flex-row space-x-4">
      <PostPreview :is-admin="isAdmin" :post="post" />
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>