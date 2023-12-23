<template>
  <div class="cashback">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <bars-cashback-graph-component />
        <bars-invites-graph-component />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <cashback-block-component />
        <settime-cashback-block-component />
    </div>
    <div class="table-component">
        <cashback-table-component />
    </div>
  </div>
</template>

<script>
import BarsCashbackGraphComponent from './BarsCashbackGraphComponent.vue'
import BarsInvitesGraphComponent from './BarsInvitesGraphComponent.vue'
import CashbackBlockComponent from './CashbackBlockComponent.vue'
import CashbackTableComponent from './CashbackTableComponent.vue'
import SettimeCashbackBlockComponent from './SettimeCashbackBlockComponent.vue'
import { mapActions } from 'vuex'

export default {
    name: 'CashBack',
    components: {
        BarsCashbackGraphComponent,
        BarsInvitesGraphComponent,
        CashbackBlockComponent,
        SettimeCashbackBlockComponent,
        CashbackTableComponent,
    },
    methods: {
        ...mapActions('Subscriptions', ['Show_Cashback']),
    },
    created() {
        this.Show_Cashback();
    },
}
</script>
