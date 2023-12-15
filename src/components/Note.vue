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

      <div class="text-right mt-5 text-disabled text-body-2 font-italic">
        {{ totalCharacters }}
      </div>
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
        @click.prevent="$emit('delete', note.id)"
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
import { computed } from "vue";
import { useTheme } from "vuetify";
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
defineEmits(["delete"]);
const { name: theme } = useTheme();

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
