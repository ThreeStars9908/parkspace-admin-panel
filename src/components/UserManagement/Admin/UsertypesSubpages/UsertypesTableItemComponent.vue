<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-left">
      {{ this.obj.name }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center max-w-[300px]">
      {{ this.obj.users }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px]">
      <VueToggles v-model="this.obj.enable"
                  :height="28"
                  :width="54"
                  checkedBg="#1C8E33"
                  @click="Enable_Usertype(this.obj)"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="py-[24px] text-center">
      <span className="cursor-pointer mr-2"
        @click="this.$emit('changeG', 'EditUsertype'), this.Selete_Usertype(this.obj)">
        <base-icon name="fa fa-pen" />
      </span>
      <span className="cursor-pointer"
        @click="this.$emit('deleteU', true), this.Selete_Usertype(this.obj)">
        <base-icon name="fa fa-trash-can" />
      </span>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'UsertypesTableItemComponent',
  components: {
    VueToggles,
    BaseIcon,
  },
  props: ['obj'],
  data() {
    return {
      enable: true,
    };
  },
  methods: {
    ...mapActions('Admins', ['Selete_Usertype', 'Enable_Usertype']),
  },
};
</script>
