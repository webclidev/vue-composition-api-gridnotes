<template>
  <div>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </div>

  <RouterView></RouterView>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
