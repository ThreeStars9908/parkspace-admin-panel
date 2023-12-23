<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="flex flex-row justify-start">
      <div className="mr-auto cursor-pointer"
             @click="this.$emit('changeDes', true)">
          <base-icon name="fa fa-arrow-circle-left" size="2em" color="#008AB6"/>
      </div>
    </div>
    <div className="flex flex-row justify-center mb-8">
      <div className="mx-auto">
        <div className="text-[18px] font-semibold">Parking ID</div>
        <div className="text-[24px] font-medium text-[#045C9C] mt-[16px]">
          {{ selected_booking.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BaseIcon from '../../../items/BaseIcon.vue'

export default {
  name: 'SpecificHeaderComponent',
  computed: {
    ...mapState('Booking', ['selected_booking']),
  },
  components: {
    BaseIcon
  }
};
</script>
