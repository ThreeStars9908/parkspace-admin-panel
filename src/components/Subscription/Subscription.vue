<template>
  <div class="subscription">
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-24">
      <div className="h-full col-span-2">
        <bar-graph />
      </div>
      <div className="h-full">
        <card-box text="Active subscriptions"
          icon="fa fa-check-circle"
          color="#0F83C9" value="0"
          class="h-full" />
      </div>
    </div>
    <div className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <active-regions-block-component @showAddNewRegions="showAddNewRegions" />
        </div>
        <div v-if="addNew">
          <addnew-regions-block-component @showAddNewRegions="showAddNewRegions" />
        </div>
      </div>
    </div>
    <div className="mt-6">
      <subscription-table-component />
    </div>
  </div>
</template>

<script>
import CardBox from '../../items/CardBox.vue'
import BarGraph from './BarGraph.vue'
import ActiveRegionsBlockComponent from './ActiveRegionsBlockComponent.vue'
import AddnewRegionsBlockComponent from './AddnewRegionsBlockComponent.vue'
import SubscriptionTableComponent from './SubscriptionTableComponent.vue'

import { mapState, mapActions } from 'vuex';

export default {
    name: 'SubScription',
    data() {
      return {
        addNew: false,
      };
    },
    components: {
        CardBox,
        BarGraph,
        ActiveRegionsBlockComponent,
        AddnewRegionsBlockComponent,
        SubscriptionTableComponent
    },
    computed: {
        ...mapState('Subscriptions', ['active']),
    },
    methods: {
        ...mapActions('Subscriptions', ['Show_Subscriptions']),
        showAddNewRegions(val) {
            this.addNew = val;
        },
    },
    created() {
        this.Show_Subscriptions();
    },
}
</script>
