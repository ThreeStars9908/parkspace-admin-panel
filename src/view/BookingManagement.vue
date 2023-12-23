<template>
    <div class="booking_management">
        <page-header title="Booking management and Finance"/>
        <div class="submenu"
            className="mt-[21px]">
            <div className="grid grid-cols-2">
                <div className="mr-auto">
                <div class="menu"
                    className="flex flex-row
                    text-[16px] font-normal">
                    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
                    <div :className="['mr-[57px] cursor-pointer '
                    + (this.isGeral ? 'font-semibold' : '')]"
                        @click="changePage(true)">
                    Bookings
                    </div>
                    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
                    <div :className="['cursor-pointer '
                    + (!this.isGeral ? 'font-semibold' : '')]"
                        @click="changePage(false)">
                    Finance settings
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="subpage">
            <div v-if="isGeral">
                <geral-orders-subpage-component />
            </div>
            <div v-else>
                <finance-subpage-component />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../items/PageHeader.vue'
import FinanceSubpageComponent from '../components/Finance/Finance.vue'
import GeralOrdersSubpageComponent from '../components/Booking/Booking.vue'

export default {
    name: 'BookingManagementView',
    components: {
        PageHeader,
        FinanceSubpageComponent,
        GeralOrdersSubpageComponent,
    },
    data() {
        return {
        isGeral: true,
        };
    },
    methods: {
        ...mapActions('Booking', ['Show_Booking']),
        changePage(val) {
        this.isGeral = val;
        },
    },
    created() {
        this.Show_Booking();
    },
}
</script>
