<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>

        <tr>
          <td>Number of of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      type="text"
      placeholder="Do you love noteballs?"
      class="input"
      v-autofocus
      v-model="loveNoteballs"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { useStoreNotes } from "../stores/storeNotes.ts";
import { vAutofocus } from "../directives/vAutofocus.ts";
import { useWatchCharacters } from "../use/useWatchCharacters.ts";

/**
 * store
 */

const storeNotes = useStoreNotes();

/**
 *
 */
const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 50);
</script>
