<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="m in 4" :key="m" cols="auto">
        <SingleNote :url="`/${m}`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SingleNote from "@/components/SingleNote.vue";
</script>
