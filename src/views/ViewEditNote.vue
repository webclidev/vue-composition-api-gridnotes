<template>
  <v-container>
    <NoteEditor
      class="mb-6"
      v-model:textarea="noteText"
      ref="noteTextRef"
      placeholder="Edit note"
    >
      <template #action>
        <v-btn
          variant="tonal"
          prepend-icon="mdi-note-edit-outline"
          class="text-capitalize px-5"
          @click="editNoteHandler"
          :disabled="!noteText.trim()"
          >Edit note</v-btn
        >
      </template>
    </NoteEditor>
  </v-container>
</template>

<script setup>
import NoteEditor from "@/components/NoteEditor.vue";
import { useNotesStore } from "@/store/notesStore.js";
import { ref } from "vue";

const noteText = ref("");
const noteTextRef = ref(null);

const notesStore = useNotesStore();

const editNoteHandler = () => {};
</script>
