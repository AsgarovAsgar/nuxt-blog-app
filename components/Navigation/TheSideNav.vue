<template>
  <div @click="closeSideNav()" class="bg-gray-900/80 fixed w-full h-full ">
    <transition name="slide-side">
      <div class="z-30 w-2/3 h-full bg-white p-6">
        <ul class="space-y-2">
            <li>
              <nuxt-link to="/posts">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/admin">Admin</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  transition: 'slide-side',
  methods: {
    closeSideNav() {
      this.$emit('close-side-nav')
    }
  }
}
</script>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>