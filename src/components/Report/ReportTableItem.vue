<template>
  <tr>
      <td class="px-6 py-3 text-left">
        {{ this.obj.date }}
      </td>
      <td class="px-6 py-3">
        {{ this.obj.bookings }}
      </td>
      <td class="px-6 py-3">
        {{ this.obj.profit }}
      </td>
      <td class="px-6 py-3 font-semibold text-[#1486CA]">
        $ {{ this.obj.payments.toFixed(2) }}
      </td>
      <td class="px-6 py-3 text-right ml-auto">
        {{ this.obj.markup }}
      </td>
  </tr>
</template>

<script>
export default {
    name: 'ReportTableItem',
    props: ['obj'],
}
</script>
