<template>
  <tr>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.id }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.user.name }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.parkingSlot.user.name }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.booking_time }}
      {{ this.obj.booking_time }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.status }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      Ongoing
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.rating ? this.obj.rating: '- -' }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      <!-- {{ this.obj.host_rating }} --> - -
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      <!-- {{ this.obj.payment }} -->Confirmed
    </td>
    <td className="py-[24px] text-center">
      <span className="cursor-pointer" @click="this.$emit('changeB', false), this.Select_Booking(this.obj)">
        <base-icon name="fa fa-plus-circle"
                color="#008AB6"
                scale="1.25" />
      </span>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
import BaseIcon from '../../../../items/BaseIcon.vue';

export default {
  name: 'BookHistoryTableItemComponent',
  props: ['obj'],
  components: {
    BaseIcon,
  },
  methods: {
    ...mapActions('Booking', ['Select_Booking']),
  },
};
</script>
