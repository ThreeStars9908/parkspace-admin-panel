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
            {{ $t('subscription') }} {{ $t('history') }}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      v-model="filter"
                      @click="onFilter"
                      variant="outlined" />
          </div>
        </div>
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-left">Host</th>
            <th className="px-6 py-3 text-left min-w-[160px]">Parking spot</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Region/Country active</th>
            <th className="px-6 py-3 text-center">Time active</th>
            <th className="px-6 py-3 text-center">Price</th>
            <th className="px-6 py-3 text-center">Ad views</th>
            <th className="px-6 py-3 text-center">Times booked</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Subscription status</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <!-- <subscription-table-item-component
            v-for="(item, index) in subscriptions" v-bind:key="index"
            :obj="item"/> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import SubscriptionTableItemComponent from './SubscriptionTableItemComponent.vue';

export default {
  name: 'SubscriptionGeralTableComponent',
  // components: { SubscriptionTableItemComponent },
  data() {
    return {
      items: ['Alphabetical', 'ID'],
      filter: '',
    };
  },
  computed: {
    ...mapState('Subscriptions', ['subscriptions']),
  },
  methods: {
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
    onFilter() {
      if(this.filter == 'Alphabetical') {
        this.subscriptions.sort((a, b) => b.parkingSlotId - a.parkingSlotId);
      } else {
        this.subscriptions.sort((a, b) => a.id - b.id);
      }
    }
  },
};
</script>
