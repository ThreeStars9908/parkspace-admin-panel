<!-- eslint-disable -->
<template>
  <tr>
    <td className="text-[#3F3F44] font-light py-[24px] text-left">
      {{ this.obj.id }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-left">
      {{ this.obj.parkingSlot.user.name }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center w-[160px]">
      {{ this.obj.parkingSlot.address }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center w-[120px]">
      {{ this.obj.booking_time.substr(0, 10) }}
      {{ this.obj.booking_time.substr(0, 10) }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center w-[120px]">
      {{ this.obj.begin_time.substr(0, 10) }}
      {{ this.obj.begin_time.substr(0, 10) }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center w-[120px]">
      {{ this.obj.end_time.substr(0, 10) }}
      {{ this.obj.end_time.substr(0, 10) }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.status }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.status }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      {{ this.obj.rating ? this.obj.rating: '- -' }}
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      - -
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      - -
    </td>
    <td className="text-[#3F3F44] font-light py-[24px] text-center">
      Confirmed
    </td>
    <td className="py-[24px] text-center">
      <span className="cursor-pointer">
        <base-icon name="fa fa-plus-circle" />
      </span>
    </td>
  </tr>
</template>

<script>
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'WashHistoryTableItemComponent',
  props: ['obj'],
  components: {
    BaseIcon
  }
};
</script>
