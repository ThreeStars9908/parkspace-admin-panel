<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4 relative
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between h-[56px] mb-6">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Cashback history
          </div>
        </div>
        <div className="flex flex-row">
          <!-- <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      variant="outlined" />
          </div> -->
        </div>
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-left">Parking ID</th>
            <th className="px-6 py-3 text-left">Host</th>
            <th className="px-6 py-3 text-left">Client</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Parking spot</th>
            <th className="px-6 py-3 text-center">Date used</th>
            <th className="px-6 py-3 text-center">% of cashback</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Booking price</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Amount returned</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <cashback-table-item-component :obj="this.objeto" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CashbackTableItemComponent from './CashbackTableItemComponent.vue';

export default {
  name: 'CashbackTableComponent',
  components: { CashbackTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        host: 'Host name',
        client: 'Client name',
        parking_spot: 'Parking spot name',
        date: '-- -- --',
        cashback_percent: 10,
        price: 60,
        amount: 5,
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  methods: {
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
  },
};
</script>
