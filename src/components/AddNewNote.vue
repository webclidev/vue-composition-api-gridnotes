<template>
  <v-card
    :class="['pa-3 bg-primary', props.class]"
    elevation="16"
    :variant="theme === 'dark' ? 'tonal' : 'elevated'"
  >
    <v-form>
      <v-textarea
        placeholder="Add a new note"
        counter
        auto-grow
        rows="2"
        max-rows="4"
        :variant="theme === 'dark' ? 'solo-filled' : 'solo'"
        persistent-counter
      >
        <template v-slot:counter="{ counter }">
          <p class="text-white">
            {{ counter }} character{{ counter > 0 ? "s" : "" }}
          </p>
        </template>
      </v-textarea>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        variant="tonal"
        prepend-icon="mdi-note-text-outline"
        class="text-capitalize px-5"
        >Add new note</v-btn
      ></v-card-actions
    >
  </v-card>
</template>

<script setup>
import { useTheme } from "vuetify";
const { name: theme } = useTheme();
const props = defineProps(["class"]);
</script>
