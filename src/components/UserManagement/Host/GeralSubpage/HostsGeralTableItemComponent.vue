<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      {{ this.obj.name }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      {{ this.obj.email }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      {{ this.obj.cellphone }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center
    cursor-pointer underline underline-offset-1"
    @click="view_details">
      View details
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      <!-- {{ this.obj.rating }} -->- -
    </td>
    <td className="text-[#3F3F44] text-[14px] font-semibold py-[24px] text-center cursor-pointer">
      <a className="cursor-pointer mr-4" :href="$baseUrl + `${this.obj.dni_file}`" target="_blank">
        <base-icon name="fa fa-eye" />
      </a>
      <a className="cursor-pointer">
        <base-icon name="fa fa-download" />
      </a>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      <VueToggles v-model="this.obj.status"
                  :height="24"
                  :width="48"
                  @click="Enable_Host(this.obj)"
                  checkedBg="#1C8E33"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="py-[24px] text-center">
      <span className="cursor-pointer mr-4"
            @click="editHs">
        <base-icon name="fa fa-pen" />
      </span>
      <span className="cursor-pointer" @click="deleteHs">
        <base-icon name="fa fa-trash-can" />
      </span>
    </td>
  </tr>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '@/items/BaseIcon.vue'
import { VueToggles } from 'vue-toggles';
import { mapActions } from 'vuex';

export default {
  name: 'UserTableItemComponent',
  props: ['obj'],
  components: {
    VueToggles,
    BaseIcon
  },
  data() {
    return {
      contract: true,
      enable: true,
    };
  },
  methods: {
    ...mapActions('Hosts', ['Delete_Host', 'Select_Host', 'Enable_Host']),
    ...mapActions('ParkingSlots', ['ParkingSlotsbyHost']),
    ...mapActions('Booking', ['Show_BookingbyHost']),
    editHs() {
      this.Select_Host(this.obj);
      this.$emit('editHs', true);
    },
    deleteHs() {
      this.Select_Host(this.obj);
      this.$emit('deleteHs', true);
    },
    view_details() {
      this.Select_Host(this.obj);
      this.Show_BookingbyHost(this.obj.id);
      this.ParkingSlotsbyHost(this.obj.id);
      this.$emit('showH', true);
    },
  },
};
</script>
