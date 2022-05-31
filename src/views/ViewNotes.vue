<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNote"
          class="button is-link has-background-success"
        >
          Add new note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Note from "../components/Notes/Note.vue";
import { useStoreNotes } from "../stores/storeNotes.ts";
import { useWatchCharacters } from "../use/useWatchCharacters.ts";
import AddEditNote from "../components/Notes/AddEditNote.vue";

/* 
Store
*/

const storeNotes = useStoreNotes();
/*
    notes
*/
export interface INote {
  id: string;
  content: string;
}
// const newNoteRef = ref(null);
const newNote = ref("");
const addEditNoteRef = ref(null);

// const notes = ref<INote[]>([
//   { id: "id1", content: "some content here 1" },
//   { id: "id2", content: "some content here 2" },
// ]);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  // let note: INote = {
  //   id: new Date().getTime().toString(),
  //   content: newNote.value,
  // };
  // notes.value.unshift(note);

  newNote.value = "";
  // newNoteRef.value.focus();
  addEditNoteRef.value.focusTextArea();
};

const deleteNote = (idToDelete) => {
  // notes.value = notes.value.filter((note) => note.id !== idToDelete);
  // storeNotes.deleteNote(idToDelete);
};

/**
 * watch characters
 */
useWatchCharacters(newNote);
</script>
