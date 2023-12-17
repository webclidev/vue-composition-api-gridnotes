<template>
  <v-container>
    <NoteEditor
      class="mb-6 bg-primary"
      v-model:textarea="noteText"
      ref="noteTextRef"
      placeholder="Add a new note"
    >
      <template #action>
        <v-btn
          variant="tonal"
          prepend-icon="mdi-note-text-outline"
          class="text-capitalize px-5"
          @click="addNewNoteHandler"
          :disabled="!noteText.trim()"
          >Add new note</v-btn
        >
      </template>
    </NoteEditor>
    <v-row align="center" justify="center">
      <template v-if="notesStore.notes.length">
        <v-col v-for="note in notesStore.notes" :key="note.id" cols="auto">
          <Note :note="note" />
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12" align="center">
          <v-icon
            icon="mdi-note-off-outline"
            color="grey-lighten-2"
            size="200"
            class="mt-16"
          ></v-icon>
        </v-col>
        <v-col align="center">
          <p class="text-grey">Oops no notes to show!</p>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import Note from "@/components/Note.vue";
import NoteEditor from "@/components/NoteEditor.vue";
import { useNotesStore } from "@/store/notesStore.js";
import { ref } from "vue";

const noteText = ref("");
const noteTextRef = ref(null);

const notesStore = useNotesStore();

const addNewNoteHandler = () => {
  notesStore.addNote(noteText.value);
  noteText.value = "";
  noteTextRef.value.focus();
};
</script>
