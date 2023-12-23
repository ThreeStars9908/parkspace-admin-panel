<!-- eslint-disable -->
<template>
    <div class="finance-settings">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">        
          <schedule-automatic-component />
          <cancellation-plan-block-component />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <markup-block-component />
      </div>
    </div>
  </template>
  <!-- eslint-disable -->
  <script>
  import MarkupBlockComponent from './MarkupBlockComponent.vue';
  import CancellationPlanBlockComponent from './CancellationPlanBlockComponent.vue';
  import ScheduleAutomaticComponent from './ScheduleAutomaticComponent.vue';
  
  export default {
    name: 'FinanceSubpageComponent',
    components: {
      MarkupBlockComponent,
      CancellationPlanBlockComponent,
      ScheduleAutomaticComponent,
    },
    data() {
      return {};
    },
  };
  </script>
  