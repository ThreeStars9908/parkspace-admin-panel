<template>
  <tr>
    <td className="px-6 py-4 text-left">
      {{ this.obj.user.name }}
    </td>
    <td className="px-6 py-4 text-left">
      {{ this.obj.parkingSlot.user.name }}
    </td>
    <td className="px-6 py-4 text-center">
      {{ Calc() }} hours
    </td>
    <td className="px-6 py-4 text-center">
      {{ this.obj.parkingSlot.address }}
    </td>
    <td className="px-6 py-4 text-[#045C9C] font-semibold text-center">
      $ {{ this.obj.prices.toFixed(2) }}
    </td>
    <td className="px-6 py-4 text-center">
      {{ this.obj.begin_time.substr(0, 10) }}
      {{ this.obj.end_time.substr(0, 10) }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableItemComponent',
  props: ['obj'],
  methods: {
    Calc() {
      const sdt = new Date(this.obj.begin_time);
      const edt = new Date(this.obj.end_time);
      return (edt - sdt) / (3600 * 1000);
    },
  },
};
</script>
