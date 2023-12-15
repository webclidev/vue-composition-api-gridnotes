<template>
  <v-card
    :variant="theme === 'dark' ? 'tonal' : 'elevated'"
    max-width="344"
    max-height="300"
    elevation="16"
    :to="note.id"
  >
    <template v-slot:text>
      <p class="card-text">
        {{ note.content }}
      </p>
    </template>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click.prevent
        variant="tonal"
        prepend-icon="mdi-pencil"
        min-width="100"
        class="text-capitalize"
        >Edit</v-btn
      >

      <v-btn
        @click.prevent
        variant="tonal"
        prepend-icon="mdi-trash-can-outline"
        min-width="100"
        class="text-capitalize"
        >Delete</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useTheme } from "vuetify";
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
const { name: theme } = useTheme();
</script>

<style scoped>
.card-text {
  max-height: 210px;
  overflow-y: auto;
}
</style>
