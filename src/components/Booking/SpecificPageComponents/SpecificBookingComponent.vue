<template>
  <div>
    <div className="mb-6">
      <div className="font-semibold text-[16px] text-left text-[#045C9C]
      mb-[16px] overflow-auto min-w-lg">
        Booking Details
      </div>
      <div className="grid grid-cols-7 text-[#3F3F44] text-[16px]">
        <div className="font-medium text-left pb-[12px]">Vehicle</div>
        <div className="font-medium text-center pb-[12px]">Parking space type</div>
        <div className="font-medium text-center pb-[12px]">Time parked</div>
        <div className="font-medium text-center pb-[12px]">Discount used</div>
        <div className="font-medium text-center pb-[12px]">Coupon used</div>
        <div className="font-medium text-center pb-[12px]">Scheduled payment</div>
        <div className="font-medium text-right pb-[12px]">Total Price</div>
      </div>
      <div className="h-[0.5px] w-full bg-[#C9C9C9]" />
      <div className="grid grid-cols-7 mb-6 text-[#3F3F44] text-[18px]">
        <div className="flex flex-col justify-between text-left">
          <div v-if="this.selected_booking.vehicle">{{ this.selected_booking.vehicle.type }}</div>
          <div v-if="this.selected_booking.vehicle">{{ this.selected_booking.vehicle.name }}</div>
          <div v-if="this.selected_booking.vehicle">{{ this.selected_booking.vehicle.number }}</div>
          <div v-if="this.selected_booking.vehicle" >{{ this.selected_booking.vehicle.brand }}</div>
          <div v-if="this.selected_booking.vehicle">{{ this.selected_booking.vehicle.color }}</div>
        </div>
        <div className="flex flex-col justify-between text-[#3F3F44] text-center">
          <div className="font-semibold mb-2">
            {{ this.selected_booking.parkingSlot.private ? 'Private': 'Coporate' }}
          </div>
        </div>
        <div className="flex flex-col justify-between text-[#3F3F44] text-center">
          <div className="font-semibold mb-2">
            {{ this.selected_booking.end_time - this.selected_booking.begin_time }}
          </div>
        </div>
        <div className="flex flex-col justify-between text-[#3F3F44] text-center">
          <div className="font-light mb-2">
            No
            <!-- {{ objeto.discount ? 'Yes' : 'No'}} -->
          </div>
        </div>
        <div className="flex flex-col justify-between text-[#3F3F44] text-center">
          <div className="font-light mb-2">
            - -
          </div>
        </div>
        <div className="flex flex-col justify-between text-[#3F3F44] text-center">
          <div className="font-semibold mb-2">{{ formatPrice(objeto.scheduled_payment) }}</div>
        </div>
        <div className="flex flex-col justify-between text-[#1486CA] text-right">
          <div className="font-semibold mb-2">
            $ {{ formatPrice(this.selected_booking.prices) }}
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-[#C9C9C9]" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SpecificBookingComponent',
  data() {
    return {
      objeto: {
        vehicle: ['Vehicle type', 'Vehicle name', 'License plate', 'Brand', 'Color'],
        parking_space: 'Private',
        parking_time: '23h 53min',
        discount: false,
        coupon: '-',
        scheduled_payment: 150,
        total: 180,
      },
    };
  },
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
