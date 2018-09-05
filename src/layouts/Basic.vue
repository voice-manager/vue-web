<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <left-nav v-bind:user='user'/>
    </v-navigation-drawer>
    
    <div class='nav-bar'>
      <Button class="menuIconWrapper" @click="drawer = !drawer" v-if="!drawer">
        <i class="menuIcon material-icons" >more_vert</i>
      </Button>
    </div>
    
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import LeftNav from './components/LeftNav.vue'
export default {
  components: {LeftNav},
  computed: {
    user: function () {
      return this.$store.getters.activeUser || {}
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style>
.nav-bar{
  position: fixed;
  z-index: 100;
}
.menuIconWrapper{
  width: 40px;
  height: 40px;
  border: rgba(255, 255, 255, 0.3) 1px solid;
  margin: 5px;
  color: rgba(255, 255, 255, 0.7);
}
.menuIconWrapper .menuIcon{
  line-height: 40px;
}
.container {
  padding: 0;
}
</style>
