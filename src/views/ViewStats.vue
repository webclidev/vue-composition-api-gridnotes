<template>
  <v-container>
    <v-card :variant="theme === 'dark' ? 'tonal' : 'elevated'" elevation="16">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Stat</th>
            <th class="text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Notes</td>
            <td>{{ notesStore.getTotalNumberOfNotes }}</td>
          </tr>
          <tr>
            <td>Number of Characters (of all notes)</td>
            <td>{{ notesStore.getTotalNumberOfCharactersOfAllNotes }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useNotesStore } from "@/store/notesStore.js";
const { name: theme } = useTheme();
const notesStore = useNotesStore();
</script>
