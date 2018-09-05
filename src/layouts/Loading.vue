<template>
  <v-app dark>
    <v-content>
      <div class='loadingWrapper'>
        <v-progress-linear :indeterminate="true" />
        <transition name="fade">
          <span v-if='isStart' class='loadingTitle'>loading ... </span>
        </transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  mounted () {
    this.isStart = true
  },
  computed: {
  },
  data () {
    return {
      isStart: false
    }
  },
  name: 'Loading'
}
</script>

<style>
.loadingWrapper{
  margin-top: 50%;
}
.loadingWrapper .loadingTitle{
  display: block;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
