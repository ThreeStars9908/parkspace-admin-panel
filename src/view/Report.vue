<template>
  <div class="report">
    <page-header title="Reports" />
    <div class="mt-4">
      <revenue-filters />
    </div>
    <div class="mt-4">
      <revenue-graph />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-center gap-6 mt-4">
      <div class="col-span-2">
        <composition-graph />
      </div>
      <card-last-box title="Revenue"
                today="$ 0.00"
                this_week="$ 0.00"
                this_month="$ 0.00"
                this_year="$ 0.00"/>
    </div>
    <div class="mt-4">
      <report-table />
    </div>
  </div>
</template>

<script>
import CompositionGraph from '../components/Report/CompositionGraph.vue'
import RevenueFilters from '../components/Report/Revenue filters.vue'
import RevenueGraph from '../components/Report/RevenueGraph.vue'
import ReportTable from '../components/Report/ReportTable.vue'
import CardLastBox from '../items/CardLastBox.vue'
import PageHeader from '../items/PageHeader.vue'

export default {
  name: 'ReportView',
  components: {
    PageHeader,
    RevenueGraph,
    RevenueFilters,
    CardLastBox,
    CompositionGraph,
    ReportTable
  },
}
</script>
