<template>
  <div>
    <section>
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      // console.log('postData', postData);
      this.$store.dispatch('addPost', postData)
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>