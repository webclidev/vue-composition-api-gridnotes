<template>
  <v-card
    :variant="theme === 'dark' ? 'tonal' : 'elevated'"
    max-width="344"
    max-height="334"
    elevation="16"
  >
    <template v-slot:text>
      <p class="card-text">
        {{ note.content }}
      </p>

      <div class="text-right mt-5 text-disabled text-body-2 font-italic">
        {{ totalCharacters }}
      </div>
    </template>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click.prevent="router.push(`/edit-note/${note.id}`)"
        variant="tonal"
        prepend-icon="mdi-pencil"
        min-width="100"
        class="text-capitalize"
        >Edit</v-btn
      >

      <v-btn
        variant="tonal"
        prepend-icon="mdi-trash-can-outline"
        min-width="100"
        class="text-capitalize"
        >Delete
        <v-dialog
          v-model="deleteModal"
          activator="parent"
          width="auto"
          max-width="500"
        >
          <v-card
            title="Delete Note"
            :class="theme === 'dark' ? 'bg-primary' : ''"
          >
            <v-card-text>
              Are you sure you want to delete this note?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                variant="tonal"
                prepend-icon="mdi-close"
                min-width="100"
                class="text-capitalize"
                @click="deleteModal = false"
                >Cancel</v-btn
              >

              <v-btn
                variant="tonal"
                prepend-icon="mdi-trash-can-outline"
                min-width="100"
                class="text-capitalize bg-error"
                @click="notesStore.deleteNote(note.id), (deleteModal = false)"
                >Delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify";
import { useNotesStore } from "@/store/notesStore.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
const { name: theme } = useTheme();
const notesStore = useNotesStore();
const router = useRouter();
const deleteModal = ref(false);
const totalCharacters = computed(() => {
  const contentLength = props.note.content.length;
  const description = `${contentLength} character`;

  return contentLength > 1 ? description + "s" : description;
});
</script>

<style scoped>
.card-text {
  max-height: 210px;
  overflow-y: auto;
}
</style>
