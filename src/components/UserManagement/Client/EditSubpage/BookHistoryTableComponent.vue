<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between h-[56px] mb-6">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Booking History
          </div>
        </div>
        <!-- <div className="flex flex-row">
          <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      variant="outlined" />
          </div>
        </div> -->
      </div>
      <table class="table-auto w-full text-sm
        text-[16px] text-[#3F3F44]
        text-left">
        <thead className="font-normal text-center
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3">Booking ID</th>
            <th className="px-6 py-3">Client</th>
            <th className="px-6 py-3">Host</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Booking Status<br>(from host)</th>
            <th className="px-6 py-3">Booking Status<br>(from booking)</th>
            <th className="px-6 py-3">Rating<br>(Given to user)</th>
            <th className="px-6 py-3">Rating<br>(Given to host)</th>
            <th className="px-6 py-3">Payment Status</th>
            <th className="px-6 py-3">Transactions<br>Details</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <book-history-table-item-component v-for="(item, index) in selectedUser_booking"
                                             @changeB="(val) => this.$emit('changeToDescript', val)"
                                             v-bind:key="index"
                                             :obj="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BookHistoryTableItemComponent from './BookHistoryTableItemComponent.vue';

export default {
  name: 'BookHistoryTableComponent',
  components: { BookHistoryTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1234,
        client: 'Client A',
        host: 'Host A',
        date: 'dd/mm/yyyy 00:00',
        host_status: 'To Confirm',
        booking: 'Ongoing',
        user_rating: '-',
        host_rating: '4.8',
        payment: 'Confirmed',
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  computed: {
    ...mapState('Booking', ['selectedUser_booking']),
  },
};
</script>
