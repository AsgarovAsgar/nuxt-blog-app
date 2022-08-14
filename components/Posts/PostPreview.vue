<template>
  <nuxt-link :to="postLink" class="border p-4 max-w-md rounded-lg">
    <article class="flex flex-col gap-4">
        <img class="rounded-md h-1/2 object-cover" src="https://images.unsplash.com/photo-1660419436224-cecb20539456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="">
        <div>
            <h3 class="font-bold text-xl">Title</h3>
            <p>preview</p>
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
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style>

</style>