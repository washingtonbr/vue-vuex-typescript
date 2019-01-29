import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import settings from './modules/settings';

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
  },
  plugins: [vuexLocalStorage.plugin],
});
