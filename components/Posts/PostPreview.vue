<template>
  <nuxt-link :to="postLink" class="border p-4 max-w-md rounded-lg">
    <article class="flex flex-col gap-4">
        <img class="rounded-md h-1/2 object-cover" :src="post.thumbnail" alt="">
        <div>
            <h3 class="font-bold text-xl">{{post.title}}</h3>
            <p>{{post.content}}</p>
        </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      default: '1'
    },
    post: {
      type: Object
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id
    }
  }
}
</script>

<style>

</style>