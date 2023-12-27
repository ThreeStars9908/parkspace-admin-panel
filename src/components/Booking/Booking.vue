<template>
    <div>
      <div v-if="isGeral">
        <div class="filter">
          <orders-filter-component />
        </div>
        <div class="block-graph">
          <orders-block-graph-component />
        </div>
        <div class="tab">
          <orders-table-component @changeToDescript="changeToDescript" />
        </div>
      </div>
      <div v-if="!isGeral">
        <finance-specific-page-component @changeToDescript="changeToDescript" />
      </div>
    </div>
  </template>
  
  <script>
  import OrdersFilterComponent from './OrdersFilterComponent.vue';
  import OrdersBlockGraphComponent from './OrdersBlockGraphComponent.vue';
  import OrdersTableComponent from './OrdersTableComponent.vue';
  import FinanceSpecificPageComponent from './FinanceSpecificPageComponent.vue';

  export default {
    name: 'GeralOrdersSubpageComponent',
    components: {
      OrdersFilterComponent,
      OrdersBlockGraphComponent,
      OrdersTableComponent,
      FinanceSpecificPageComponent,

    },
    data() {
      return {
        isGeral: true,
      };
    },
    methods: {
      changeToDescript(val) {
        this.isGeral = val;
      },
    },
  };
  </script>
  