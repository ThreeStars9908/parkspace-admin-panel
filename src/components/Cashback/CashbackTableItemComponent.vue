<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <tr className="text-[#3F3F44] text-[14px]">
    <td className="px-6 py-3  text-left">
      {{ this.obj.id }}
    </td>
    <td className="px-6 py-3  text-left">
      {{ this.obj.host }}
    </td>
    <td className="px-6 py-3  text-left">
      {{ this.obj.client }}
    </td>
    <td className="px-6 py-3  text-center">
      {{ this.obj.parking_spot }}
    </td>
    <td className="px-6 py-3  text-center">
      {{ this.obj.date }}
    </td>
    <td className="text-[#008AB6] text-[16px] font-semibold px-6 py-3  text-center">
      {{ this.obj.cashback_percent }} %
    </td>
    <td className="text-[#008AB6] text-[16px] font-semibold px-6 py-3  text-center">
      $ {{ this.obj.price.toFixed(2) }}
    </td>
    <td className="text-[#008AB6] text-[16px] font-semibold px-6 py-3  text-center">
      $ {{ this.obj.amount.toFixed(2) }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CashbackTableItemComponent',
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
