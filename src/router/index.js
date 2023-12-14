import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewNote from "@/views/ViewNote.vue";
import ViewStats from "@/views/ViewStats.vue";

const routes = [
  { path: "/", name: "notes", component: ViewNotes },
  { path: "/:id", name: "note", component: ViewNote },
  { path: "/stats", name: "stats", component: ViewStats },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
