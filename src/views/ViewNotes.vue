<template>
  <v-container>
    <AddNewNote class="mb-6" @addNewNote="addNoteHandler" />
    <v-row align="center" justify="center">
      <v-col v-for="note in notes" :key="note.id" cols="auto">
        <Note :note="note" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Note from "@/components/Note.vue";
import AddNewNote from "@/components/AddNewNote.vue";
import { ref } from "vue";

const generateUUID = () => crypto.randomUUID();

const notes = ref([
  {
    id: "ef8772a9-85e8-5840-9d0d-4812d357b2de",
    content:
      "means busy help open capital storm time nodded driver sides gasoline percent arrange manner occasionally captain musical share pocket escape related building available shown",
  },
  {
    id: "4922760d-1863-50e2-8c4c-27a096fef55a",
    content:
      "suggest whether molecular part some over furniture suddenly southern serve citizen were upper region doing surface arrangement slightly dangerous victory edge fine heard row",
  },
]);

const addNoteHandler = (content) => {
  notes.value.unshift({
    id: generateUUID(),
    content,
  });
};
</script>
