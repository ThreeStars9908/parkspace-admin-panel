<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <tr className="text-[#3F3F44] text-[14px]">
    <td className="px-6 py-3 text-left w-[200px]">
      <!-- {{ this.obj.userId }} -->Host name
    </td>
    <td className="px-6 py-3 text-left">
      {{ this.obj.parkingSlotId }}Parking slot name
    </td>
    <td className="px-6 py-3 text-center">
      {{ this.obj.range }}
    </td>
    <td className="px-6 py-3 text-center">
      {{ this.obj.time }}
    </td>
    <td className="text-[#008AB6] text-[16px] font-semibold px-6 py-3 text-center">
      $ {{ this.obj.price.toFixed(2) }}
    </td>
    <td className="px-6 py-3 text-center">
      <!-- {{ this.obj.ad_views }} views --> 0 views
    </td>
    <td className="px-6 py-3 text-center">
      <!-- {{ this.obj.booked_time }} --> 0
    </td>
    <td className="font-bold px-6 py-3  text-center">
      {{ this.obj.status }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'SubscriptionTableItemComponent',
  props: ['obj'],
  data() {
    return {
      contract: true,
      enable: true,
    };
  },
  methods: {
  },
};
</script>
