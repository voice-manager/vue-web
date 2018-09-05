<template>
  <div>
    <basic/>
  </div>
</template>

<script>
import Basic from './layouts/Basic.vue'

export default {
  components: {Basic},
  mounted () {
  },
  computed: {
    user: function () {
      return this.$store.getters.activeUser
    }
  },
  data () {
    return {
    }
  },
  name: 'App'
}
</script>

<style>
</style>
