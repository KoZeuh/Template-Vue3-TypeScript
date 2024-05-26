<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
          <font-awesome-icon class="mr-2" icon="camera" />
          Tutorial
        </a>
        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">How to quickly deploy a static website</h1>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
        <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Read more
          <font-awesome-icon class="ms-2" icon="arrow-right" />
        </a>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
            <font-awesome-icon class="mr-2" icon="pencil" />
            Design
          </a>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
            <font-awesome-icon class="ms-2" icon="arrow-right" />
          </a>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
            <font-awesome-icon class="mr-2" icon="code" />
            Code
          </a>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
            <font-awesome-icon class="ms-2" icon="arrow-right" />
          </a>
        </div>
      </div>
    </div>

  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
    components: {},
    setup() {},
  });
</script>

<style scoped>
</style>