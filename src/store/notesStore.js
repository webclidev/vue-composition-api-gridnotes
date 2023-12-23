import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: useLocalStorage("notes", []),
  }),

  getters: {
    getNoteContent: (state) => {
      return (id) => state.notes.find((note) => note.id === id);
    },

    getTotalNumberOfNotes: (state) => {
      return state.notes.length;
    },

    getTotalNumberOfCharactersOfAllNotes: (state) => {
      let count = 0;
      for (const { content } of state.notes) {
        count += content.length;
      }
      return count;
    },
  },

  actions: {
    addNote(content) {
      this.notes.unshift({
        id: crypto.randomUUID(),
        content,
      });
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    updateNote(id, content) {
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
});
