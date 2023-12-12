<template>
  <v-card
    :variant="variant"
    max-width="344"
    max-height="300"
    elevation="16"
    :to="url"
  >
    <template v-slot:text>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut
        magnam odit temporibus, nemo iure dolorem, beatae velit quo eius aperiam
        quisquam ad. Nulla, deleniti aperiam. Culpa sed debitis sint. Atque
        nesciunt non eos possimus aperiam eum ullam veniam repudiandae sequi
        alias, odit quaerat vel, est, aspernatur sint. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Mollitia aut magnam odit temporibus,
        nemo iure dolorem, beatae velit quo eius aperiam quisquam ad. Nulla,
        deleniti aperiam. Culpa sed debitis sint. Atque nesciunt non eos
        possimus aperiam eum ullam veniam repudiandae sequi alias, odit quaerat
        vel, est, aspernatur sint.
      </p>
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
        @click.prevent
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
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
const props = defineProps(["url"]);
const theme = useTheme();

const variant = ref("elevated");

watch(
  () => theme,
  (currentTheme) => {
    currentTheme.global.name.value === "dark"
      ? (variant.value = "tonal")
      : (variant.value = "elevated");
  },
  { deep: true }
);
</script>

<style scoped>
.card-text {
  max-height: 210px;
  overflow-y: auto;
}
</style>
