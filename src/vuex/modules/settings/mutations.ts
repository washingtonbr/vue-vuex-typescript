import { ISettingsState, ICountry } from './types';

export default {
  setCountries(state: ISettingsState, payload: ICountry[]) {
    state.error = false;
    state.countries = payload;
  },
  setSelectedCountry(state: ISettingsState, country: ICountry) {
    state.error = false;
    state.selectedCountry = country;
  },
  settingError(state: ISettingsState) {
    state.error = true;
  },
};
