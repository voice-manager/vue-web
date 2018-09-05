import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: false,
    user: null,
    loadingProgress: null
  },
  getters: {
    activeUser: (state) => state.user,
    loadingProgress: (state) => state.loadingProgress
  },
  mutations: {
    toggleSidebar (state) {
      state.sidebar = !state.sidebar
    },
    setUser (state, payload = {}) {
      state.user = {...payload}
    },
    setLoadingProgress (state, { value }) {
      state.loadingProgress = value
    }
  }
})
