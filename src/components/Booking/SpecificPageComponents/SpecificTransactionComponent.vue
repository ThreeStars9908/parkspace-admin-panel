<template>
  <div>
    <div className="p-6 rounded-lg mb-6
    border-[3px] border-solid border-[#1486CA]
    shadow-[4px_6px_30px_0px_#00000020] m-auto">
      <div className="mb-6 text-[#1486CA] text-[16px] font-semibold text-left">
        Transaction Details
      </div>
      <div className="flex flex-row justify-between mb-6">
        <div className="flex flex-col text-[#3F3F44] text-[16px] text-left">
          <div>Total price</div>
          <div>Discount offered</div>
          <div>Discount applied</div>
          <div>Delay fee</div>
          <div>Total amount payed</div>
        </div>
        <div className="flex flex-col text-[#3F3F44] text-[16px] text-right font-semibold">
          <div>{{ formatPrice(this.selected_booking.prices) }}</div>
          <div>%10</div>
          <div>{{ formatPrice(40) }}</div>
          <div>{{ formatPrice(18) }}</div>
          <div>{{ formatPrice(430) }}</div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-[#C9C9C9] mb-4" />
      <div className="flex flex-row justify-between">
        <div className="">Payment method</div>
        <div className="text-[#3F3F44] text-[16px] font-semibold">Paypal</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SpecificTransactionComponent',
  computed: {
    ...mapState('Booking', ['selected_booking']),
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>
