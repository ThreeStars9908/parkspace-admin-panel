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
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
      {{ this.obj.role }}
    </td>
    <td className="text-[#3F3F44] text-[14px] font-light py-[24px]">
      <VueToggles v-model="this.obj.status"
                  :height="24"
                  :width="48"
                  checkedBg="#1C8E33"
                  @click="Change_Status_Admin(this.obj)"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="py-[24px] text-center">
      <span className="cursor-pointer mr-2" @click="this.$emit('editA', true), this.Selected_Admin(this.obj)">
        <base-icon name="fa fa-pen"
                   color="#008AB6"
                   scale="1.25" />
      </span>
      <span className="cursor-pointer" @click="Delete_Admin(this.obj.id)">
        <base-icon name="fa fa-trash-can"
                   color="#008AB6"
                   scale="1.25" />
      </span>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '../../../../items/BaseIcon.vue';

export default {
  name: 'ResisteredAdminTableItemComponent',
  components: { 
    VueToggles,
    BaseIcon,
  },
  props: ['obj'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions('Admins', ['Delete_Admin', 'Selected_Admin', 'Change_Status_Admin']),
  },
};
</script>
