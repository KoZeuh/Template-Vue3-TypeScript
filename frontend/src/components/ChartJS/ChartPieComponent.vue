<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Pie } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement);

  export default defineComponent({
    name: 'PieChartComponent',
    components: {
      Pie,
    },
    setup() {
      return {
        chartData: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Dataset One',
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
              data: [12, 19, 3, 5, 2, 3],
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
