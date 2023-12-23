<template>
  <div>
    <div className="w-full h-[240px] p-6
    shadow-[4px_6px_30px_0px_#00000020] flex flex-col justify-between">
      <div className="text-[16px] font-semibold text-[#3F3F44] text-left">
        Cashback data
      </div>
      <Bar :data="values"
           :options="options"
           style="height:174px;" />
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
  name: 'BarsCashbackGraphComponent',
  components: {
    Bar,
  },
  data() {
    return {
      values: {
        labels: [
          'Used inside the app',
          'Saved',
          'Cashback gifted',
        ],
        datasets: [
          {
            label: 'Values',
            backgroundColor: ['#17BEBF', '#EDBD3A', '#008AB6'],
            data: [300, 400, 500],
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
      },
    };
  },
};
</script>
