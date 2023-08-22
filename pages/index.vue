<template>
  <Welcome />
</template>

<script lang="ts" setup>
definePageMeta({ auth: false });
</script>

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-green-400;
}
</style>
