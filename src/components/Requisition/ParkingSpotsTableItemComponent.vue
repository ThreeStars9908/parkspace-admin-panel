<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.user.name }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.user.email }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-left">
      {{ this.obj.user.cellphone }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center
    cursor-pointer underline underline-offset-1"
    @click="this.$emit('showH', true);">
      {{ this.obj.address }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center
    cursor-pointer underline underline-offset-1"
    @click="this.$emit('showH', true);">
      {{ this.obj.description }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-semibold px-6 py-3 text-center cursor-pointer">
      <span className="cursor-pointer mr-4">
        <base-icon name="fa fa-eye" color="#323232" />
      </span>
      <span className="cursor-pointer">
        <base-icon name="fa fa-download" color="#323232" />
      </span>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <select v-model="type"
          class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8] border-solid border-2 border-[#000]">
          <option v-for="(element, index) in negative_options"
            v-bind:key="index" :value="element">{{ element }}</option>
        </select>
    </td>
    <td className="h-[40px] text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <div className="py-2 bg-[#008AB6] w-[110px] px-4 font-semibold m-auto
        text-white rounded-lg cursor-pointer">Send</div>
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light px-6 py-3 text-center">
      <VueToggles v-model="this.obj.status"
                  :height="18"
                  :width="36"
                  @click="Enable"
                  checkedBg="#1C8E33"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="px-6 py-3 text-center">
      <span className="cursor-pointer" @click="deleteHs">
        <base-icon name="fa fa-trash-can" color="#323232" />
      </span>
    </td>
  </tr>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
  name: 'ParkingSpotsTableItemComponent',
  props: ['obj'],
  components: { VueToggles, BaseIcon },
  data() {
    return {
      contract: true,
      enable: true,
      negative_options: [
        'Blurry photos',
        'Address problems',
      ],
    };
  },
  methods: {
    ...mapActions('ParkingSlots', ['Delete_ParkingSlots', 'Enable_ParkingSlots']),
    editHs() {
      this.$emit('editHs', true);
    },
    deleteHs() {
      this.Delete_ParkingSlots(this.obj);
      toast.success('Deleted!');
      this.$emit('deleteHs', true);
    },
    Enable() {
      this.Enable_ParkingSlots(this.obj);
      if(this.obj.status == true)
        toast.success('Allowed!');
      else
        toast.success('Disabled!');
    }
  },
};
</script>
