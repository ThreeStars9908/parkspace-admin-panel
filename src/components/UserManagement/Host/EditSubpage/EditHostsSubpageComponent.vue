<template>
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[51px] mb-[36px]">
      <div class="col1">
        <photo-data-component />
        <user-data-component  @showH="(val) => this.$emit('showHost', val)" />
        <payment-data-component />
      </div>
      <div class="col2">
        <parking-spots-component />
      </div>
    </div>
    <div>
      <host-history-table-component />
    </div>
  </div>
</template>

<script>
import UserDataComponent from './UserDataComponent.vue';
import PhotoDataComponent from './PhotoDataComponent.vue';
import PaymentDataComponent from './PaymentDataComponent.vue';
import ParkingSpotsComponent from './ParkingSpotsComponent.vue';
import HostHistoryTableComponent from './HostHistoryTableComponent.vue';

export default {
  name: 'EditHostsSubpageComponent',
  components: {
    UserDataComponent,
    PhotoDataComponent,
    PaymentDataComponent,
    ParkingSpotsComponent,
    HostHistoryTableComponent,
  },
};
</script>
