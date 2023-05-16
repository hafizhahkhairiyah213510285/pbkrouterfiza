<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-cyan-50 fixed top-0 left-0 w-full items-center flex ">
    <div class="container mx-auto">
      <nav class="flex justify-center items-center py-3">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500">
          <li class="mr-2">
            <RouterLink class="inline-block p-4 hover:text-cyan-600 hover:bg-cyan-50 rounded-t-lg" to="/">Home</RouterLink>
          </li>
          <li class="mr-2">
            <RouterLink class="inline-block p-4 rounded-t-lg hover:text-cyan-600 hover:bg-cyan-50" to="/aplikasiku">AplikasiKu</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView class="pt-32"/>
</template>

<style scoped>
nav a.router-link-exact-active {
  @apply text-cyan-600;
  @apply bg-cyan-100;
}


</style>
