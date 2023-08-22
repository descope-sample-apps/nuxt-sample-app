<script setup lang="ts">
const { status, data, signOut, signIn } = useSession();
</script>

<template>
  <nav class="bg-black">
    <div class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <a href="https://descope.com" target="_blank">
          <img src="/img/descope-logo.png" alt="Descope Logo" class="w-32" />
        </a>
        <div class="space-x-4 hidden md:flex">
          <nuxt-link
            to="/"
            class="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/protected/page"
            class="text-gray-400 hover:text-white transition duration-300"
          >
            Protected Page
          </nuxt-link>
        </div>
        <div class="space-x-4 flex items-center">
          <button
            v-if="status === 'authenticated'"
            class="hidden md:block bg-red-600 hover:bg-red-600 text-white font-semibold py-1 px-6 rounded-md border border-red-500 hover:border-red-600 transition duration-300 shadow-md"
            @click="signOut({ callbackUrl: '/' })"
          >
            <span>Logout</span>
          </button>
          <button
            v-else
            class="hidden md:block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-6 rounded-md border border-gray-600 hover:border-gray-500 transition duration-300 shadow-md"
            @click="signIn()"
          >
            <span>Login</span>
          </button>
          <div class="border-l-2 border-gray-700 h-5 mx-4"></div>
          <a
            href="https://github.com/descope"
            target="_blank"
            class="text-gray-400 hover:text-white transition duration-300"
          >
            <i class="fa-brands fa-github text-lg" />
          </a>
          <a
            href="https://authtown.slack.com"
            target="_blank"
            class="text-gray-400 hover:text-white transition duration-300"
          >
            <i class="fa-brands fa-slack text-lg" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
