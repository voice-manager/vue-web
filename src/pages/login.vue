<template>
  <v-container>
    <loading v-if='!user'/>
    <h1> Login </h1>
    <google-login></google-login>
    <facebook-login></facebook-login>
  </v-container>
</template>

<script>
import GoogleLogin from '../components/GoogleLogin.vue'
import FacebookLogin from '../components/FacebookLogin.vue'
import Loading from '../layouts/Loading.vue'

export default {
  components: {
    GoogleLogin,
    FacebookLogin,
    Loading
  },
  computed: {
    user: function () {
      const user = this.$store.getters.activeUser

      // not init login yet, go loading
      if (!user) return null

      // inited, and not login
      if (user && !user.displayName) {
        return {}
      }

      return this.$store.getters.activeUser
    }
  },
  mounted () {
  }
}
</script>

<style lang="css">
</style>