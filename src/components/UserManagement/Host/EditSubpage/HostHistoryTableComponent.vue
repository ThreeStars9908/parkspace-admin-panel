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
      <table class="table-auto w-full
        text-[16px] text-[#3F3F44]
        text-left">
        <thead className="font-normal
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="pb-[12px] text-left min-w-[150px]">Booking ID</th>
            <th className="pb-[12px] text-left">Host</th>
            <th className="pb-[12px] text-left min-w-[150px]">Booked spot</th>
            <th className="pb-[12px] text-center min-w-[120px]">Booking date</th>
            <th className="pb-[12px] text-center min-w-[120px]">Check In at</th>
            <th className="pb-[12px] text-center min-w-[120px]">Check Out at</th>
            <th className="pb-[12px] text-center min-w-[120px]">Booking Status<br>(from host)</th>
            <th className="pb-[12px] text-center min-w-[150px]">Booking Status<br>(from booking)</th>
            <th className="pb-[12px] text-center min-w-[150px]">Rating<br>(from user)</th>
            <th className="pb-[12px] text-center min-w-[150px]">Rating<br>(given to host)</th>
            <th className="pb-[12px] text-center min-w-[150px]">Rating<br>(given to user)</th>
            <th className="pb-[12px] text-center min-w-[150px]">Payment<br>Status</th>
            <th className="pb-[12px] text-center">Details</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <host-history-table-item-component v-for="(item, index) in selectedHost_booking"
                                             v-bind:key="index"
                                             :obj="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HostHistoryTableItemComponent from './HostHistoryTableItemComponent.vue';

export default {
  name: 'WashHistoryTableComponent',
  components: { HostHistoryTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1234,
        host: 'Client A',
        spot: 'Lawnfield Parks, 1663',
        booking_date: 'dd/mm/yyyy 00:00',
        checkin: 'dd/mm/yyyy 00:00',
        checkout: 'dd/mm/yyyy 00:00',
        host_status: 'To Confirm',
        booking_status: 'Finished',
        rating: '-',
        host_rating: '-',
        user_rating: 5,
        payment: 'Confirmed',
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  computed: {
    ...mapState('Booking', ['selectedHost_booking']),
  },
};
</script>
