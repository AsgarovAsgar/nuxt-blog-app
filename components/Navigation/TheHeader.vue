<template>
  <div>
    <header class="fixed h-16 w-full bg-gray-900 p-4 flex text-white justify-between">
      <nuxt-link class="hover:text-red-500 transition duration-300" to="/">AA blog</nuxt-link>
      <nav class="hidden md:block">
        <ul class="flex gap-6">
          <li>
            <nuxt-link class="hover:text-red-500 transition duration-300" to="/posts">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-red-500 transition duration-300" to="/admin">Admin</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-red-500 transition duration-300" to="/about">About</nuxt-link>
          </li>
        </ul>
      </nav>
      <button class="md:hidden" @click="openSideNav()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    openSideNav() {
      this.$emit('open-side-nav')
    }
  }

}
</script>

<style>

</style>