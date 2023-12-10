import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { light, dark } from "@/constants/theme";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light,
      dark,
    },
  },
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount("#app");
