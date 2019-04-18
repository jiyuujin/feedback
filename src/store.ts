import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';

Vue.use(Vuex);

const change = ({ page = 0, pages = [] }) => {
  const name = pages[page];
  return router.push({ name });
};

export default new Vuex.Store({
  state: {
    page: 0,
    pages: [],
  },

  mutations: {
    pages(state, payload) {
      state.pages = payload;
    },
    page(state, payload) {
      state.page = payload;
    },
    next(state) {
      state.page++;
      const { page, pages } = state;
      return change({ page, pages });
    },
    last(state) {
      state.page--;
      const { page, pages } = state;
      return change({ page, pages });
    },
  },

  actions: {
    onFetch({ commit }, { pages }) {
      commit('pages', pages);
    },
    setPage({ commit }, { name, pages }) {
      const index = pages.indexOf(name);
      if (index >= 0) {
        return commit('page', index);
      }
    },
    onNext({ commit, state, getters }, { pages }) {
      if (state.page >= getters.total - 1) {
        return router.push({
          name: pages[0],
        });
      }
      commit('next');
    },
    onLast({ commit, state }) {
      if (state.page <= 0) {
        return;
      }
      commit('last');
    },
  },

  getters: {
    total(state) {
      const { length } = state.pages;
      return length;
    },
  },
});
