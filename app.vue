<template>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Descope + NuxtAuth",
});
</script>
