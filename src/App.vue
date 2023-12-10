<template>
  <v-app>
    <v-main>
      <Navbar />

      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
</script>
