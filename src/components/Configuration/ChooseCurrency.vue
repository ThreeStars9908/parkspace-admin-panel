<template>
    <div class="currency-block"
      className="mt-8 p-6
          shadow-[4px_6px_30px_0px_#00000020] rounded-lg">
          <div className="text-[18px] text-left font-semibold">
              {{ $t('currency') }}
          </div>
          <div className="w-full h-[0.5px] mr-70 mt-2 bg-[#C9C9C9]" />
          <div className="h-[240px] overflow-y-auto mt-6
              scrollbar scrollbar-thumb-[#008AB6] p-2
              scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
              <div v-for="(item, index) in currencies" v-bind:key="index">
                  <div className="flex flex-row justify-between m-2">
                      {{ item.name }} {{ item.symbol }}
                      <input v-model="select_currency"
                          :value="item.id"
                          name="currency-radio"
                          type="radio"
                          class="my-auto w-4 h-4 text-blue-600 bg-gray-100 border-solid border-gray-500">
                  </div>
                  <div className="w-full h-[0.5px] mx-auto bg-[#EAEAEA]" />
              </div>
          </div>
          <div className="flex flex-row justify-end mt-4">
              <default-button title="save_currency" @click="onSave"/>
          </div>
          <v-dialog v-model="isChange"
              width="auto">
              <change-currency-dialog :obj="select_currency" @confirmCurrency="confirmCurrency"/>
          </v-dialog>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import DefaultButton from '../../items/DefaultButton.vue';
  import ChangeCurrencyDialog from './ChangeCurrencyDialog.vue';
  
  export default {
      name: 'ChooseCurrency',
      components: {
          DefaultButton,
          ChangeCurrencyDialog
      },
      data() {
          return {
              isChange: false,
              currencies: [
                { id: 'usd', name: 'USD - US Dollar', symbol: '$' },
                { id: 'eur', name: 'EUR - Euro', symbol: '€' },
                { id: 'gbp', name: 'GBP - British Pound', symbol: '£' },
                { id: 'aud', name: 'AUD - Australian Dollar', symbol: '$' },
                { id: 'cad', name: 'CAD - Canadian Dollar', symbol: '$' },
                { id: 'cny', name: 'CNY - Chinese Yuan', symbol: '¥' },
                { id: 'jpy', name: 'JPY - Japanese Yen', symbol: '¥' },
              ],
              select_currency: '',
          }
      },
      computed: {
        ...mapState('Configuration', ['selected_currency']),
      },
      methods: {
          onSave() {
              this.isChange = true;
          },
          confirmCurrency(val) {
              this.isChange = val;
          },
      },
      created() {
        this.select_currency = this.selected_currency;
      }
  }
  </script>
  