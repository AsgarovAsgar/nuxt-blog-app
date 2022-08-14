<template>
  <div class="flex gap-4">
    <div v-for="i in 3" :key="i" class="flex flex-row space-x-4">
      <PostPreview :is-admin="isAdmin" />
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