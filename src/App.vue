<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <template v-slot:append>
          <v-btn text="Notes" to="/" prepend-icon="mdi-text"></v-btn>
          <v-btn
            text="Stats"
            to="/stats"
            prepend-icon="mdi-account-details"
          ></v-btn>
        </template>
      </v-app-bar>

      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
