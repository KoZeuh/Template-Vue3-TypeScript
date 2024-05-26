<template>
  <section class="bg-white dark:bg-gray-900">
    <h1 class="text-3xl font-bold text-center mb-5"><font-awesome-icon class="mr-2" icon="arrow-down"/> ChartJS Usage Example <font-awesome-icon class="ms-2" icon="arrow-down"/></h1>
    <h4 class="text-3xl font-bold text-center mb-5"><font-awesome-icon class="mr-2" icon="arrow-down"/> Bar + Line + Pie <font-awesome-icon class="ms-2" icon="arrow-down"/></h4>

    <ChartBarComponent />
    <ChartPieComponent />
    <ChartLineComponent />
  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ChartBarComponent from '../components/ChartJS/ChartBarComponent.vue';
  import ChartPieComponent from '../components/ChartJS/ChartPieComponent.vue';
  import ChartLineComponent from '../components/ChartJS/ChartLineComponent.vue';


  export default defineComponent({
    name: 'Chart',
    components: {
      ChartBarComponent,
      ChartPieComponent,
      ChartLineComponent
    },
    setup() {},
  });
</script>

<style scoped>
</style>