<template>
    <div class="bar-graph">
        <div className="shadow-[4px_6px_30px_0px_#00000020]">
            <div className="text-left font-semibold">
                {{ title }}
            </div>
            <Bar :data="values"
                :options="options" />
        </div>
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
    name: 'BarGraph',
    components: {
        Bar,
    },
    props: {
        title: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            values: {
                labels: [
                    'Ads booked',
                    'Ads viewed',
                ],
                datasets: [
                    {
                        label: 'Values',
                        backgroundColor: ['#17BEBF', '008AB6'],
                        data: [150, 20],
                    },
                ],
            },
            options: {
                indexAxis: 'y',
                responsive: false,
                maintainAspectRatio: false,
                barValueSpacing: 20,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }
        }
    }
}
</script>
