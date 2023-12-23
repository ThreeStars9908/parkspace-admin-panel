<template>
    <div class="revenue-graph">
        <div className="h-full shadow-[4px_6px_30px_0px_#00000020] px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-4">
                <div className="text-left font-semibold">
                    Revenue
                </div>
                <div className="flex flex-row">
                    <div className="w-2 h-2 rounded-full
                    bg-[#1486CA] mx-2 m-auto" />
                    Bookings
                    <div className="w-2 h-2 rounded-full
                    bg-[#79CCFF] mx-2 m-auto" />
                    Profit
                </div>
                <div className="text-sm text-right text-[#3F3F44]">
                    Last 12 months
                </div>
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
    name: 'RevenueGraph',
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
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
                ],
                datasets: [
                    {
                        label: 'Washes',
                        backgroundColor: '#1486CA',
                        data: [3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4],
                    }, {
                        label: 'Profit',
                        backgroundColor: '#79CCFF',
                        data: [4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5],
                    },
                ],
            },
            options: {
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
