<template>
    <div class="bar-graph">
        <div className="h-full shadow-[4px_6px_30px_0px_#00000020] px-6 py-8">
            <div className="text-left font-semibold mb-4">
                Subscription data
            </div>
            <div className="mb-2">
                <Bar :data="values"
                    :options="options" />
            </div>
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
                        backgroundColor: ['#17BEBF', '#008AB6'],
                        data: [6000, 10000],
                    },
                ],
            },
            options: {
                indexAxis: 'y',
                responsive: true,
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
