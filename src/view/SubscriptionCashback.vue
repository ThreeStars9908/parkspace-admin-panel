<template>
    <div class="subscription_cashback">
        <page-header title="Subscriptions and Cashback" />
        <div class="submenu"
        className="mt-4">
        <div className="grid grid-cols-2">
          <div className="mr-auto">
            <div class="menu"
              className="flex flex-row text-[16px] font-normal">
              <div :className="['mr-[57px] cursor-pointer '
                + (this.isPage ? 'font-semibold' : '')]"
                @click="changePage(true)">
                Subscriptions
              </div>
              <div :className="['cursor-pointer '
                + (!this.isPage ? 'font-semibold' : '')]"
                @click="changePage(false)">
                Cashback
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="subpage">
        <div v-if="isPage">
            <sub-scription />
        </div>
        <div v-if="!isPage">
            <cash-back />
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../items/PageHeader.vue'
import SubScription from '../components/Subscription/Subscription.vue'
import CashBack from '../components/Cashback/Cashback.vue';

export default {
    name: 'SubscriptionCashbackView',
    data() {
        return {
          isPage: true,
        };
    },
    components: {
        PageHeader,
        SubScription,
        CashBack
    },
    methods: {
      ...mapActions('Ranges', ['Show_Ranges']),
      ...mapActions('Hosts', ['Get_Hosts']),
      changePage(val) {
        this.isPage = val;
      },
    },
    created() {
      this.Show_Ranges();
      this.Get_Hosts();
    },
}
</script>
