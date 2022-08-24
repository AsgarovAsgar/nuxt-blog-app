<template>
  <div>
    <div>
      <form @submit.prevent="onSubmit()" class="border p-4 flex flex-col gap-4 max-w-md">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <input v-model="email" type="email" name="" id="email">
        </div>
        <div class="flex flex-col gap-2">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="" id="password">
        </div>
        <button class="border px-3 py-2 rounded" type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
        <button class="border px-3 py-2 rounded" type="button" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style>

</style>