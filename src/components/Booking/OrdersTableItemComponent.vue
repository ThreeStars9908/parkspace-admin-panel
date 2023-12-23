<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] px-6 py-3 text-left">{{ this.obj.id }}</td>
    <td className="text-[#3F3F44] px-6 py-3 text-center">{{ this.obj.user.name }}</td>
    <td className="text-[#3F3F44] px-6 py-3 text-center">{{ this.obj.parkingSlot.user.name }}</td>
    <td className="text-[#3F3F44] px-6 py-3 text-center max-w-[160px]">
      {{ this.obj.booking_time.substr(0, 10) }}
    </td>
    <td className="text-[#3F3F44] px-6 py-3 text-center">{{ this.obj.status }}</td>
    <td className="text-[#3F3F44] px-6 py-3 text-center min-w-[80px]">
      {{ this.obj.begin_time.substr(0, 10) }} {{ this.obj.begin_time.substr(0, 10) }}
    </td>
    <td className="text-[#3F3F44] px-6 py-3 text-center min-w-[80px]">
      {{ this.obj.end_time.substr(0, 10) }} {{ this.obj.end_time.substr(0, 10) }}
    </td>
    <td className="text-[#F80808] font-semibold pt-[24px] text-center"></td>
    <td className="text-[#3F3F44] px-6 py-3 text-center">{{ this.obj.rating ? this.obj.rating: '- -'}}</td>
    <td className="text-[#3F3F44] px-6 py-3 text-center"> - - </td>
    <td className="text-[#0808F8] font-semibold pt-[24px] text-center">$ {{ this.obj.prices.toFixed(2) }}</td>
    <td className="pt-[24px] text-center">
      <span className="cursor-pointer"
      @click="this.$emit('changeDes', false), this.Select_Booking(this.obj)">
        <base-icon name="fa-solid fa-plus-circle" />
      </span>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
  name: 'OrdersTableItemComponent',
  props: ['obj'],
  data() {
    return {
      items: ['Washer A', 'Washer B', 'Washer C', 'Washer D'],
    };
  },
  components: {
    BaseIcon
  },
  methods: {
    ...mapActions('Booking', ['Select_Booking']),
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>
