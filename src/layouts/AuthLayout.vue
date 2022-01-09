<template>
  <router-view />
</template>

<script>
  export default {
    computed: {
      error() {
        return this.$store.getters.error
      }
    },
    watch: {
      error(fbError) {
        console.log(fbError.message)
      }
    }
  }
</script>