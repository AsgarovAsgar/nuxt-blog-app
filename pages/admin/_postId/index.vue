<template>
  <div>
    <section>
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
import axios from 'axios'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  asyncData(context) {
    return axios.get(context.$config.baseUrl + '/posts/' + context.params.postId + '.json')
    .then(res => {
      return {
        loadedPost: {...res.data, id: context.params.postId}
      }
    })
    .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>