<template>
  <div class="table-component">
    <div className="w-full h-[720px] mt-4 py-4 px-6 relative overflow-auto
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div className="font-semibold text-left mb-4">
        Last appointments
      </div>
      <table class="w-full text-sm text-center">
        <thead className="text-md text-left
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3">Client</th>
            <th className="px-6 py-3">Host</th>
            <th className="px-6 py-3 text-center">Rented Time</th>
            <th className="px-6 py-3 text-center">Parking Slot</th>
            <th className="px-6 py-3 text-center">Amount Payed</th>
            <th className="px-6 py-3 text-center">Date / Hour <br> (booking finished)</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <table-item-component v-for="(item, index) in all_booking"
                                v-bind:key="index"
                                :obj="item" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TableItemComponent from './TableItemComponent.vue';

export default {
  name: 'LastAppointmentsTableComponent',
  components: { TableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        client: 'James Antony',
        host: 'Anthony Phillips',
        rent_time: '2 hours',
        parking: 'Parking lot Address number 233',
        price: 15.00,
        date: '27-07-2023 16:21',
      },
    };
  },
  computed: {
    ...mapState('Booking', ['all_booking']),
  },
};
</script>
