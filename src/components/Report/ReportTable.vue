<template>
  <div class="report-table 
    shadow-[4px_6px_30px_0px_#00000020] rounded-lg
    p-8 relative overflow-auto">
    <div class="title mb-4">
        <div class="text-left font-semibold">
            Report
        </div>
    </div>
    <table class="w-full text-sm text-center">
        <thead class="text-md text-left border-b-[1px] border-[#C9C9C9]">
            <tr class="text-[#3F3F44]">
                <th class="px-6 py-3 text-left">Date</th>
                <th class="px-6 py-3 text-center">Bookings Total</th>
                <th class="px-6 py-3 text-center">Profit Total</th>
                <th class="px-6 py-3 text-center">Payments</th>
                <th class="px-6 py-3 text-right">Markup (%)</th>
            </tr>
        </thead>
        <tbody>
            <!-- <report-table-item :obj="objeto" /> -->
        </tbody>
    </table>
  </div>
</template>

<script>
// import ReportTableItem from './ReportTableItem.vue';

export default {
    name: 'ReportTable',
    components: {
        // ReportTableItem,
    },
    data() {
        return {
            objeto: {
                date: "",
                bookings: '',
                profit: '',
                payments: '',
                markup: '',
            },
        }
    },
}
</script>
