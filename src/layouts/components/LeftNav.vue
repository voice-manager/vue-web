<template>
  <v-list  two-line>
    <template v-for="(item, i) in items">
      <v-list-tile
        :key="i"
        @click=""
        avatar
        :to="item.route"
      >
        <v-list-tile-avatar v-if='item.image'>
          <img :src="item.image">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-if='item.title'> {{item.title}}</v-list-tile-title>
          <v-list-tile-sub-title  v-if='item.subtitle'>{{item.subtitle}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>

      <v-list-tile
        @click=""
        class='logoutStyle'
      >

        <v-list-tile-action>
          <v-icon>refresh</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title> Logout </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
  </v-list>
</template>


<script>
export default {
  props: ['user'],
  computed: {
    items: function () {
      const {displayName = '', photoURL = '', email = ''} = this.user

      return [{
        image: photoURL,
        title: displayName,
        subtitle: email
      },
      {
        title: 'Flocking',
        route: '/'
      },
      {
        title: 'Fibonacci',
        route: '/fibonacci'
      }]
    }
  },
  data () {
    return {
    }
  },
  name: 'LeftNav'
}
</script>

<style>
.logoutStyle{
  position: absolute;
  bottom: 0;
}
</style>
