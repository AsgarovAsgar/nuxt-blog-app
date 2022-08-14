<template>
  <div>
    <TheHeader @open-side-nav="openSideNav()" />
    <TheSideNav v-show="isSideNavOpen" @close-side-nav="closeSideNav()" />
    <Nuxt class="fixed top-16 container mx-4 p-4" />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheSideNav from '~/components/Navigation/TheSideNav.vue'

export default {
  components: {
    TheHeader,
    TheSideNav
  }, 
  data() {
    return {
        isSideNavOpen: false
    }
  },
  methods: {
    openSideNav() {
        console.log('works');
        this.isSideNavOpen = true
    },
    closeSideNav() {
        this.isSideNavOpen = false
    }
  }
}
</script>