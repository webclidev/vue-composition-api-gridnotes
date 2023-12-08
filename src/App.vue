<template>
  <div>
    <RouterLink to="/">Notes</RouterLink> |
    <RouterLink to="/stats">Stats</RouterLink>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
