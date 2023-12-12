<template>
  <v-app-bar color="primary">
    <v-toolbar-title>
      <p
        class="font-weight-bold cursor-pointer text-mono"
        @click="brandClickHandler"
      >
        <v-icon icon="mdi-checkbox-marked-circle-auto-outline" />
        Noteballs
      </p>
    </v-toolbar-title>

    <template v-slot:append>
      <v-switch
        v-model="isDark"
        hide-details
        inset
        false-icon="mdi-weather-sunny"
        true-icon="mdi-weather-night"
        class="mr-5 mr-sm-10 theme-switch"
        color="dark"
        direction="vertical"
      ></v-switch>

      <v-btn
        v-for="navigationItem in navigationItems"
        :key="navigationItem.to"
        :text="navigationItem.text"
        class="text-capitalize d-none d-sm-flex"
        :to="navigationItem.to"
        :prepend-icon="navigationItem.icon"
      />

      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list-item
      v-for="navigationItem in navigationItems"
      :key="navigationItem.to"
      :to="navigationItem.to"
      :title="navigationItem.text"
      :prepend-icon="navigationItem.icon"
    ></v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
const router = useRouter();
const theme = useTheme();

const isDark = ref(false);
const drawer = ref(false);

const navigationItems = [
  {
    text: "Notes",
    to: "/",
    icon: "mdi-text",
  },
  {
    text: "Stats",
    to: "/stats",
    icon: "mdi-account-details",
  },
];

const brandClickHandler = () => {
  router.push("/");
};

watch(isDark, (isDark) => {
  theme.global.name.value = isDark ? "dark" : "light";
});
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}

.theme-switch >>> .v-switch__track {
  background-color: #fff;
}

.theme-switch >>> .v-switch__track.bg-dark {
  background-color: #000;
}

.theme-switch
  >>> .v-selection-control__wrapper.text-dark
  .v-switch__thumb.v-switch__thumb--filled {
  background-color: #fff;
}
</style>
