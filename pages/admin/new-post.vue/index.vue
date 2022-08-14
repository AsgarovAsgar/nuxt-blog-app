<template>
  <div>
    <section>
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  }
}
</script>