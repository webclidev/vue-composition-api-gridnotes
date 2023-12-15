<template>
  <v-container>
    <AddNewNote class="mb-6" @addNewNote="notesStore.addNote" />
    <v-row align="center" justify="center">
      <v-col v-for="note in notesStore.notes" :key="note.id" cols="auto">
        <Note :note="note" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Note from "@/components/Note.vue";
import AddNewNote from "@/components/AddNewNote.vue";
import { useNotesStore } from "@/store/notesStore.js";

const notesStore = useNotesStore();
</script>
