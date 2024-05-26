<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

  export default defineComponent({
    name: 'ChartLineComponent',
    components: {
      Line,
    },
    setup() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Data One',
              borderColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39],
              fill: false,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
  });
</script>

<style scoped>
</style>
