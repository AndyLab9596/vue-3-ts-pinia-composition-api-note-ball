<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          ref="textAreaRef"
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          v-autofocus
          maxlength="100"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <!-- <button class="button is-link has-background-success">Add new note</button> -->
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAutofocus.ts";
/**
 * props
 *
 */

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Add a new note",
  },
  label: {
    type: String,
  },
});

/**
 * emits
 */

const emit = defineEmits(["update:modelValue"]);

/**
 * focus textarea
 */
const textAreaRef = ref("");

const focusTextArea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>
