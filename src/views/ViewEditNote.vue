<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit Note"
      label="Edit Note"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">
          Cancel
        </button>

        <button class="button is-link has-background-link" :disabled="!noteContent" @click="handleSaveClick" >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes.ts";

/**
 * store
 */
const storeNotes = useStoreNotes();

/**
 * route
 */
const route = useRoute();
const router = useRouter();

/**
 * note
 */

const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);


/**
 * handleSaveClick
 */
const handleSaveClick = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.back()
}

</script>
