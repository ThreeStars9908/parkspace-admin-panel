<template>
    <div class="dashboard">
        <page-header title="Dashboard" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            <div className="col-span-2">
                <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <card-box text="Total Revenue"
                        icon="fa-solid fa-dollar"
                        color="#0F83C9"
                        value="$ 0.00" />
                    <card-box text="Total Profit"
                        icon="fa fa-dollar"
                        color="#0F83C9"
                        value="$ 0.00" />
                    <card-box text="Users"
                        icon="fa fa-user"
                        color="#0F83C9"
                        value="0" />
                    <card-box text="Active parking slots"
                        icon="fa fa-location-dot"
                        color="#0F83C9"
                        value="0" />
                </div>
            </div>
            <card-last-box title="Revenue"
                today="$ 0.00"
                this_week="$ 0.00"
                this_month="$ 0.00"
                this_year="$ 0.00"/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-4">
            <div className="h-full">
                <bar-graph />
            </div>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <pizza-graph />
                <review-box title="Total rating"
                total="0" first="0" second="0" third="0" fourth="0" fifth="0" average="0"
                />
            </div>
        </div>
        <div className="w-full mt-8">
            <last-appointments-table-component />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CardLastBox from '@/items/CardLastBox.vue'
import CardBox from '../items/CardBox.vue'
import PageHeader from '../items/PageHeader.vue'
import PizzaGraph from '../components/Dashboard/PizzaGraph.vue'
import BarGraph from '../components/Dashboard/BarGraph.vue'
import ReviewBox from '../items/ReviewBox.vue'
import LastAppointmentsTableComponent from '../components/Dashboard/LastAppointmentsTableComponent.vue';

// import { toast } from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'

export default {
    name: 'DashboardView',
    components: {
        PageHeader,
        CardBox,
        CardLastBox,
        BarGraph,
        PizzaGraph,
        ReviewBox,
        LastAppointmentsTableComponent
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('Booking', ['Show_Booking']),
    },
    created() {
        this.Show_Booking();
    },
}
</script>
