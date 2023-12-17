<template>
  <v-container>
    <NoteEditor
      class="mb-6 bg-blue-grey-darken-4"
      v-model:textarea="noteText"
      ref="noteTextRef"
      placeholder="Edit note"
      label="Edit Note"
      max-rows="19"
    >
      <template #action>
        <v-btn
          variant="tonal"
          prepend-icon="mdi-keyboard-backspace"
          class="text-capitalize px-5"
          @click="router.push('/')"
          >Cancel</v-btn
        >

        <v-btn
          variant="tonal"
          prepend-icon="mdi-note-edit-outline"
          class="text-capitalize px-5"
          @click="saveNoteHandler"
          :disabled="!noteText.trim()"
          >Save Note</v-btn
        >
      </template>
    </NoteEditor>
  </v-container>
</template>

<script setup>
import NoteEditor from "@/components/NoteEditor.vue";
import { useNotesStore } from "@/store/notesStore.js";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const notesStore = useNotesStore();
const router = useRouter();
const route = useRoute();

const note = notesStore.getNoteContent(route.params.id);

const noteText = ref(note ? note.content : "");
const noteTextRef = ref(null);

const saveNoteHandler = () => {
  notesStore.updateNote(route.params.id, noteText);
  router.push("/");
};
</script>
