import { ISettingsState, ICountry } from './types';

export default {
  getCountries(state: ISettingsState): ICountry[] {
    return state.countries;
  },
  getSelectedCountry(state: ISettingsState): ICountry {
    return state.selectedCountry;
  },
  getErrorStatus(state: ISettingsState): boolean {
    return state.error;
  },
};
