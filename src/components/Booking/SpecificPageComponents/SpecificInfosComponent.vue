<template>
  <div>
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-6">
      <div className="flex flex-col justify-between text-center mb-4">
        <div className="text-[16px] font-semibold">Client</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.user.name }}
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          <!-- Address A -->
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.user.cellphone }}
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.user.email }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Host</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.parkingSlot.user.name }}
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.parkingSlot.description }}
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.parkingSlot.address }}
        </div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.parkingSlot.user.email }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Date scheduled</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.begin_time }}
          {{ this.selected_booking.begin_time }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Booking Status</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.status }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Check In at</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.begin_time }}
          {{ this.selected_booking.begin_time }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Check Out at</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.end_time }}
          {{ this.selected_booking.end_time }}
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Delay fee</div>
        <div className="text-[16px] font-semibold text-[#F80808] mt-[8px]">
          <!-- $ 18,00 -->
        </div>
      </div>
      <div className="flex flex-col text-center mb-4">
        <div className="text-[16px] font-semibold">Finishing Date</div>
        <div className="text-[14px] font-normal mt-[8px]">
          {{ this.selected_booking.end_time }}
          {{ this.selected_booking.end_time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SpecificInfosComponent',
  computed: {
    ...mapState('Booking', ['selected_booking']),
  },
};
</script>
