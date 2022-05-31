<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink href="#" class="card-footer-item" :to="`/editNote/${note.id}`">
        Edit
      </RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script lang="ts" setup>
import { INote } from "../../views/ViewNotes.vue";
import { computed, reactive } from "vue";
import { useStoreNotes } from "../../stores/storeNotes.ts";
import ModalDeleteNote from "./ModalDeleteNote.vue";

interface INoteProps {
  note: INote;
}
const props = defineProps<INoteProps>();
/*
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
*/

/* Define Emit */
const emit = defineEmits<{
  (e: "deleteClicked", id: string): void;
}>();

const storeNotes = useStoreNotes();

const characterLength = computed<number>(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/**
 * modals
 */
const modals = reactive({
  deleteNote: false,
});
</script>
