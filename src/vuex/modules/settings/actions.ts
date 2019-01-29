import { ActionContext } from 'vuex';
import axios from 'axios';
import { ISettingsState, ICountry } from './types';

export default {
  fetchCountries(store: ActionContext<ISettingsState, any>): void {
    axios({
      url: 'https://restcountries.eu/rest/v2/all',
    }).then((response) => {
      const counties = response && response.data;
      store.commit('setCountries', counties);
    }, (error) => {
      console.log(error);
      store.commit('settingError');
    });
  },
  setSelectedCountry(store: ActionContext<ISettingsState, any>, country: ICountry): void {
    store.commit('setSelectedCountry', country);
  },
};
