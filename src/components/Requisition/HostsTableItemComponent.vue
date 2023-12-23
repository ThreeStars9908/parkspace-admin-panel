<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.name }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.email }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.cellphone }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center
    cursor-pointer underline underline-offset-1"
    @click="this.$emit('showH', true), this.Select_Host(this.obj), this.ParkingSlotsbyHost(this.obj.id)">
      View details
    </td>
    <td className="text-[#3F3F44] text-[14px] font-semibold px-6 py-3 text-center cursor-pointer">
      <a className="cursor-pointer mr-4" :href="$baseUrl + `${this.obj.dni_file}`" target="_blank">
        <base-icon name="fa fa-eye" color="#323232" />
      </a>
      <a className="cursor-pointer">
        <base-icon name="fa fa-download" color="#323232" />
      </a>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <select v-model="type"
          class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8] border-solid border-2 border-[#000]">
          <option v-for="(element, index) in negative_options"
            v-bind:key="index" :value="element">{{ element }}</option>
        </select>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <div className="py-2 bg-[#008AB6] w-[110px] px-4 font-semibold m-auto
        text-white rounded-lg cursor-pointer">Send</div>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <VueToggles v-model="this.obj.status"
                  :height="18"
                  :width="36"
                  checkedBg="#1C8E33"
                  @click="Enable"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="px-6 py-3 text-center">
      <span class="cursor-pointer mt-4" @click="deleteHs">
        <base-icon name="fa fa-trash-can" color="#323232" />
      </span>
    </td>
  </tr>
</template>
<!-- eslint-disable -->
<script>

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
  name: 'HostsTableItemComponent',
  props: ['obj'],
  components: { VueToggles, BaseIcon },
  data() {
    return {
      contract: true,
      negative_options: [
        'Blurry photos',
        'Blurry document',
        'Expired document',
        'Invalid document',
        'IBAN not found',
      ],
    };
  },
  methods: {
    ...mapActions('Hosts', ['Delete_Host', 'Enable_Host', 'Select_Host']),
    ...mapActions('ParkingSlots', ['ParkingSlotsbyHost']),
    editHs() {
      this.$emit('editHs', true);
    },
    deleteHs() {
      this.Delete_Host(this.obj.id);
      toast.success('Deleted!');
      this.$emit('deleteHs', true);
    },
    Enable() {
      this.Enable_Host(this.obj);
      if(this.obj.status == true)
        toast.success('Allowed!');
      else
        toast.success('Disabled!');
    }
  },
};
</script>
