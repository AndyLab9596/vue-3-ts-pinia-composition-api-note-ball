import { defineStore } from 'pinia'

interface INoteState {
    id: string;
    content: string;
}

export type NoteState = {
    notes: INoteState[]
}

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                { id: "id1", content: "some content here 1" },
                { id: "id2", content: "some content here here here 2" },
                { id: "id3", content: "hello world" },
            ]
        } as NoteState
    },

    actions: {
        addNote(newNoteContent: string) {
            console.log('add note', newNoteContent)
            let note: INoteState = {
                id: new Date().getTime().toString(),
                content: newNoteContent,
            };
            this.notes.unshift(note);
        },
        deleteNote(idToDelete: string) {
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        },
        updateNote(id: string, content: string) {
            const indexNote = this.notes.findIndex(note => note.id === id);
            this.notes[indexNote].content = content;
        }
    },

    getters: {
        getNoteContent: (state) => {
            return (id: string) => {
                return state.notes.find(note => note.id === id)?.content
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length;
        },
        totalCharactersCount: (state) => {
            let count = 0;
            state.notes.forEach(note => {
                count += note.content.length
            })
            return count;
        }
    }

})
