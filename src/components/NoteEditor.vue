<template>
  <v-card
    :class="['pa-3 bg-primary', props.class]"
    elevation="16"
    :variant="theme === 'dark' ? 'tonal' : 'elevated'"
  >
    <v-form>
      <v-textarea
        :placeholder="placeholder"
        :value="textarea"
        @input="$emit('update:textarea', $event.target.value)"
        counter
        auto-grow
        rows="2"
        max-rows="4"
        :variant="theme === 'dark' ? 'solo-filled' : 'solo'"
        persistent-counter
        ref="textareaRef"
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

      <slot name="action" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
const { name: theme } = useTheme();
const props = defineProps(["class", "placeholder", "textarea"]);
const emit = defineEmits(["update:textarea"]);

const textareaRef = ref(null);

const focus = () => {
  textareaRef.value.focus();
};

defineExpose({
  focus,
});
</script>
