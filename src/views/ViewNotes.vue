<template>
  <v-container>
    <AddNewNote class="mb-6" />
    <v-row align="center" justify="center">
      <v-col v-for="m in 4" :key="m" cols="auto">
        <Note :url="`/${m}`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Note from "@/components/Note.vue";
import AddNewNote from "@/components/AddNewNote.vue";
</script>
