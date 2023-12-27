<template>
  <div class="table-component">
    <div className="h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between h-[56px] mb-6">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Bookings
          </div>
        </div>
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-left">Booking ID</th>
            <th className="px-6 py-3 text-center">Client</th>
            <th className="px-6 py-3 text-center">Host</th>
            <th className="px-6 py-3 text-center">Date<br>scheduled</th>
            <th className="px-6 py-3 text-center">Booking<br>status</th>
            <th className="px-6 py-3 text-center">Check In at</th>
            <th className="px-6 py-3 text-center">Check Out at</th>
            <th className="px-6 py-3 text-center">Delay fee</th>
            <th className="px-6 py-3 text-center">Rating<br>(client)</th>
            <th className="px-6 py-3 text-center">Rating<br>(host)</th>
            <th className="px-6 py-3 text-center">Price<br>total</th>
            <th className="px-6 py-3 text-center">Transaction<br>Details</th>
          </tr>
        </thead>
        <tbody className="font-light"
          v-if="this.all_booking.length">
          <orders-table-item-component v-for="(item, index) in all_booking"
                                       v-bind:key="index"
                                       :obj="item"
                                       @changeDes="(val) => this.$emit('changeToDescript', val)" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import OrdersTableItemComponent from './OrdersTableItemComponent.vue';

export default {
  name: 'UserTableComponent',
  components: { OrdersTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        client: 'Client A',
        host: 'Client B',
        s_date: 'dd/mm/yyyy 00:00 am',
        e_date: 'dd/mm/yyyy 00:00 am',
        status: 'Not started',
        checkin: 'dd/mm/yyyy 00:00',
        checkout: 'dd/mm/yyyy 00:00',
        fee: 5,
        rating_client: 4.8,
        rating_host: 4.8,
        price: 20,
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  props: ['filter'],
  computed: {
    ...mapState('Booking', ['all_booking']),
  },
};
</script>
