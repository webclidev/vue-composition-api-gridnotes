<template>
  <v-app-bar color="primary">
    <template v-slot:title>
      <p class="font-weight-bold cursor-pointer" @click="brandClickHandler">
        <v-icon icon="mdi-checkbox-marked-circle-auto-outline" />
        Noteballs
      </p>
    </template>

    <template v-slot:append>
      <v-switch
        v-model="model"
        hide-details
        inset
        false-icon="mdi-weather-sunny"
        true-icon="mdi-weather-night"
        class="mr-5 theme-switch"
        color="dark"
      ></v-switch>

      <v-btn
        text="Notes"
        class="text-capitalize"
        to="/"
        prepend-icon="mdi-text"
      />

      <v-btn
        text="Stats"
        class="text-capitalize"
        to="/stats"
        prepend-icon="mdi-account-details"
      />
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
const router = useRouter();
const theme = useTheme();

const model = ref(false);

const brandClickHandler = () => {
  router.push("/");
};

watch(model, (model) => {
  theme.global.name.value = model ? "dark" : "light";
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
