import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [
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
    ],
  }),

  getters: {
    getNoteContent: (state) => {
      return (noteId) => state.notes.find((note) => note.id === noteId);
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
  },
});
