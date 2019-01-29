<template>
  <div class="Country">
    <select
      v-if="countries && selectedCountry"
      name="contries"
      id="contries"
      @change="defineCountry">
      <option
        v-for="(country, index) of countries"
        :key="'country'+index"
        :value="country.alpha2Code"
        :selected="country.alpha2Code === selectedCountry.alpha2Code">
        {{country.name}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { ICountry } from '@/vuex/modules/settings/types';

const namespace: string = 'settings';

@Component
export default class Country extends Vue {
  @Action('fetchCountries', { namespace }) fetchCountries: any;

  @Action('setSelectedCountry', { namespace }) setCountry: any;

  @Getter('getCountries', { namespace }) countries!: ICountry[];

  @Getter('getSelectedCountry', { namespace }) selectedCountry!: ICountry;

  mounted() {
    this.fetchCountries();
  }

  defineCountry(e: any) {
    const country = this.countries.find(item => item.alpha2Code === e.target.value);
    this.setCountry(country);
  }
}
</script>
