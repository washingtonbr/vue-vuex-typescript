export interface ICountry {
  name: String;
  alpha2Code: string;
  subregion: string;
};

export interface ISettingsState {
  countries: ICountry[];
  selectedCountry: ICountry;
  error: boolean;
};
