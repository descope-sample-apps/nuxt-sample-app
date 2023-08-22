<template>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
  >
    <div class="fixed left-0 right-0 spotlight z-10"></div>
    <div class="max-w-520px text-center z-20">
      <p
        class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight"
      >
        See all available session information below:
      </p>

      <div class="text-left p-5 bg-gray-800 rounded-lg">
        <pre v-if="status"><span>Status:</span> {{ status }}</pre>
        <pre v-if="data"><span>Data:</span> {{ data }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, status } = useSession();
</script>

<style scoped>
pre {
  @apply bg-transparent text-white p-2 my-3;
}

pre span {
  @apply text-green-400;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
