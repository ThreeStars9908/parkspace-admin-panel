<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <tr class="text-center">
    <td className="px-6 py-3">
      {{ this.obj.slot }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.client }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.host }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.review_host }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.review_client }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.review_from_user }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.review_from_host }}
    </td>
    <td className="px-6 py-3">
      {{ this.obj.review_left }}
    </td>
    <td className="px-6 py-3">
      <VueToggles :v-model="this.obj.enable"
                  :height="18"
                  :width="36"
                  checkedBg="#1C8E33"
                  style="margin-left: auto; margin-right: auto;" />
    </td>
    <td className="px-6 py-3">
      <span className="cursor-pointer" @click="deleteHs">
        <base-icon name="fa fa-trash-can" color="#323232" />
      </span>
    </td>
  </tr>
</template>

<script>
import { VueToggles } from 'vue-toggles';
import BaseIcon from '../../items/BaseIcon.vue';

export default {
  name: 'ReviewsTableItemComponent',
  props: ['obj'],
  components: { VueToggles, BaseIcon },
  data() {
    return {
      contract: true,
      enable: true,
    };
  },
  methods: {
    deleteHs() {
      this.$emit('deleteHs', true);
    },
  },
};
</script>
