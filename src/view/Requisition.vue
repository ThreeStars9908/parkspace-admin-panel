<template>
    <div class="requisition">
        <page-header title="requisition" />
        <div class="table-component">
            <hosts-table-component @showHost="(val) => this.view_detail = val" />
            <parking-spots-component />
        </div>
        <div class="edit-sub-page"
            v-if="view_detail">
            <!-- <edit-hosts-subpage-component @showHost="(val) => this.view_detail = val" /> -->
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../../src/assets/components/headers/PageHeader.vue'
import HostsTableComponent from '../components/Requisition/HostsTableComponent.vue'
import ParkingSpotsComponent from '../components/Requisition/ParkingSpotsTableComponent.vue'

export default {
    name: 'RequisitionView',
    data() {
        return {
          view_detail: false,
        };
    },
    components: {
        PageHeader,
        HostsTableComponent,
        ParkingSpotsComponent,
        // EditHostsSubpageComponent,
    },
    
    methods: {
      ...mapActions('ParkingSlots', ['Show_All_ParkingSlots', 'Show_ParkingSlots']),
      ...mapActions('Hosts', ['Get_Hosts']),
    },
    created() {
      this.Show_All_ParkingSlots();
      this.Show_ParkingSlots();
      this.Get_Hosts();
    },
}
</script>
