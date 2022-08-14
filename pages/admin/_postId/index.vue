<template>
  <div>
    <section>
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  data() {
    return {
        loadedPost: {
            author: "Asgar",
            title: "My wonderful blog",
            thumbnailLink: "https://images.unsplash.com/photo-1603611171870-778d6020169c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, fugit.",
        }
    }
  }
}
</script>