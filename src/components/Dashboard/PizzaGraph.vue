<template>
    <div class="pizza-graph">
        <div className="shadow-[4px_6px_30px_0px_#00000020]
            px-6 py-8 rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="text-left font-semibold">
                    {{ $t('appointments') }}
                </div>
                <div className="text-right font-semibold">
                    0.00
                </div>
            </div>
            <div className="m-auto">
                <Doughnut :data="values"
                    :options="options" />    
            </div>
        </div>
    </div>
</template>

<script>
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
    name: 'PizzaGraph',
    components: {
        Doughnut,
    },
    data() {
        return {
        values: {
            labels: [this.$t('cancelled'), this.$t('completed'), this.$t('ongoing')],
            datasets: [
            {
                backgroundColor: ['#FBC820', '#1486CA', '#1C8E33', '#E5333E'],
                data: [0, 0, 0, 0],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
            legend: {
                position: 'right',
                labels: {
                usePointStyle: true,
                boxWidth: 10,
                boxHeight: 8,
                },
            },
            },
        },
        };
    },
}
</script>
