

import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  auth: {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      roles: [],
      settings: {

      },
      lastEditedBy: '',
      isActive: false
    },
    loggedIn: false,
  },
  toggleSidebar: true,
  settings: null,
  error: null,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isAuthenticatedAuthUser: state => state.auth.loggedIn,
  authUser: state => state.auth.user,
  isAdminAuthUser: state => {
    let user = state.auth.user;
    return user.roles.map(role => role === 'admin');
  },
  toggleSidebar: state => state.toggleSidebar,
  settings: state => state.settings,
}

export const mutations: MutationTree<RootState> = {
  SET_AUTH (state, payload) {
    if(payload === null) {
      state.auth.loggedIn = false;
    }else {
      state.auth.user = payload.user
      state.auth.loggedIn = true;
    }
  },

  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar;
  },

  SETTINGS(state, payload) {
    state.settings = payload;
  },

  ERROR(state, payload) {
    state.error = payload;
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchSettings({ commit }, payload = `settings`) {
    try {
      const { data } = await this.$axios.get(payload);
      commit('SETTINGS', data);
      return data;
    } catch (error) {
      commit('ERROR', error)
    }
  },

  async storeSettings({ commit }, payload) {
    try {
      const { data } = await this.$axios.post(`settings`, payload);
      commit('SETTINGS', data);
      return data;
    } catch (error) {
      commit('ERROR', error)
    }
  },
  async nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req && req.headers && req.headers.cookie) {
      // cookie found
      try {
        // check data user login with cookie
        const { data } = await this.$axios.get('/auth/me');
        // server return the data is cookie valid loggedIn is true
        auth = data // set the data auth
      } catch (err) {
        // No valid cookie found
        auth = null
      }
    }
    commit('SET_AUTH', auth) // set state auth
  },

  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
}
