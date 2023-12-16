<template>
  <v-card
    :class="['pa-3', props.class]"
    elevation="16"
    :variant="theme === 'dark' ? 'tonal' : 'elevated'"
  >
    <v-form>
      <v-label v-if="label">{{ label }}</v-label>
      <v-textarea
        :placeholder="placeholder"
        :value="textarea"
        @input="$emit('update:textarea', $event.target.value)"
        counter
        auto-grow
        rows="2"
        :max-rows="maxRows"
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
const props = defineProps({
  class: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Type here",
  },
  label: {
    type: String,
  },
  textarea: {
    type: String,
  },
  maxRows: {
    type: String,
    default: "4",
  },
});
const emit = defineEmits(["update:textarea"]);

const textareaRef = ref(null);

const focus = () => {
  textareaRef.value.focus();
};

defineExpose({
  focus,
});
</script>
